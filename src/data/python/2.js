export const en = `
    <h2>Chapter 1: Python Operators</h2>
    <p><strong>What are Operators?</strong><br>
    Operators are special symbols that tell Python to perform specific operations on data. Think of operators like tools in a toolbox - each tool has a specific job to do. Just like how a hammer is used for hitting nails and a screwdriver for turning screws, different operators do different jobs with our data.</p>

    <h3>1.1 Arithmetic Operators</h3>
    <p>Arithmetic operators are used to perform mathematical calculations, just like the math you do with pen and paper.</p>
    <h4>Basic Arithmetic Operators</h4>
    <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>Addition</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>Subtraction</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>Multiplication</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>Division</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>Floor Division</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>Modulus (Remainder)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>Exponent (Power)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>Detailed Examples</h4>
    <p><strong>Addition (+):</strong></p>
    <pre><code>
# Adding numbers
total_students = 25 + 30 # 55
print("Total students:", total_students)

# Adding variables
boys = 15
girls = 20
total = boys + girls # 35
print("Total children:", total)

# Adding strings (concatenation)
first_name = "Ravi"
last_name = "Kumar"
full_name = first_name + " " + last_name # "Ravi Kumar"
print("Full name:", full_name)
    </code></pre>

    <p><strong>Subtraction (-):</strong></p>
    <pre><code>
# Simple subtraction
remaining_rice = 50 - 15 # 35 kg remaining
print("Rice remaining:", remaining_rice, "kg")

# Calculating change
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("Change to return:", change, "rupees")
    </code></pre>

    <h3>1.2 Comparison Operators</h3>
    <p>Comparison operators are used to compare two values. They always return True or False.</p>
    <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>Equal to</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>Not equal to</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>Greater than</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>Less than</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>Greater than or equal</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>Less than or equal</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 Logical Operators</h3>
    <p>Logical operators are used to combine multiple conditions.</p>
    <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>Logical AND</td>
                <td>True if both conditions are True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>Logical OR</td>
                <td>True if at least one condition is True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>Logical NOT</td>
                <td>Opposite of the condition</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 Assignment Operators</h3>
    <p>Assignment operators are used to assign values to variables.</p>
     <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Equivalent</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>Simple assignment</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>Add and assign</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>Subtract and assign</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>Multiply and assign</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>Divide and assign</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>Floor divide and assign</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>Modulus and assign</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>Power and assign</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>Chapter 2: Python Keywords</h2>
    <p><strong>What are Keywords?</strong><br>
    Keywords are reserved words in Python that have special meanings. You cannot use these words as variable names.</p>
    
    <h3>List of Python Keywords</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>Chapter 3: Conditional Statements in Python</h2>
    <p><strong>What are Conditional Statements?</strong><br>
    Conditional statements help our programs make decisions, executing certain code based on whether a condition is true or false.</p>

    <h3>3.1 The if Statement</h3>
    <pre><code>
if condition:
    # Code to execute if condition is True
    statement1
    </code></pre>

    <h3>3.2 The if-else Statement</h3>
    <pre><code>
if condition:
    # Code when condition is True
    statement1
else:
    # Code when condition is False
    statement2
    </code></pre>

    <h3>3.3 The if-elif-else Statement</h3>
    <pre><code>
if condition1:
    # Code when condition1 is True
    statement1
elif condition2:
    # Code when condition2 is True
    statement2
else:
    # Code when none of the conditions are True
    statement3
    </code></pre>

    <h2>Summary and Practice</h2>
    <h3>Key Points to Remember</h3>
    <ul>
        <li>Operators are tools that help us work with data.</li>
        <li>Keywords are special reserved words in Python.</li>
        <li>Conditional statements (if, elif, else) help programs make decisions.</li>
    </ul>

    <h3>Practice Exercises</h3>
    <ol>
        <li><strong>Simple Calculator:</strong> Write a program that asks the user for two numbers and an operator (+, -, *, /) and performs the calculation.</li>
        <li><strong>Grade Calculator:</strong> Create a program that takes marks for 5 subjects and calculates total, average, grade, and pass/fail status.</li>
        <li><strong>Age Category Classifier:</strong> Write a program that takes age as input and classifies the person (Child, Teenager, Adult, Senior Citizen).</li>
        <li><strong>Electricity Bill Calculator:</strong> Create a program to calculate an electricity bill based on different unit slabs.</li>
    </ol>
`;

