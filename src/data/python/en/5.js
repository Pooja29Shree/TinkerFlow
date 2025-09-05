const python5en = `
    <h2>Chapter 1: Understanding Recursion in Python</h2>
    <h3>What is Recursion?</h3>
    <p>Recursion is a programming technique where a function calls itself to solve a problem. It breaks down complex problems into smaller, similar problems.</p>
    <h3>Key Components of Recursion</h3>
    <ol>
        <li><b>Base Case:</b> The condition that stops the recursion.</li>
        <li><b>Recursive Case:</b> The function calling itself with a modified input.</li>
    </ol>
    <h3>Basic Recursion Example: Calculating Factorial</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>Chapter 2: Advanced Function Concepts</h2>
    <h3>Decorators</h3>
    <p>A decorator is a function that modifies the behavior of another function without changing its source code.</p>
    <pre><code>def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()</code></pre>

    <h3>Generators</h3>
    <p>A generator is a special function that returns an iterator, yielding values one at a time instead of all at once. This is very memory efficient.</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>Chapter 3: Problem-Solving with Recursive Approaches</h2>
    <h3>When to Use Recursion</h3>
    <p>Recursion is best suited for problems that can be broken into smaller, similar subproblems, have a clear base case, and often involve a tree-like structure.</p>
    <h3>Advanced Recursive Example: Directory Tree Traversal</h3>
    <pre><code>import os

def list_files_recursive(directory, level=0):
    """Recursively list all files and directories"""
    indent = " " * level
    try:
        items = os.listdir(directory)
        for item in items:
            item_path = os.path.join(directory, item)
            print(f"{indent}{item}")
            if os.path.isdir(item_path):
                list_files_recursive(item_path, level + 1)
    except PermissionError:
        print(f"{indent}[Permission Denied]")

# list_files_recursive("/path/to/directory")</code></pre>
`

export default python5en;
