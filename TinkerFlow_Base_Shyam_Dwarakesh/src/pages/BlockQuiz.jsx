import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Helper function to shuffle an array
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};


const DraggableToken = ({ token, index, onDragStart }) => {
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            className="token"
        >
            <pre><code>{token}</code></pre>
        </div>
    );
};

const DropZone = ({ onDrop, onDragOver, children, className }) => {
    return (
        <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            className={`drop-zone ${className || ''}`}
        >
            {children}
        </div>
    );
};


const BlockQuiz = ({ currentLanguageId, currentLevelId }) => {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [jumbledTokens, setJumbledTokens] = useState([]);
    const [droppedTokens, setDroppedTokens] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [showCorrect, setShowCorrect] = useState(false);
    const navigate = useNavigate();

    // Dynamically import questions based on language and level
    useEffect(() => {
        async function loadQuestions() {
            try {
                const module = await import(`../data/${currentLanguageId}/blockQuizQuestions.js`);
                const levelKey = `level${currentLevelId}`;
                const allQuestions = module.default[levelKey] || [];
                setQuizQuestions(allQuestions);
                setCurrentQuestionIndex(0);
            } catch (error) {
                setQuizQuestions([]);
            }
        }
        loadQuestions();
    }, [currentLanguageId, currentLevelId]);

    useEffect(() => {
        if (quizQuestions.length === 0) return;
        const question = quizQuestions[currentQuestionIndex];
        setJumbledTokens(shuffleArray([...question.blocks]));
        setDroppedTokens([]);
        setFeedback('');
        setShowCorrect(false);
    }, [currentQuestionIndex, quizQuestions]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("tokenIndex", index.toString());
        e.dataTransfer.setData("source", "jumbled");
    };

    const handleDropZoneDragStart = (e, index) => {
        e.dataTransfer.setData("tokenIndex", index.toString());
        e.dataTransfer.setData("source", "dropped");
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const tokenIndex = parseInt(e.dataTransfer.getData("tokenIndex"), 10);
        const source = e.dataTransfer.getData("source");

        if (source === "jumbled") {
            const token = jumbledTokens[tokenIndex];
            setDroppedTokens([...droppedTokens, token]);
            setJumbledTokens(jumbledTokens.filter((_, i) => i !== tokenIndex));
        } else {
            const draggedToken = droppedTokens[tokenIndex];
            const newDroppedTokens = droppedTokens.filter((_, i) => i !== tokenIndex);
            setDroppedTokens([...newDroppedTokens, draggedToken]);
        }
    };

    const handleJumbledDrop = (e) => {
        e.preventDefault();
        const tokenIndex = parseInt(e.dataTransfer.getData("tokenIndex"), 10);
        const source = e.dataTransfer.getData("source");
        if (source === "dropped") {
            const token = droppedTokens[tokenIndex];
            setJumbledTokens([...jumbledTokens, token]);
            setDroppedTokens(droppedTokens.filter((_, i) => i !== tokenIndex));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const checkAnswer = () => {
        const question = quizQuestions[currentQuestionIndex];
        const userAnswer = droppedTokens.join(' ');
        const correctAnswer = question.answer.join(' ');

        if (userAnswer === correctAnswer) {
            setFeedback('Correct! Well done.');
        } else {
            setFeedback('Not quite right. Try again!');
        }
        setShowCorrect(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setFeedback("You've completed the quiz! Great job!");
            setShowCorrect(false);
        }
    };

    const resetQuestion = () => {
        const question = quizQuestions[currentQuestionIndex];
        setJumbledTokens(shuffleArray([...question.blocks]));
        setDroppedTokens([]);
        setFeedback('');
        setShowCorrect(false);
    }

    if (quizQuestions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="quiz-content">
                    <h2>No questions available for this level.</h2>
                    <button onClick={() => navigate(`/language/${currentLanguageId}`)} className="back-button">← Back</button>
                </div>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <div className="quiz-content">
                <div className="quiz-header">
                    <h2>Drag & Drop Quiz</h2>
                    <p>{currentQuestion.question}</p>
                </div>

                <div className="quiz-section">
                    <h3>Your Answer:</h3>
                    <DropZone onDrop={handleDrop} onDragOver={handleDragOver}>
                        {droppedTokens.map((token, index) => (
                            <div key={index} draggable onDragStart={(e) => handleDropZoneDragStart(e, index)} className="token">
                                <pre><code>{token}</code></pre>
                            </div>
                        ))}
                        {droppedTokens.length === 0 && <span className="drop-zone-placeholder">Drop tokens here</span>}
                    </DropZone>
                </div>

                <div className="quiz-section">
                    <h3>Available Tokens:</h3>
                    <div onDrop={handleJumbledDrop} onDragOver={handleDragOver} className="token-bank">
                        {jumbledTokens.map((token, index) => (
                            <DraggableToken key={index} token={token} index={index} onDragStart={handleDragStart} />
                        ))}
                        {jumbledTokens.length === 0 && <span className="token-bank-placeholder">All tokens used</span>}
                    </div>
                </div>

                {feedback && (
                    <div className={`feedback-area ${feedback.includes('Correct') ? 'feedback-correct' : 'feedback-incorrect'}`}>
                        <p>{feedback}</p>
                        {showCorrect && currentQuestion && Array.isArray(currentQuestion.answer) ? (
                            <div className="correct-answer-display">
                                <p>Correct Syntax:</p>
                                <pre><code>{currentQuestion.answer.join(' ')}</code></pre>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>

            <div className="quiz-footer">
                <button onClick={() => navigate(`/online/${currentLanguageId}/${currentLevelId}`)} className="back-button">
                    ← Back to content
                </button>
                <div className="button-group">
                    <button onClick={resetQuestion} className="reset-button">
                        Reset
                    </button>
                    <button onClick={checkAnswer} disabled={showCorrect} className="check-button">
                        Check Answer
                    </button>
                    {showCorrect && (
                        <button onClick={nextQuestion} className="next-button">
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlockQuiz;