export const hi = `
    <h2>अध्याय 1: पायथन ऑपरेटर्स</h2>
    <p><strong>ऑपरेटर क्या हैं?</strong><br>
    ऑपरेटर विशेष प्रतीक हैं जो पायथन को डेटा पर विशिष्ट कार्य करने के लिए कहते हैं। ऑपरेटरों को एक टूलबॉक्स में उपकरणों की तरह सोचें - प्रत्येक उपकरण का एक विशिष्ट कार्य होता है। जिस तरह हथौड़ा का उपयोग कील ठोकने के लिए किया जाता है और स्क्रूड्राइवर का उपयोग स्क्रू कसने के लिए किया जाता है, उसी तरह अलग-अलग ऑपरेटर हमारे डेटा के साथ अलग-अलग काम करते हैं।</p>

    <h3>1.1 अंकगणितीय ऑपरेटर</h3>
    <p>अंकगणितीय ऑपरेटरों का उपयोग गणितीय गणना करने के लिए किया जाता है, ठीक वैसे ही जैसे आप कलम और कागज से गणित करते हैं।</p>
    <h4>मूल अंकगणितीय ऑपरेटर</h4>
    <table>
        <thead>
            <tr>
                <th>ऑपरेटर</th>
                <th>नाम</th>
                <th>उदाहरण</th>
                <th>परिणाम</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>जोड़</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>घटाव</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>गुणा</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>भाग</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>फ्लोर डिवीजन</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>मॉड्यूलस (शेष)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>एक्सपोनेंट (घात)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>विस्तृत उदाहरण</h4>
    <p><strong>जोड़ (+):</strong></p>
    <pre><code>
# संख्याओं को जोड़ना
total_students = 25 + 30 # 55
print("कुल छात्र:", total_students)

# चर (variables) जोड़ना
boys = 15
girls = 20
total = boys + girls # 35
print("कुल बच्चे:", total)

# स्ट्रिंग्स को जोड़ना (concatenation)
first_name = "रवि"
last_name = "कुमार"
full_name = first_name + " " + last_name # "रवि कुमार"
print("पूरा नाम:", full_name)
    </code></pre>

    <p><strong>घटाव (-):</strong></p>
    <pre><code>
# सामान्य घटाव
remaining_rice = 50 - 15 # 35 किलो शेष
print("शेष चावल:", remaining_rice, "किलो")

# बकाया की गणना करना
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("वापस करने के लिए बकाया:", change, "रुपये")
    </code></pre>

    <h3>1.2 तुलनात्मक ऑपरेटर</h3>
    <p>तुलनात्मक ऑपरेटरों का उपयोग दो मानों की तुलना करने के लिए किया जाता है। वे हमेशा True या False लौटाते हैं।</p>
    <table>
        <thead>
            <tr>
                <th>ऑपरेटर</th>
                <th>नाम</th>
                <th>उदाहरण</th>
                <th>परिणाम</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>के बराबर</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>के बराबर नहीं</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>से बड़ा</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>से छोटा</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>से बड़ा या बराबर</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>से छोटा या बराबर</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 तार्किक ऑपरेटर</h3>
    <p>तार्किक ऑपरेटरों का उपयोग कई शर्तों को संयोजित करने के लिए किया जाता है।</p>
    <table>
        <thead>
            <tr>
                <th>ऑपरेटर</th>
                <th>नाम</th>
                <th>विवरण</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>तार्किक AND</td>
                <td>यदि दोनों शर्तें True हैं तो True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>तार्किक OR</td>
                <td>यदि कम से कम एक शर्त True है तो True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>तार्किक NOT</td>
                <td>शर्त का विपरीत</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 असाइनमेंट ऑपरेटर</h3>
    <p>असाइनमेंट ऑपरेटरों का उपयोग चर को मान निर्दिष्ट करने के लिए किया जाता है।</p>
     <table>
        <thead>
            <tr>
                <th>ऑपरेटर</th>
                <th>नाम</th>
                <th>उदाहरण</th>
                <th>समकक्ष</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>सरल असाइनमेंट</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>जोड़ें और असाइन करें</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>घटाएं और असाइन करें</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>गुणा करें और असाइन करें</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>भाग करें और असाइन करें</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>फ्लोर भाग और असाइन करें</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>मॉड्यूलस और असाइन करें</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>घात और असाइन करें</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>अध्याय 2: पायथन कीवर्ड</h2>
    <p><strong>कीवर्ड क्या हैं?</strong><br>
    कीवर्ड पायथन में आरक्षित शब्द हैं जिनका विशेष अर्थ होता है। आप इन शब्दों का उपयोग चर (variable) नामों के रूप में नहीं कर सकते हैं।</p>
    
    <h3>पायथन कीवर्ड की सूची</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>अध्याय 3: पायथन में कंडीशनल स्टेटमेंट</h2>
    <p><strong>कंडीशनल स्टेटमेंट क्या हैं?</strong><br>
    कंडीशनल स्टेटमेंट हमारे प्रोग्राम को यह तय करने में मदद करते हैं कि कोई शर्त सही है या गलत, इसके आधार पर कुछ कोड चलाएं।</p>

    <h3>3.1 if स्टेटमेंट</h3>
    <pre><code>
if condition:
    # यदि शर्त True है तो कोड चलाएं
    statement1
    </code></pre>

    <h3>3.2 if-else स्टेटमेंट</h3>
    <pre><code>
if condition:
    # जब शर्त True हो तो कोड
    statement1
else:
    # जब शर्त False हो तो कोड
    statement2
    </code></pre>

    <h3>3.3 if-elif-else स्टेटमेंट</h3>
    <pre><code>
if condition1:
    # जब condition1 True हो तो कोड
    statement1
elif condition2:
    # जब condition2 True हो तो कोड
    statement2
else:
    # जब कोई भी शर्त True न हो तो कोड
    statement3
    </code></pre>

    <h2>सारांश और अभ्यास</h2>
    <h3>याद रखने योग्य मुख्य बिंदु</h3>
    <ul>
        <li>ऑपरेटर ऐसे उपकरण हैं जो हमें डेटा के साथ काम करने में मदद करते हैं।</li>
        <li>कीवर्ड पायथन में विशेष आरक्षित शब्द हैं।</li>
        <li>कंडीशनल स्टेटमेंट (if, elif, else) प्रोग्राम को निर्णय लेने में मदद करते हैं।</li>
    </ul>

    <h3>अभ्यास प्रश्न</h3>
    <ol>
        <li><strong>सरल कैलकुलेटर:</strong> एक प्रोग्राम लिखें जो उपयोगकर्ता से दो संख्याएं और एक ऑपरेटर (+, -, *, /) मांगता है और गणना करता है।</li>
        <li><strong>ग्रेड कैलकुलेटर:</strong> 5 विषयों के लिए अंक लेने और कुल, औसत, ग्रेड और पास/फेल की स्थिति की गणना करने के लिए एक प्रोग्राम बनाएं।</li>
        <li><strong>आयु श्रेणी वर्गीकरण:</strong> एक प्रोग्राम लिखें जो इनपुट के रूप में आयु लेता है और व्यक्ति को वर्गीकृत करता है (बच्चा, किशोर, वयस्क, वरिष्ठ नागरिक)।</li>
        <li><strong>बिजली बिल कैलकुलेटर:</strong> विभिन्न यूनिट स्लैब के आधार पर बिजली बिल की गणना करने के लिए एक प्रोग्राम बनाएं।</li>
    </ol>
`;

