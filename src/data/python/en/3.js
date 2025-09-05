const python3en = `

    <h2>Introduction</h2>
    <p>In programming, we often need to repeat certain tasks multiple times. Instead of writing the same code over and over again, Python provides us with loops. Think of loops like a farmer who needs to water 100 plants in his field. Instead of going to each plant individually and thinking about it separately, he follows a simple pattern: go to plant, water it, move to next plant, repeat until all plants are watered.</p>

    <h2>Chapter 1: For Loops</h2>
    <h3>What is a For Loop?</h3>
    <p>A for loop is used when we want to repeat a block of code a specific number of times. It is like counting from 1 to 10 or going through a list of items one by one.</p>
    <pre><code># Print numbers from 1 to 5
for number in range(1, 6):
    print("Number:", number)</code></pre>

    <h2>Chapter 2: While Loops</h2>
    <h3>What is a While Loop?</h3>
    <p>A while loop repeats a block of code as long as a certain condition is true. It is like saying "keep doing this until something specific happens." For example, "keep adding water to the bucket until it is full."</p>
    <pre><code># Count from 1 to 5 using while loop
count = 1
while count <= 5:
    print("Count:", count)
    count = count + 1 # Very important: update the variable</code></pre>

    <h2>Chapter 3: Loop Control Statements</h2>
    <p>Sometimes we need to control how our loops behave. Python gives us two special keywords for this: <code>break</code> and <code>continue</code>.</p>
    <h3>Break Statement</h3>
    <p>The break statement stops the loop immediately and exits it.</p>
    <pre><code># Find first number divisible by 7
for number in range(1, 51):
    if number % 7 == 0:
        print(f"First number divisible by 7: {number}")
        break # Exit the loop</code></pre>
    <h3>Continue Statement</h3>
    <p>The continue statement skips the rest of the current iteration and moves to the next one.</p>
    <pre><code># Print all odd numbers from 1 to 10
for number in range(1, 11):
    if number % 2 == 0: # If number is even
        continue # Skip to next iteration
    print(f"Odd number: {number}")</code></pre>

    <h2>Chapter 4: Nested Loops</h2>
    <h3>What are Nested Loops?</h3>
    <p>Nested loops are loops inside other loops. Think of this like organizing a village fair: for each day of the fair (outer loop), you need to set up each stall (inner loop).</p>
    <pre><code># Print a pattern
for row in range(1, 4): # Outer loop
    for column in range(1, 5): # Inner loop
        print("*", end=" ")
    print() # New line after each row</code></pre>

    <h2>Chapter 5: Advanced Conditional Logic with Loops</h2>
    <p>We can use complex conditions with our loops to make them more powerful.</p>
    <pre><code># Find numbers divisible by both 3 and 5
for number in range(1, 101):
    if number % 3 == 0 and number % 5 == 0:
        print(number)</code></pre>

    <h2>Chapter 6: Pattern Printing</h2>
    <p>Pattern printing is a great way to practice loops. It helps us understand how nested loops work and how to control the output.</p>
    <h3>Right Triangle</h3>
    <pre><code>rows = 5
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end=" ")
    print()
</code></pre>

    <h2>Chapter 7: Iterative Problem Solving</h2>
    <p>When solving problems with loops, follow these steps: Understand the problem, identify the pattern, choose the right loop, write the solution, and test with examples.</p>
    <h3>Problem: Finding Prime Numbers</h3>
    <pre><code># Find all prime numbers between 1 and 50
for number in range(2, 51):
    is_prime = True
    for divisor in range(2, number):
        if number % divisor == 0:
            is_prime = False
            break
    if is_prime:
        print(number, end=" ")
</code></pre>
`

export default python3en;