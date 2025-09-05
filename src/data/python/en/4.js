const python4en = `
    <h2>Chapter 1: Introduction to Functions</h2>
    <h3>What is a Function?</h3>
    <p>In programming, a function is a block of reusable code that performs a specific task. Instead of writing the same code over and over again, we create a function once and use it whenever needed.</p>
    <h3>Why Do We Need Functions?</h3>
    <ol>
        <li>Avoid Repetition</li>
        <li>Better Organization</li>
        <li>Easier Testing</li>
        <li>Reusability</li>
    </ol>

    <h2>Chapter 2: Python Functions - The Basics</h2>
    <h3>Function Definition</h3>
    <p>To create a function in Python, we use the <code>def</code> keyword.</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>Functions with Parameters</h3>
    <p>Parameters are like ingredients you give to a function.</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>Return Values</h3>
    <p>The <code>return</code> statement is what the function gives back after processing.</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>Chapter 3: Lambda Functions - Quick and Simple Functions</h2>
    <h3>What are Lambda Functions?</h3>
    <p>Lambda functions are small, anonymous functions that can be defined in a single line.</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>Chapter 4: Higher-Order Functions and Function Composition</h2>
    <h3>What are Higher-Order Functions?</h3>
    <p>Higher-order functions are functions that can take other functions as parameters or return functions as results.</p>
    <pre><code>def apply_operation(numbers, operation):
    result = []
    for num in numbers:
        result.append(operation(num))
    return result

def square(x):
    return x * x

numbers = [1, 2, 3, 4, 5]
squared_numbers = apply_operation(numbers, square)
print(f"Squared: {squared_numbers}")</code></pre>

    <h2>Chapter 5: Practical Examples and Best Practices</h2>
    <h3>Example: Village Inventory Management System</h3>
    <pre><code>village_inventory = {
    "rice": {"quantity": 500, "price_per_kg": 45},
    "wheat": {"quantity": 300, "price_per_kg": 35}
}

def display_inventory():
    print("=== VILLAGE STORE INVENTORY ===")
    for item, details in village_inventory.items():
        print(f"{item.title()}: {details['quantity']} kg @ Rs.{details['price_per_kg']}")
    print()

display_inventory()</code></pre>
`

export default python4en;