export const kn = `
    <h2>ಅಧ್ಯಾಯ 1: ಪೈಥಾನ್ ಆಪರೇಟರ್‌ಗಳು</h2>
    <p><strong>ಆಪರೇಟರ್‌ಗಳು ಎಂದರೇನು?</strong><br>
    ಆಪರೇಟರ್‌ಗಳು ಪೈಥಾನ್‌ಗೆ ಡೇಟಾದ ಮೇಲೆ ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಮಾಡಲು ಹೇಳುವ ವಿಶೇಷ ಚಿಹ್ನೆಗಳಾಗಿವೆ. ಆಪರೇಟರ್‌ಗಳನ್ನು ಒಂದು ಟೂಲ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿರುವ ಉಪಕರಣಗಳಂತೆ ಯೋಚಿಸಿ - ಪ್ರತಿಯೊಂದು ಉಪಕರಣಕ್ಕೂ ಒಂದು ನಿರ್ದಿಷ್ಟ ಕೆಲಸವಿದೆ. ಸುತ್ತಿಗೆಯನ್ನು ಮೊಳೆ ಹೊಡೆಯಲು ಮತ್ತು ಸ್ಕ್ರೂಡ್ರೈವರ್ ಅನ್ನು ಸ್ಕ್ರೂ ತಿರುಗಿಸಲು ಬಳಸಿದಂತೆ, ವಿಭಿನ್ನ ಆಪರೇಟರ್‌ಗಳು ನಮ್ಮ ಡೇಟಾದೊಂದಿಗೆ ವಿಭಿನ್ನ ಕೆಲಸಗಳನ್ನು ಮಾಡುತ್ತವೆ.</p>

    <h3>1.1 ಅಂಕಗಣಿತದ ಆಪರೇಟರ್‌ಗಳು</h3>
    <p>ಅಂಕಗಣಿತದ ಆಪರೇಟರ್‌ಗಳನ್ನು ಗಣಿತದ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ, ನೀವು ಪೆನ್ ಮತ್ತು ಪೇಪರ್‌ನೊಂದಿಗೆ ಮಾಡುವ ಗಣಿತದಂತೆಯೇ.</p>
    <h4>ಮೂಲ ಅಂಕಗಣಿತದ ಆಪರೇಟರ್‌ಗಳು</h4>
    <table>
        <thead>
            <tr>
                <th>ಆಪರೇಟರ್</th>
                <th>ಹೆಸರು</th>
                <th>ಉದಾಹರಣೆ</th>
                <th>ಫಲಿತಾಂಶ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>ಸೇರ್ಪಡೆ</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>ವ್ಯವಕಲನ</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>ಗುಣಾಕಾರ</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>ಭಾಗಾಕಾರ</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>ಫ್ಲೋರ್ ಡಿವಿಷನ್</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>ಮಾಡ್ಯುಲಸ್ (ಶೇಷ)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>ಘಾತ (ಪವರ್)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>ವಿವರವಾದ ಉದಾಹರಣೆಗಳು</h4>
    <p><strong>ಸೇರ್ಪಡೆ (+):</strong></p>
    <pre><code>
# ಸಂಖ್ಯೆಗಳನ್ನು ಸೇರಿಸುವುದು
total_students = 25 + 30 # 55
print("ಒಟ್ಟು ವಿದ್ಯಾರ್ಥಿಗಳು:", total_students)

# ವೇರಿಯೇಬಲ್‌ಗಳನ್ನು ಸೇರಿಸುವುದು
boys = 15
girls = 20
total = boys + girls # 35
print("ಒಟ್ಟು ಮಕ್ಕಳು:", total)

# ಸ್ಟ್ರಿಂಗ್‌ಗಳನ್ನು ಸೇರಿಸುವುದು (concatenation)
first_name = "ರವಿ"
last_name = "ಕುಮಾರ್"
full_name = first_name + " " + last_name # "ರವಿ ಕುಮಾರ್"
print("ಪೂರ್ಣ ಹೆಸರು:", full_name)
    </code></pre>

    <p><strong>ವ್ಯವಕಲನ (-):</strong></p>
    <pre><code>
# ಸರಳ ವ್ಯವಕಲನ
remaining_rice = 50 - 15 # 35 ಕೆಜಿ ಉಳಿದಿದೆ
print("ಉಳಿದಿರುವ ಅಕ್ಕಿ:", remaining_rice, "ಕೆಜಿ")

# ಬದಲಾವಣೆಯನ್ನು ಲೆಕ್ಕ ಹಾಕುವುದು
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("ಹಿಂತಿರುಗಿಸಬೇಕಾದ ಬದಲಾವಣೆ:", change, "ರೂಪಾಯಿಗಳು")
    </code></pre>

    <h3>1.2 ಹೋಲಿಕೆ ಆಪರೇಟರ್‌ಗಳು</h3>
    <p>ಹೋಲಿಕೆ ಆಪರೇಟರ್‌ಗಳನ್ನು ಎರಡು ಮೌಲ್ಯಗಳನ್ನು ಹೋಲಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ. ಅವು ಯಾವಾಗಲೂ True ಅಥವಾ False ಅನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತವೆ.</p>
    <table>
        <thead>
            <tr>
                <th>ಆಪರೇಟರ್</th>
                <th>ಹೆಸರು</th>
                <th>ಉದಾಹರಣೆ</th>
                <th>ಫಲಿತಾಂಶ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>ಸಮಾನ</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>ಸಮಾನವಾಗಿಲ್ಲ</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>ಗಿಂತ ದೊಡ್ಡದು</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>ಗಿಂತ ಚಿಕ್ಕದು</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>ಗಿಂತ ದೊಡ್ಡದು ಅಥವಾ ಸಮಾನ</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>ಗಿಂತ ಚಿಕ್ಕದು ಅಥವಾ ಸಮಾನ</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 ತಾರ್ಕಿಕ ಆಪರೇಟರ್‌ಗಳು</h3>
    <p>ತಾರ್ಕಿಕ ಆಪರೇಟರ್‌ಗಳನ್ನು ಅನೇಕ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಸಂಯೋಜಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.</p>
    <table>
        <thead>
            <tr>
                <th>ಆಪರೇಟರ್</th>
                <th>ಹೆಸರು</th>
                <th>ವಿವರಣೆ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>ತಾರ್ಕಿಕ AND</td>
                <td>ಎರಡೂ ಪರಿಸ್ಥಿತಿಗಳು True ಆಗಿದ್ದರೆ True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>ತಾರ್ಕಿಕ OR</td>
                <td>ಕನಿಷ್ಠ ಒಂದು ಪರಿಸ್ಥಿತಿಯು True ಆಗಿದ್ದರೆ True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>ತಾರ್ಕಿಕ NOT</td>
                <td>ಪರಿಸ್ಥಿತಿಯ ವಿರುದ್ಧ</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 ಅಸೈನ್‌ಮೆಂಟ್ ಆಪರೇಟರ್‌ಗಳು</h3>
    <p>ಅಸೈನ್‌ಮೆಂಟ್ ಆಪರೇಟರ್‌ಗಳನ್ನು ವೇರಿಯೇಬಲ್‌ಗಳಿಗೆ ಮೌಲ್ಯಗಳನ್ನು ನಿಯೋಜಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.</p>
     <table>
        <thead>
            <tr>
                <th>ಆಪರೇಟರ್</th>
                <th>ಹೆಸರು</th>
                <th>ಉದಾಹರಣೆ</th>
                <th>ಸಮಾನ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>ಸರಳ ಅಸೈನ್‌ಮೆಂಟ್</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>ಸೇರಿಸಿ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>ಕಳೆಯಿರಿ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>ಗುಣಿಸಿ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>ಭಾಗಿಸಿ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>ಫ್ಲೋರ್ ಭಾಗಿಸಿ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>ಮಾಡ್ಯುಲಸ್ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>ಪವರ್ ಮತ್ತು ನಿಯೋಜಿಸಿ</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>ಅಧ್ಯಾಯ 2: ಪೈಥಾನ್ ಕೀವರ್ಡ್‌ಗಳು</h2>
    <p><strong>ಕೀವರ್ಡ್‌ಗಳು ಎಂದರೇನು?</strong><br>
    ಕೀವರ್ಡ್‌ಗಳು ಪೈಥಾನ್‌ನಲ್ಲಿ ವಿಶೇಷ ಅರ್ಥಗಳನ್ನು ಹೊಂದಿರುವ ಕಾಯ್ದಿರಿಸಿದ ಪದಗಳಾಗಿವೆ. ಈ ಪದಗಳನ್ನು ನೀವು ವೇರಿಯೇಬಲ್ ಹೆಸರುಗಳಾಗಿ ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ.</p>
    
    <h3>ಪೈಥಾನ್ ಕೀವರ್ಡ್‌ಗಳ ಪಟ್ಟಿ</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>ಅಧ್ಯಾಯ 3: ಪೈಥಾನ್‌ನಲ್ಲಿ ಕಂಡಿಷನಲ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು</h2>
    <p><strong>ಕಂಡಿಷನಲ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು ಎಂದರೇನು?</strong><br>
    ಕಂಡಿಷನಲ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು ಒಂದು ಷರತ್ತು ನಿಜವೋ ಅಥವಾ ಸುಳ್ಳೋ ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ, ನಮ್ಮ ಪ್ರೋಗ್ರಾಂಗಳು ನಿರ್ದಿಷ್ಟ ಕೋಡ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</p>

    <h3>3.1 if ಸ್ಟೇಟ್‌ಮೆಂಟ್</h3>
    <pre><code>
if condition:
    # ಷರತ್ತು True ಆಗಿದ್ದರೆ ಕಾರ್ಯಗತಗೊಳಿಸಬೇಕಾದ ಕೋಡ್
    statement1
    </code></pre>

    <h3>3.2 if-else ಸ್ಟೇಟ್‌ಮೆಂಟ್</h3>
    <pre><code>
if condition:
    # ಷರತ್ತು True ಆಗಿರುವಾಗ ಕೋಡ್
    statement1
else:
    # ಷರತ್ತು False ಆಗಿರುವಾಗ ಕೋಡ್
    statement2
    </code></pre>

    <h3>3.3 if-elif-else ಸ್ಟೇಟ್‌ಮೆಂಟ್</h3>
    <pre><code>
if condition1:
    # condition1 True ಆಗಿರುವಾಗ ಕೋಡ್
    statement1
elif condition2:
    # condition2 True ಆಗಿರುವಾಗ ಕೋಡ್
    statement2
else:
    # ಯಾವುದೇ ಷರತ್ತುಗಳು True ಆಗಿಲ್ಲದಿದ್ದಾಗ ಕೋಡ್
    statement3
    </code></pre>

    <h2>ಸಾರಾಂಶ ಮತ್ತು ಅಭ್ಯಾಸ</h2>
    <h3>ನೆನಪಿನಲ್ಲಿಟ್ಟುಕೊಳ್ಳಬೇಕಾದ ಪ್ರಮುಖ ಅಂಶಗಳು</h3>
    <ul>
        <li>ಆಪರೇಟರ್‌ಗಳು ನಾವು ಡೇಟಾದೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು ಸಹಾಯ ಮಾಡುವ ಉಪಕರಣಗಳಾಗಿವೆ.</li>
        <li>ಕೀವರ್ಡ್‌ಗಳು ಪೈಥಾನ್‌ನಲ್ಲಿ ವಿಶೇಷ ಕಾಯ್ದಿರಿಸಿದ ಪದಗಳಾಗಿವೆ.</li>
        <li>ಕಂಡಿಷನಲ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು (if, elif, else) ಪ್ರೋಗ್ರಾಂಗಳಿಗೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</li>
    </ul>

    <h3>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</h3>
    <ol>
        <li><strong>ಸರಳ ಕ್ಯಾಲ್ಕುಲೇಟರ್:</strong> ಬಳಕೆದಾರರಿಂದ ಎರಡು ಸಂಖ್ಯೆಗಳನ್ನು ಮತ್ತು ಒಂದು ಆಪರೇಟರ್ ಅನ್ನು (+, -, *, /) ಕೇಳುವ ಮತ್ತು ಲೆಕ್ಕಾಚಾರವನ್ನು ನಿರ್ವಹಿಸುವ ಒಂದು ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಬರೆಯಿರಿ.</li>
        <li><strong>ಗ್ರೇಡ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್:</strong> 5 ವಿಷಯಗಳ ಅಂಕಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಒಟ್ಟು, ಸರಾಸರಿ, ಗ್ರೇಡ್ ಮತ್ತು ಪಾಸ್/ಫೇಲ್ ಸ್ಥಿತಿಯನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡುವ ಒಂದು ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ರಚಿಸಿ.</li>
        <li><strong>ವಯಸ್ಸಿನ ವರ್ಗೀಕರಣ:</strong> ವಯಸ್ಸನ್ನು ಇನ್‌ಪುಟ್ ಆಗಿ ತೆಗೆದುಕೊಂಡು ವ್ಯಕ್ತಿಯನ್ನು ವರ್ಗೀಕರಿಸುವ (ಮಗು, ಹದಿಹರೆಯದವರು, ವಯಸ್ಕರು, ಹಿರಿಯ ನಾಗರಿಕರು) ಒಂದು ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಬರೆಯಿರಿ.</li>
        <li><strong>ವಿದ್ಯುತ್ ಬಿಲ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್:</strong> ವಿಭಿನ್ನ ಯೂನಿಟ್ ಸ್ಲಾಬ್‌ಗಳ ಆಧಾರದ ಮೇಲೆ ವಿದ್ಯುತ್ ಬಿಲ್ ಅನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಒಂದು ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ರಚಿಸಿ.</li>
    </ol>
`;

