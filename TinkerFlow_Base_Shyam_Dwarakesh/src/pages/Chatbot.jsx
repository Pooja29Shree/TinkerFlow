import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';

const ASSEMBLYAI_API_KEY = "e07423c4d6494f4b82e1509a4e61f9cf";

const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: "Hello! I'm your AI coding tutor. Ask me anything about programming!", sender: 'bot' }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Refs for audio recording
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handlers for press-and-hold listening
    const handleListenPress = async () => {
        if (isRecording) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            
            mediaRecorder.current.ondataavailable = (event) => {
                audioChunks.current.push(event.data);
            };

            mediaRecorder.current.onstop = async () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                audioChunks.current = [];
                // Stop the media stream tracks
                stream.getTracks().forEach(track => track.stop());
                sendAudioToAssemblyAI(audioBlob);
            };

            audioChunks.current = [];
            mediaRecorder.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Could not access microphone. Please check permissions.");
        }
    };

    const handleListenRelease = () => {
        if (mediaRecorder.current && isRecording) {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    const sendAudioToAssemblyAI = async (audioBlob) => {
        setIsLoading(true);
        setInput("Transcribing...");

        try {
            const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
                method: 'POST',
                headers: {
                    'authorization': ASSEMBLYAI_API_KEY,
                    'content-type': 'application/octet-stream'
                },
                body: audioBlob
            });
            const uploadData = await uploadResponse.json();
            const audioUrl = uploadData.upload_url;

            const transcriptResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
                method: 'POST',
                headers: {
                    'authorization': ASSEMBLYAI_API_KEY,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ audio_url: audioUrl })
            });
            const transcriptData = await transcriptResponse.json();
            const transcriptId = transcriptData.id;

            while (true) {
                const pollResponse = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
                    headers: { 'authorization': ASSEMBLYAI_API_KEY }
                });
                const pollData = await pollResponse.json();

                if (pollData.status === 'completed') {
                    sendMessage(pollData.text);
                    break;
                } else if (pollData.status === 'failed') {
                    throw new Error("Transcription failed.");
                }
                await new Promise(resolve => setTimeout(resolve, 2000));
            }

        } catch (error) {
            console.error("Error with AssemblyAI:", error);
            setMessages(prev => [...prev, { text: "Sorry, speech-to-text failed. Please try again.", sender: 'bot' }]);
            setInput('');
            setIsLoading(false);
        }
    };


    const callGeminiAPI = async (prompt) => {
        setIsLoading(true);
        const fullPrompt = `You are a friendly and helpful coding tutor. Explain the following concept clearly and concisely, providing code examples where appropriate using markdown. Reply in the same language as the user. If the user asks a non-coding question, gently guide them back to programming topics. User's question: "${prompt}"`;
        const chatHistory = [{ role: "user", parts: [{ text: fullPrompt }] }];
        const payload = { contents: chatHistory };
        const apiKey = "AIzaSyCnoqweWSxpLnwoQguyKcekDvNsIeRQeL0";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
                const text = result.candidates[0].content.parts[0].text;
                setMessages(prev => [...prev, { text: text, sender: 'bot' }]);
            } else {
                setMessages(prev => [...prev, { text: "Sorry, I couldn't get a response. Please try again.", sender: 'bot' }]);
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setMessages(prev => [...prev, { text: "An error occurred. Please check the console and try again.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessage = (textToSend = input) => {
        if (textToSend.trim() === '') return;

        const newMessages = [...messages, { text: textToSend, sender: 'user' }];
        setMessages(newMessages);
        setInput('');
        callGeminiAPI(textToSend);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>Personal AI Mentor</h2>
                <button onClick={() => navigate("/main")} className="back-button">
                    Back
                </button>
            </div>
            <div className="message-area">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.sender}`}>
                        <div className={`message-bubble ${msg.sender}`}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="message-container bot">
                         <div className="message-bubble bot">
                             <div className="loading-dots">
                                <div></div>
                                <div></div>
                                <div></div>
                             </div>
                         </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isRecording ? "Listening..." : "Ask a coding question..."}
                    disabled={isLoading}
                />
                <button 
                    onMouseDown={handleListenPress}
                    onMouseUp={handleListenRelease}
                    onTouchStart={handleListenPress}
                    onTouchEnd={handleListenRelease}
                    className={`mic-button ${isRecording ? 'listening' : ''}`} 
                    disabled={isLoading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </button>
                <button onClick={() => sendMessage()} disabled={isLoading || !input} className="send-button">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
