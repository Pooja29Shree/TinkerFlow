const python1 = `
    <h2>Chapter 1: Python Introduction - Setting up Python and Understanding the Interpreter</h2><h3>What is Python?</h3>
    <p>Python is a computer programming language that helps us give instructions to computers. Think of it like learning a new language to communicate with your computer. Just like how we use Tamil or English to talk to people, we use Python to talk to computers.</p>

    <h3>Why Learn Python?</h3>
    <ul>
        <li>It is easy to read and write</li>
        <li>It uses simple English-like words</li>
        <li>Many big companies like Google and YouTube use Python</li>
        <li>You can build websites, games, and mobile apps with Python</li>
    </ul>

    <h3>Your First Python Program</h3>
    <pre><code>print("Hello, World!")</code></pre>

    <h2>Chapter 2: Input and Output in Python</h2>
    <h3>The print() Function</h3>
    <p>The <code>print()</code> function is used to display information on the screen.</p>
    <pre><code>print("Welcome to Python programming")
print("My name is Ravi")
print(25)
print("My age is", 20)</code></pre>

    <h3>The input() Function</h3>
    <p>The <code>input()</code> function is used to take information from the user.</p>
    <pre><code>name = input("What is your name? ")
print("Hello", name)</code></pre>

    <h2>Chapter 3: Python Variables</h2>
    <h3>What are Variables?</h3>
    <p>A variable is like a box where you can store information. You can put different things in the box and use them later. In programming, we use variables to store data that we want to use in our program.</p>
    <h3>Variable Assignment</h3>
    <pre><code>name = "Kamala"
age = 25
height = 5.6
is_student = True</code></pre>

    <h2>Chapter 4: Python Data Types</h2>
    <h3>What are Data Types?</h3>
    <p>Data types tell us what kind of information we are storing in our variables. Just like in real life, we have different types of containers for different things (water bottle for water, rice bag for rice), in programming we have different data types for different kinds of information.</p>
    
    <h4>1. Integer (int) - Whole Numbers</h4>
    <p>Integers are whole numbers without decimal points.</p>
    <pre><code>age = 25
year = 2023
temperature = -5</code></pre>

    <h4>2. Float - Decimal Numbers</h4>
    <p>Floats are numbers with decimal points.</p>
    <pre><code>height = 5.6
price = 99.99
percentage = 85.75</code></pre>

    <h4>3. String - Text Data</h4>
    <p>Strings are used to store text information. They are written inside quotes.</p>
    <pre><code>name = "Priya Sharma"
village = "Thanjavur"
address = "123, Main Street, Coimbatore"</code></pre>

    <h4>4. Boolean - True or False</h4>
    <p>Boolean data type has only two values: <code>True</code> or <code>False</code>. It's used for yes/no, on/off type of information.</p>
    <pre><code>is_student = True
is_married = False
has_smartphone = True</code></pre>

    <h3>Type Conversion</h3>
    <p>Sometimes we need to change one data type to another.</p>
    <pre><code># Convert to Integer
age_text = "25"
age_number = int(age_text)

# Convert to String
age = 25
age_text = str(age)</code></pre>

    <h3>Finding Data Type</h3>
    <p>Use the <code>type()</code> function to find what type of data you have:</p>
    <pre><code>name = "Ravi"
age = 25
print(type(name))  # <class 'str'>
print(type(age))   # <class 'int'></code></pre>
`

export default python1;