export const ml = `
    <h2>അദ്ധ്യായം 1: പൈത്തൺ ഓപ്പറേറ്ററുകൾ</h2>
    <p><strong>എന്താണ് ഓപ്പറേറ്ററുകൾ?</strong><br>
    ഓപ്പറേറ്ററുകൾ പൈത്തണിന് ഡാറ്റയിൽ പ്രത്യേക പ്രവർത്തനങ്ങൾ നടത്താൻ നിർദ്ദേശിക്കുന്ന പ്രത്യേക ചിഹ്നങ്ങളാണ്. ഓപ്പറേറ്ററുകളെ ഒരു ടൂൾബോക്സിലെ ഉപകരണങ്ങൾ പോലെ ചിന്തിക്കുക - ഓരോ ഉപകരണത്തിനും ഒരു പ്രത്യേക ജോലിയുണ്ട്. ചുറ്റിക ആണി അടിക്കാൻ ഉപയോഗിക്കുന്നതും സ്ക്രൂഡ്രൈവർ സ്ക്രൂകൾ തിരിക്കാൻ ഉപയോഗിക്കുന്നതും പോലെ, വ്യത്യസ്ത ഓപ്പറേറ്ററുകൾ നമ്മുടെ ഡാറ്റയുമായി വ്യത്യസ്ത ജോലികൾ ചെയ്യുന്നു.</p>

    <h3>1.1 അരിത്മെറ്റിക് ഓപ്പറേറ്ററുകൾ</h3>
    <p>അരിത്മെറ്റിക് ഓപ്പറേറ്ററുകൾ ഗണിതപരമായ കണക്കുകൂട്ടലുകൾ നടത്താൻ ഉപയോഗിക്കുന്നു, നിങ്ങൾ പേനയും പേപ്പറും ഉപയോഗിച്ച് ചെയ്യുന്ന കണക്ക് പോലെ.</p>
    <h4>അടിസ്ഥാന അരിത്മെറ്റിക് ഓപ്പറേറ്ററുകൾ</h4>
    <table>
        <thead>
            <tr>
                <th>ഓപ്പറേറ്റർ</th>
                <th>പേര്</th>
                <th>ഉദാഹരണം</th>
                <th>ഫലം</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>കൂട്ടൽ</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>കുറയ്ക്കൽ</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>ഗുണനം</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>ഹരണം</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>ഫ്ലോർ ഡിവിഷൻ</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>മോഡ്യൂലസ് (ശേഷി)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>എക്സ്പോണന്റ് (പവർ)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>വിശദമായ ഉദാഹരണങ്ങൾ</h4>
    <p><strong>കൂട്ടൽ (+):</strong></p>
    <pre><code>
# സംഖ്യകൾ കൂട്ടുന്നു
total_students = 25 + 30 # 55
print("ആകെ വിദ്യാർത്ഥികൾ:", total_students)

# വേരിയബിളുകൾ കൂട്ടുന്നു
boys = 15
girls = 20
total = boys + girls # 35
print("ആകെ കുട്ടികൾ:", total)

# സ്ട്രിംഗുകൾ കൂട്ടിച്ചേർക്കുന്നു (concatenation)
first_name = "രവി"
last_name = "കുമാർ"
full_name = first_name + " " + last_name # "രവി കുമാർ"
print("മുഴുവൻ പേര്:", full_name)
    </code></pre>

    <p><strong>കുറയ്ക്കൽ (-):</strong></p>
    <pre><code>
# ലളിതമായ കുറയ്ക്കൽ
remaining_rice = 50 - 15 # 35 കിലോ ശേഷിക്കുന്നു
print("ശേഷിക്കുന്ന അരി:", remaining_rice, "കിലോ")

# ബാക്കി പണം കണക്കാക്കുന്നു
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("തിരികെ നൽകാനുള്ള ബാക്കി:", change, "രൂപ")
    </code></pre>

    <h3>1.2 താരതമ്യ ഓപ്പറേറ്ററുകൾ</h3>
    <p>താരതമ്യ ഓപ്പറേറ്ററുകൾ രണ്ട് മൂല്യങ്ങളെ താരതമ്യം ചെയ്യാൻ ഉപയോഗിക്കുന്നു. അവ എപ്പോഴും True അല്ലെങ്കിൽ False തിരികെ നൽകുന്നു.</p>
    <table>
        <thead>
            <tr>
                <th>ഓപ്പറേറ്റർ</th>
                <th>പേര്</th>
                <th>ഉദാഹരണം</th>
                <th>ഫലം</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>തുല്യം</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>തുല്യമല്ല</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>വലുത്</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>ചെറുത്</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>വലുതോ തുല്യമോ</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>ചെറുതോ തുല്യമോ</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 ലോജിക്കൽ ഓപ്പറേറ്ററുകൾ</h3>
    <p>ലോജിക്കൽ ഓപ്പറേറ്ററുകൾ ഒന്നിലധികം വ്യവസ്ഥകൾ സംയോജിപ്പിക്കാൻ ഉപയോഗിക്കുന്നു.</p>
    <table>
        <thead>
            <tr>
                <th>ഓപ്പറേറ്റർ</th>
                <th>പേര്</th>
                <th>വിവരണം</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>ലോജിക്കൽ AND</td>
                <td>രണ്ട് വ്യവസ്ഥകളും True ആണെങ്കിൽ True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>ലോജിക്കൽ OR</td>
                <td>കുറഞ്ഞത് ഒരു വ്യവസ്ഥയെങ്കിലും True ആണെങ്കിൽ True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>ലോജിക്കൽ NOT</td>
                <td>വ്യവസ്ഥയുടെ വിപരീതം</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 അസൈൻമെന്റ് ഓപ്പറേറ്ററുകൾ</h3>
    <p>അസൈൻമെന്റ് ഓപ്പറേറ്ററുകൾ വേരിയബിളുകൾക്ക് മൂല്യങ്ങൾ നൽകാൻ ഉപയോഗിക്കുന്നു.</p>
     <table>
        <thead>
            <tr>
                <th>ഓപ്പറേറ്റർ</th>
                <th>പേര്</th>
                <th>ഉദാഹരണം</th>
                <th>തത്തുല്യം</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>ലളിതമായ അസൈൻമെന്റ്</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>കൂട്ടി അസൈൻ ചെയ്യുന്നു</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>കുറച്ച് അസൈൻ ചെയ്യുന്നു</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>ഗുണിച്ച് അസൈൻ ചെയ്യുന്നു</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>ഹരിച്ച് അസൈൻ ചെയ്യുന്നു</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>ഫ്ലോർ ഹരിച്ച് അസൈൻ ചെയ്യുന്നു</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>മോഡ്യൂലസ് ചെയ്ത് അസൈൻ ചെയ്യുന്നു</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>പവർ ചെയ്ത് അസൈൻ ചെയ്യുന്നു</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>അദ്ധ്യായം 2: പൈത്തൺ കീവേഡുകൾ</h2>
    <p><strong>എന്താണ് കീവേഡുകൾ?</strong><br>
    കീവേഡുകൾ പൈത്തണിൽ പ്രത്യേക അർത്ഥങ്ങളുള്ള റിസർവ് ചെയ്ത വാക്കുകളാണ്. ഈ വാക്കുകൾ നിങ്ങൾക്ക് വേരിയബിൾ നാമങ്ങളായി ഉപയോഗിക്കാൻ കഴിയില്ല.</p>
    
    <h3>പൈത്തൺ കീവേഡുകളുടെ പട്ടിക</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>അദ്ധ്യായം 3: പൈത്തണിലെ കണ്ടീഷണൽ സ്റ്റേറ്റ്‌മെന്റുകൾ</h2>
    <p><strong>എന്താണ് കണ്ടീഷണൽ സ്റ്റേറ്റ്‌മെന്റുകൾ?</strong><br>
    ഒരു വ്യവസ്ഥ ശരിയാണോ തെറ്റാണോ എന്നതിനെ അടിസ്ഥാനമാക്കി, ചില കോഡ് പ്രവർത്തിപ്പിക്കാൻ കണ്ടീഷണൽ സ്റ്റേറ്റ്‌മെന്റുകൾ നമ്മുടെ പ്രോഗ്രാമുകളെ തീരുമാനമെടുക്കാൻ സഹായിക്കുന്നു.</p>

    <h3>3.1 if സ്റ്റേറ്റ്‌മെന്റ്</h3>
    <pre><code>
if condition:
    # വ്യവസ്ഥ True ആണെങ്കിൽ പ്രവർത്തിപ്പിക്കേണ്ട കോഡ്
    statement1
    </code></pre>

    <h3>3.2 if-else സ്റ്റേറ്റ്‌മെന്റ്</h3>
    <pre><code>
if condition:
    # വ്യവസ്ഥ True ആയിരിക്കുമ്പോൾ ഉള്ള കോഡ്
    statement1
else:
    # വ്യവസ്ഥ False ആയിരിക്കുമ്പോൾ ഉള്ള കോഡ്
    statement2
    </code></pre>

    <h3>3.3 if-elif-else സ്റ്റേറ്റ്‌മെന്റ്</h3>
    <pre><code>
if condition1:
    # condition1 True ആയിരിക്കുമ്പോൾ ഉള്ള കോഡ്
    statement1
elif condition2:
    # condition2 True ആയിരിക്കുമ്പോൾ ഉള്ള കോഡ്
    statement2
else:
    # വ്യവസ്ഥകളൊന്നും True അല്ലാത്തപ്പോൾ ഉള്ള കോഡ്
    statement3
    </code></pre>

    <h2>സംഗ്രഹവും പരിശീലനവും</h2>
    <h3>ഓർമ്മിക്കേണ്ട പ്രധാന കാര്യങ്ങൾ</h3>
    <ul>
        <li>ഡാറ്റയുമായി പ്രവർത്തിക്കാൻ നമ്മെ സഹായിക്കുന്ന ഉപകരണങ്ങളാണ് ഓപ്പറേറ്ററുകൾ.</li>
        <li>കീവേഡുകൾ പൈത്തണിൽ പ്രത്യേകമായി റിസർവ് ചെയ്ത വാക്കുകളാണ്.</li>
        <li>കണ്ടീഷണൽ സ്റ്റേറ്റ്‌മെന്റുകൾ (if, elif, else) പ്രോഗ്രാമുകളെ തീരുമാനമെടുക്കാൻ സഹായിക്കുന്നു.</li>
    </ul>

    <h3>പരിശീലന ചോദ്യങ്ങൾ</h3>
    <ol>
        <li><strong>ലളിതമായ കാൽക്കുലേറ്റർ:</strong> ഉപയോക്താവിൽ നിന്ന് രണ്ട് സംഖ്യകളും ഒരു ഓപ്പറേറ്ററും (+, -, *, /) ചോദിക്കുകയും കണക്കുകൂട്ടൽ നടത്തുകയും ചെയ്യുന്ന ഒരു പ്രോഗ്രാം എഴുതുക.</li>
        <li><strong>ഗ്രേഡ് കാൽക്കുലേറ്റർ:</strong> 5 വിഷയങ്ങളുടെ മാർക്കുകൾ എടുത്ത് ആകെ, ശരാശരി, ഗ്രേഡ്, പാസ്/ഫെയിൽ നില എന്നിവ കണക്കാക്കുന്ന ഒരു പ്രോഗ്രാം ഉണ്ടാക്കുക.</li>
        <li><strong>പ്രായ വിഭാഗം തിരിക്കുന്ന പ്രോഗ്രാം:</strong> പ്രായം ഇൻപുട്ടായി എടുത്ത് വ്യക്തിയെ തരംതിരിക്കുന്ന (കുട്ടി, കൗമാരക്കാരൻ, മുതിർന്നവർ, മുതിർന്ന പൗരൻ) ഒരു പ്രോഗ്രാം എഴുതുക.</li>
        <li><strong>വൈദ്യുതി ബിൽ കാൽക്കുലേറ്റർ:</strong> വിവിധ യൂണിറ്റ് സ്ലാബുകളുടെ അടിസ്ഥാനത്തിൽ വൈദ്യുതി ബിൽ കണക്കാക്കാൻ ഒരു പ്രോഗ്രാം ഉണ്ടാക്കുക.</li>
    </ol>
`;

