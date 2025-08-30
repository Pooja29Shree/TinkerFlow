const python2 = `
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

export default python2;