export const ta = `
    <h2>அத்தியாயம் 1: பைதான் செயற்குறிகள்</h2>
    <p><strong>செயற்குறிகள் என்றால் என்ன?</strong><br>
    செயற்குறிகள் என்பது பைதானுக்கு தரவில் குறிப்பிட்ட செயல்பாடுகளைச் செய்யச் சொல்லும் சிறப்புச் சின்னங்கள். செயற்குறிகளை ஒரு கருவிப்பெட்டியில் உள்ள கருவிகளைப் போல நினைத்துக் கொள்ளுங்கள் - ஒவ்வொரு கருவிக்கும் ஒரு குறிப்பிட்ட வேலை உள்ளது. சுத்தியல் ஆணி அடிக்கவும், ஸ்க்ரூடிரைவர் திருகுகளைத் திருப்பவும் பயன்படுத்தப்படுவது போல, வெவ்வேறு செயற்குறிகள் நமது தரவுடன் வெவ்வேறு வேலைகளைச் செய்கின்றன.</p>

    <h3>1.1 கணிதச் செயற்குறிகள்</h3>
    <p>கணிதச் செயற்குறிகள், நீங்கள் பேனா மற்றும் காகிதத்துடன் செய்யும் கணிதம் போலவே, கணித கணக்கீடுகளைச் செய்யப் பயன்படுத்தப்படுகின்றன.</p>
    <h4>அடிப்படை கணிதச் செயற்குறிகள்</h4>
    <table>
        <thead>
            <tr>
                <th>செயற்குறி</th>
                <th>பெயர்</th>
                <th>உதாரணம்</th>
                <th>விளைவு</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>கூட்டல்</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>கழித்தல்</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>பெருக்கல்</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>வகுத்தல்</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>தரைமட்ட வகுத்தல்</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>மீதி (Modulus)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>அடுக்கு (Power)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>விரிவான உதாரணங்கள்</h4>
    <p><strong>கூட்டல் (+):</strong></p>
    <pre><code>
# எண்களைக் கூட்டுதல்
total_students = 25 + 30 # 55
print("மொத்த மாணவர்கள்:", total_students)

# மாறிகளைக் கூட்டுதல்
boys = 15
girls = 20
total = boys + girls # 35
print("மொத்த குழந்தைகள்:", total)

# சரங்களை (strings) இணைத்தல்
first_name = "ரவி"
last_name = "குமார்"
full_name = first_name + " " + last_name # "ரவி குமார்"
print("முழு பெயர்:", full_name)
    </code></pre>

    <p><strong>கழித்தல் (-):</strong></p>
    <pre><code>
# எளிய கழித்தல்
remaining_rice = 50 - 15 # 35 கிலோ மீதி
print("மீதி அரிசி:", remaining_rice, "கிலோ")

# மீதித் தொகையைக் கணக்கிடுதல்
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("திரும்பக் கொடுக்க வேண்டிய மீதி:", change, "ரூபாய்")
    </code></pre>

    <h3>1.2 ஒப்பீட்டுச் செயற்குறிகள்</h3>
    <p>ஒப்பீட்டுச் செயற்குறிகள் இரண்டு மதிப்புகளை ஒப்பிடப் பயன்படுத்தப்படுகின்றன. அவை எப்போதும் True அல்லது False ஐத் திருப்பித் தரும்.</p>
    <table>
        <thead>
            <tr>
                <th>செயற்குறி</th>
                <th>பெயர்</th>
                <th>உதாரணம்</th>
                <th>விளைவு</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>சமமானது</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>சமமற்றது</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>பெரியது</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>சிறியது</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>பெரியது அல்லது சமமானது</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>சிறியது அல்லது சமமானது</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 தர்க்கச் செயற்குறிகள்</h3>
    <p>தர்க்கச் செயற்குறிகள் பல நிபந்தனைகளை இணைக்கப் பயன்படுத்தப்படுகின்றன.</p>
    <table>
        <thead>
            <tr>
                <th>செயற்குறி</th>
                <th>பெயர்</th>
                <th>விளக்கம்</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>தர்க்க மற்றும்</td>
                <td>இரண்டு நிபந்தனைகளும் True ஆக இருந்தால் True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>தர்க்க அல்லது</td>
                <td>குறைந்தது ஒரு நிபந்தனையாவது True ஆக இருந்தால் True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>தர்க்க அல்ல</td>
                <td>நிபந்தனையின் எதிர்நிலை</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 ஒதுக்கீட்டுச் செயற்குறிகள்</h3>
    <p>ஒதுக்கீட்டுச் செயற்குறிகள் மாறிகளுக்கு மதிப்புகளை ஒதுக்கப் பயன்படுத்தப்படுகின்றன.</p>
     <table>
        <thead>
            <tr>
                <th>செயற்குறி</th>
                <th>பெயர்</th>
                <th>உதாரணம்</th>
                <th>சமானம்</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>எளிய ஒதுக்கீடு</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>கூட்டி ஒதுக்கு</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>கழித்து ஒதுக்கு</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>பெருக்கி ஒதுக்கு</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>வகுத்து ஒதுக்கு</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>தரைமட்டமாக வகுத்து ஒதுக்கு</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>மீதியைக் கணக்கிட்டு ஒதுக்கு</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>அடுக்கை கணக்கிட்டு ஒதுக்கு</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>அத்தியாயம் 2: பைதான் குறிச்சொற்கள்</h2>
    <p><strong>குறிச்சொற்கள் என்றால் என்ன?</strong><br>
    குறிச்சொற்கள் என்பது பைதானில் சிறப்புப் பொருள்படும் ஒதுக்கப்பட்ட சொற்கள். இந்தச் சொற்களை நீங்கள் மாறிப் பெயர்களாகப் பயன்படுத்த முடியாது.</p>
    
    <h3>பைதான் குறிச்சொற்களின் பட்டியல்</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>அத்தியாயம் 3: பைதானில் நிபந்தனை அறிக்கைகள்</h2>
    <p><strong>நிபந்தனை அறிக்கைகள் என்றால் என்ன?</strong><br>
    நிபந்தனை அறிக்கைகள், ஒரு நிபந்தனை உண்மையாக இருக்கிறதா அல்லது பொய்யாக இருக்கிறதா என்பதை அடிப்படையாகக் கொண்டு, குறிப்பிட்ட குறியீடுகளை இயக்க, நமது நிரல்களுக்கு முடிவெடுக்க உதவுகின்றன.</p>

    <h3>3.1 if அறிக்கை</h3>
    <pre><code>
if condition:
    # நிபந்தனை True ஆக இருந்தால் இயக்கப்பட வேண்டிய குறியீடு
    statement1
    </code></pre>

    <h3>3.2 if-else அறிக்கை</h3>
    <pre><code>
if condition:
    # நிபந்தனை True ஆக இருக்கும்போது குறியீடு
    statement1
else:
    # நிபந்தனை False ஆக இருக்கும்போது குறியீடு
    statement2
    </code></pre>

    <h3>3.3 if-elif-else அறிக்கை</h3>
    <pre><code>
if condition1:
    # condition1 True ஆக இருக்கும்போது குறியீடு
    statement1
elif condition2:
    # condition2 True ஆக இருக்கும்போது குறியீடு
    statement2
else:
    # நிபந்தனைகள் எதுவும் True ஆக இல்லாதபோது குறியீடு
    statement3
    </code></pre>

    <h2>சுருக்கம் மற்றும் பயிற்சி</h2>
    <h3>நினைவில் கொள்ள வேண்டிய முக்கிய புள்ளிகள்</h3>
    <ul>
        <li>செயற்குறிகள் தரவுடன் வேலை செய்ய நமக்கு உதவும் கருவிகள்.</li>
        <li>குறிச்சொற்கள் பைதானில் சிறப்பு ஒதுக்கப்பட்ட சொற்கள்.</li>
        <li>நிபந்தனை அறிக்கைகள் (if, elif, else) நிரல்களுக்கு முடிவெடுக்க உதவுகின்றன.</li>
    </ul>

    <h3>பயிற்சி வினாக்கள்</h3>
    <ol>
        <li><strong>எளிய கால்குலேட்டர்:</strong> இரண்டு எண்களையும் ஒரு செயற்குறியையும் (+, -, *, /) கேட்கும் ஒரு நிரலை எழுதி, கணக்கீட்டைச் செய்யவும்.</li>
        <li><strong>கிரேடு கால்குலேட்டர்:</strong> 5 பாடங்களுக்கான மதிப்பெண்களைப் பெற்று, மொத்தம், சராசரி, கிரேடு மற்றும் தேர்ச்சி/தோல்வி நிலையை கணக்கிடும் ஒரு நிரலை உருவாக்கவும்.</li>
        <li><strong>வயது வகைப்பாட்டு வகைப்படுத்தி:</strong> வயதை உள்ளீடாகப் பெற்று, நபரை வகைப்படுத்தும் (குழந்தை, டீனேஜர், வயது வந்தவர், மூத்த குடிமகன்) ஒரு நிரலை எழுதவும்.</li>
        <li><strong>மின்சார பில் கால்குலேட்டர்:</strong> வெவ்வேறு யூனிட் அடுக்குகளின் அடிப்படையில் மின்சார பில்லை கணக்கிடும் ஒரு நிரலை உருவாக்கவும்.</li>
    </ol>
`;

export const te = `
    <h2>అధ్యాయం 1: పైథాన్ ఆపరేటర్లు</h2>
    <p><strong>ఆపరేటర్లు అంటే ఏమిటి?</strong><br>
    ఆపరేటర్లు అనేవి పైథాన్‌కు డేటాపై నిర్దిష్ట కార్యకలాపాలు చేయమని చెప్పే ప్రత్యేక చిహ్నాలు. ఆపరేటర్లను టూల్‌బాక్స్‌లోని సాధనాల వలె భావించండి - ప్రతి సాధనానికి ఒక నిర్దిష్ట పని ఉంటుంది. సుత్తి మేకులను కొట్టడానికి ఉపయోగించినట్లే మరియు స్క్రూడ్రైవర్ స్క్రూలను తిప్పడానికి ఉపయోగించినట్లే, వివిధ ఆపరేటర్లు మన డేటాతో విభిన్న పనులను చేస్తాయి.</p>

    <h3>1.1 అంకగణిత ఆపరేటర్లు</h3>
    <p>అంకగణిత ఆపరేటర్లు, మీరు పెన్ను మరియు కాగితంతో చేసే గణితం వలెనే, గణిత లెక్కలు చేయడానికి ఉపయోగపడతాయి.</p>
    <h4>ప్రాథమిక అంకగణిత ఆపరేటర్లు</h4>
    <table>
        <thead>
            <tr>
                <th>ఆపరేటర్</th>
                <th>పేరు</th>
                <th>ఉదాహరణ</th>
                <th>ఫలితం</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>+</td>
                <td>కూడిక</td>
                <td>5 + 3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>-</td>
                <td>తీసివేత</td>
                <td>10 - 4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>*</td>
                <td>గుణకారం</td>
                <td>6 * 7</td>
                <td>42</td>
            </tr>
            <tr>
                <td>/</td>
                <td>భాగహారం</td>
                <td>15 / 3</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>//</td>
                <td>ఫ్లోర్ డివిజన్</td>
                <td>17 // 5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>%</td>
                <td>మోడ్యులస్ (శేషం)</td>
                <td>17 % 5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>**</td>
                <td>ఘాతాంకం (పవర్)</td>
                <td>2 ** 3</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>

    <h4>వివరణాత్మక ఉదాహరణలు</h4>
    <p><strong>కూడిక (+):</strong></p>
    <pre><code>
# సంఖ్యలను కూడటం
total_students = 25 + 30 # 55
print("మొత్తం విద్యార్థులు:", total_students)

# వేరియబుల్స్‌ను కూడటం
boys = 15
girls = 20
total = boys + girls # 35
print("మొత్తం పిల్లలు:", total)

# స్ట్రింగ్స్‌ను కూడటం (concatenation)
first_name = "రవి"
last_name = "కుమార్"
full_name = first_name + " " + last_name # "రవి కుమార్"
print("పూర్తి పేరు:", full_name)
    </code></pre>

    <p><strong>తీసివేత (-):</strong></p>
    <pre><code>
# సాధారణ తీసివేత
remaining_rice = 50 - 15 # 35 కిలోలు మిగిలి ఉంది
print("మిగిలిన బియ్యం:", remaining_rice, "కిలోలు")

# చిల్లరను లెక్కించడం
item_cost = 75
money_given = 100
change = money_given - item_cost # 25
print("తిరిగి ఇవ్వాల్సిన చిల్లర:", change, "రూపాయలు")
    </code></pre>

    <h3>1.2 పోలిక ఆపరేటర్లు</h3>
    <p>పోలిక ఆపరేటర్లు రెండు విలువలను పోల్చడానికి ఉపయోగపడతాయి. అవి ఎల్లప్పుడూ True లేదా False ను తిరిగి ఇస్తాయి.</p>
    <table>
        <thead>
            <tr>
                <th>ఆపరేటర్</th>
                <th>పేరు</th>
                <th>ఉదాహరణ</th>
                <th>ఫలితం</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>==</td>
                <td>సమానం</td>
                <td>5 == 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>సమానం కాదు</td>
                <td>5 != 3</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>కంటే ఎక్కువ</td>
                <td>8 &gt; 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>కంటే తక్కువ</td>
                <td>3 &lt; 7</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>కంటే ఎక్కువ లేదా సమానం</td>
                <td>5 &gt;= 5</td>
                <td>True</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>కంటే తక్కువ లేదా సమానం</td>
                <td>4 &lt;= 6</td>
                <td>True</td>
            </tr>
        </tbody>
    </table>

    <h3>1.3 తార్కిక ఆపరేటర్లు</h3>
    <p>తార్కిక ఆపరేటర్లు బహుళ షరతులను కలపడానికి ఉపయోగపడతాయి.</p>
    <table>
        <thead>
            <tr>
                <th>ఆపరేటర్</th>
                <th>పేరు</th>
                <th>వివరణ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>and</td>
                <td>తార్కిక AND</td>
                <td>రెండు షరతులు True అయితే True</td>
            </tr>
            <tr>
                <td>or</td>
                <td>తార్కిక OR</td>
                <td>కనీసం ఒక షరతు True అయితే True</td>
            </tr>
            <tr>
                <td>not</td>
                <td>తార్కిక NOT</td>
                <td>షరతుకు వ్యతిరేకం</td>
            </tr>
        </tbody>
    </table>

    <h3>1.4 అసైన్‌మెంట్ ఆపరేటర్లు</h3>
    <p>అసైన్‌మెంట్ ఆపరేటర్లు వేరియబుల్స్‌కు విలువలను కేటాయించడానికి ఉపయోగపడతాయి.</p>
     <table>
        <thead>
            <tr>
                <th>ఆపరేటర్</th>
                <th>పేరు</th>
                <th>ఉదాహరణ</th>
                <th>సమానమైనది</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>=</td>
                <td>సాధారణ అసైన్‌మెంట్</td>
                <td>x = 5</td>
                <td>x = 5</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>కూడి కేటాయించడం</td>
                <td>x += 3</td>
                <td>x = x + 3</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>తీసివేసి కేటాయించడం</td>
                <td>x -= 2</td>
                <td>x = x - 2</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>గుణించి కేటాయించడం</td>
                <td>x *= 4</td>
                <td>x = x * 4</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>భాగించి కేటాయించడం</td>
                <td>x /= 2</td>
                <td>x = x / 2</td>
            </tr>
             <tr>
                <td>//=</td>
                <td>ఫ్లోర్ భాగించి కేటాయించడం</td>
                <td>x //= 3</td>
                <td>x = x // 3</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>మోడ్యులస్ చేసి కేటాయించడం</td>
                <td>x %= 5</td>
                <td>x = x % 5</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>ఘాతాంకం చేసి కేటాయించడం</td>
                <td>x **= 2</td>
                <td>x = x ** 2</td>
            </tr>
        </tbody>
    </table>

    <h2>అధ్యాయం 2: పైథాన్ కీవర్డ్‌లు</h2>
    <p><strong>కీవర్డ్‌లు అంటే ఏమిటి?</strong><br>
    కీవర్డ్‌లు అనేవి పైథాన్‌లో ప్రత్యేక అర్థాలను కలిగి ఉన్న రిజర్వ్ చేయబడిన పదాలు. మీరు ఈ పదాలను వేరియబుల్ పేర్ల వలె ఉపయోగించలేరు.</p>
    
    <h3>పైథాన్ కీవర్డ్‌ల జాబితా</h3>
    <p><code>False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code></p>

    <h2>అధ్యాయం 3: పైథాన్‌లో షరతుతో కూడిన ప్రకటనలు</h2>
    <p><strong>షరతుతో కూడిన ప్రకటనలు అంటే ఏమిటి?</strong><br>
    ఒక షరతు నిజమా లేదా అబద్ధమా అనే దాని ఆధారంగా నిర్దిష్ట కోడ్‌ను అమలు చేయడానికి షరతుతో కూడిన ప్రకటనలు మన ప్రోగ్రామ్‌లకు నిర్ణయాలు తీసుకోవడంలో సహాయపడతాయి.</p>

    <h3>3.1 if ప్రకటన</h3>
    <pre><code>
if condition:
    # షరతు True అయితే అమలు చేయాల్సిన కోడ్
    statement1
    </code></pre>

    <h3>3.2 if-else ప్రకటన</h3>
    <pre><code>
if condition:
    # షరతు True అయినప్పుడు కోడ్
    statement1
else:
    # షరతు False అయినప్పుడు కోడ్
    statement2
    </code></pre>

    <h3>3.3 if-elif-else ప్రకటన</h3>
    <pre><code>
if condition1:
    # condition1 True అయినప్పుడు కోడ్
    statement1
elif condition2:
    # condition2 True అయినప్పుడు కోడ్
    statement2
else:
    # షరతులు ఏవీ True కానప్పుడు కోడ్
    statement3
    </code></pre>

    <h2>సారాంశం మరియు అభ్యాసం</h2>
    <h3>గుర్తుంచుకోవలసిన ముఖ్య విషయాలు</h3>
    <ul>
        <li>ఆపరేటర్లు డేటాతో పని చేయడానికి మనకు సహాయపడే సాధనాలు.</li>
        <li>కీవర్డ్‌లు పైథాన్‌లో ప్రత్యేకంగా రిజర్వ్ చేయబడిన పదాలు.</li>
        <li>షరతుతో కూడిన ప్రకటనలు (if, elif, else) ప్రోగ్రామ్‌లకు నిర్ణయాలు తీసుకోవడంలో సహాయపడతాయి.</li>
    </ul>

    <h3>అభ్యాస ప్రశ్నలు</h3>
    <ol>
        <li><strong>సాధారణ కాలిక్యులేటర్:</strong> వినియోగదారు నుండి రెండు సంఖ్యలు మరియు ఒక ఆపరేటర్ (+, -, *, /) అడిగి, ఆ గణనను నిర్వహించే ఒక ప్రోగ్రామ్‌ను రాయండి.</li>
        <li><strong>గ్రేడ్ కాలిక్యులేటర్:</strong> 5 సబ్జెక్టుల మార్కులను తీసుకొని మొత్తం, సగటు, గ్రేడ్ మరియు పాస్/ఫెయిల్ స్థితిని లెక్కించే ఒక ప్రోగ్రామ్‌ను సృష్టించండి.</li>
        <li><strong>వయస్సు వర్గీకరణ:</strong> వయస్సును ఇన్‌పుట్‌గా తీసుకొని, ఆ వ్యక్తిని వర్గీకరించే (పిల్లలు, టీనేజర్, వయోజనులు, సీనియర్ సిటిజన్) ఒక ప్రోగ్రామ్‌ను రాయండి.</li>
        <li><strong>విద్యుత్ బిల్లు కాలిక్యులేటర్:</strong> వివిధ యూనిట్ స్లాబ్‌ల ఆధారంగా విద్యుత్ బిల్లును లెక్కించే ఒక ప్రోగ్రామ్‌ను సృష్టించండి.</li>
    </ol>
`;