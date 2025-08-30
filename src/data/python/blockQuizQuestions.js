const blockQuizPython = {
  level1: [
    {
      id: 1,
      question: "Print Hello World",
      answer: ["print", "(", "'Hello World'", ")"],
      blocks: ["(", ")", "print", "'Hello World'", "input"]
    },
    {
      id: 2,
      question: "Take input and store in variable name",
      answer: ["name", "=", "input", "(", "'Enter your name:'", ")"],
      blocks: ["input", "name", "=", "(", ")", "'Enter your name:'", "print"]
    },
    {
      id: 3,
      question: "Assign value 5 to variable x",
      answer: ["x", "=", "5"],
      blocks: ["5", "=", "x", "input"]
    },
    {
      id: 4,
      question: "Assign float value 3.14 to pi",
      answer: ["pi", "=", "3.14"],
      blocks: ["pi", "=", "3.14", "float"]
    },
    {
      id: 5,
      question: "Assign string 'Python' to lang",
      answer: ["lang", "=", "'Python'"],
      blocks: ["lang", "Python", "=", "'Python'"]
    },
    {
      id: 6,
      question: "Check type of variable age",
      answer: ["type", "(", "age", ")"],
      blocks: ["type", "(", ")", "age", "print"]
    },
    {
      id: 7,
      question: "Convert number 10 to string",
      answer: ["str", "(", "10", ")"],
      blocks: ["int", "(", "10", ")", "str"]
    },
    {
      id: 8,
      question: "Convert '25' to integer",
      answer: ["int", "(", "'25'", ")"],
      blocks: ["int", "float", "(", "25", "'25'", ")"]
    },
    {
      id: 9,
      question: "Print variable score",
      answer: ["print", "(", "score", ")"],
      blocks: ["print", "(", ")", "score", "input"]
    },
    {
      id: 10,
      question: "Assign boolean True to is_valid",
      answer: ["is_valid", "=", "True"],
      blocks: ["True", "False", "is_valid", "=", "print"]
    }
  ],

  level2: [
    {
      id: 1,
      question: "Add 5 and 3",
      answer: ["5", "+", "3"],
      blocks: ["5", "3", "+", "-", "*"]
    },
    {
      id: 2,
      question: "Check if x equals 10",
      answer: ["x", "==", "10"],
      blocks: ["x", "==", "10", "!=", ">"]
    },
    {
      id: 3,
      question: "Assign sum of a and b to total",
      answer: ["total", "=", "a", "+", "b"],
      blocks: ["total", "a", "+", "b", "=", "sum"]
    },
    {
      id: 4,
      question: "Check if age greater than 18",
      answer: ["age", ">", "18"],
      blocks: ["age", ">", "<", "18", "=="]
    },
    {
      id: 5,
      question: "Check if a less than or equal to b",
      answer: ["a", "<=", "b"],
      blocks: ["a", "<=", ">=", "b"]
    },
    {
      id: 6,
      question: "Logical AND between x>5 and y<10",
      answer: ["x", ">", "5", "and", "y", "<", "10"],
      blocks: ["x", ">", "y", "5", "and", "10", "<"]
    },
    {
      id: 7,
      question: "If x equals 100 then print OK",
      answer: ["if", "x", "==", "100", ":", "print", "(", "'OK'", ")"],
      blocks: ["if", "x", "100", "==", ":", "print", "(", ")", "'OK'"]
    },
    {
      id: 8,
      question: "Else print Wrong",
      answer: ["else", ":", "print", "(", "'Wrong'", ")"],
      blocks: ["else", ":", "print", "(", ")", "'Wrong'"]
    },
    {
      id: 9,
      question: "Elif score equals 50 print Half",
      answer: ["elif", "score", "==", "50", ":", "print", "(", "'Half'", ")"],
      blocks: ["elif", "score", "==", ":", "print", "(", ")", "50", "'Half'"]
    },
    {
      id: 10,
      question: "Assign 10 to x using assignment",
      answer: ["x", "=", "10"],
      blocks: ["x", "10", "=", "=="]
    }
  ],

  level3: [
    {
      id: 1,
      question: "For loop from 0 to 4",
      answer: ["for", "i", "in", "range", "(", "5", ")", ":"],
      blocks: ["for", "i", "range", "in", "(", "5", ")", ":"]
    },
    {
      id: 2,
      question: "While loop until x < 10",
      answer: ["while", "x", "<", "10", ":"],
      blocks: ["while", "x", "<", "10", ":", "for"]
    },
    {
      id: 3,
      question: "Break inside loop",
      answer: ["break"],
      blocks: ["break", "continue", "pass"]
    },
    {
      id: 4,
      question: "Continue inside loop",
      answer: ["continue"],
      blocks: ["continue", "break", "stop"]
    },
    {
      id: 5,
      question: "Nested loop header for j in range(3)",
      answer: ["for", "j", "in", "range", "(", "3", ")", ":"],
      blocks: ["for", "j", "in", "range", "(", "3", ")", ":"]
    },
    {
      id: 6,
      question: "Print numbers 1 to 5 using for loop",
      answer: ["for", "n", "in", "range", "(", "1", ",", "6", ")", ":", "print", "(", "n", ")"],
      blocks: ["for", "n", "in", "range", "(", "1", ",", "6", ")", ":", "print", "(", ")", "n"]
    },
    {
      id: 7,
      question: "Pattern print * 5 times",
      answer: ["for", "i", "in", "range", "(", "5", ")", ":", "print", "(", "'*'", ")",],
      blocks: ["for", "i", "in", "range", "(", "5", ")", ":", "print", "(", ")", "'*'"]
    },
    {
      id: 8,
      question: "Loop through string 'abc'",
      answer: ["for", "ch", "in", "'abc'", ":", "print", "(", "ch", ")"],
      blocks: ["for", "ch", "in", "'abc'", ":", "print", "(", ")", "ch"]
    },
    {
      id: 9,
      question: "Sum numbers 0 to 9",
      answer: ["total", "=", "0", "for", "i", "in", "range", "(", "10", ")", ":", "total", "+=", "i"],
      blocks: ["total", "=", "0", "for", "i", "in", "range", "(", "10", ")", ":", "total", "+=", "i"]
    },
    {
      id: 10,
      question: "Exit loop using break when i==3",
      answer: ["for", "i", "in", "range", "(", "5", ")", ":", "if", "i", "==", "3", ":", "break"],
      blocks: ["for", "i", "in", "range", "(", "5", ")", ":", "if", "i", "==", "3", ":", "break"]
    }
  ],

  level4: [
    {
      id: 1,
      question: "Define a function greet",
      answer: ["def", "greet", "(", ")", ":"],
      blocks: ["def", "greet", "(", ")", ":", "return"]
    },
    {
      id: 2,
      question: "Function greet returns Hello",
      answer: ["def", "greet", "(", ")", ":", "return", "'Hello'"],
      blocks: ["def", "greet", "(", ")", ":", "return", "'Hello'"]
    },
    {
      id: 3,
      question: "Function add takes a,b and returns sum",
      answer: ["def", "add", "(", "a", ",", "b", ")", ":", "return", "a", "+", "b"],
      blocks: ["def", "add", "(", "a", ",", "b", ")", ":", "return", "a", "+", "b"]
    },
    {
      id: 4,
      question: "Call function greet",
      answer: ["greet", "(", ")"],
      blocks: ["greet", "(", ")", "print"]
    },
    {
      id: 5,
      question: "Lambda function square of x",
      answer: ["lambda", "x", ":", "x", "*", "x"],
      blocks: ["lambda", "x", ":", "x", "*", "x", "+"]
    },
    {
      id: 6,
      question: "Function with default param name='John'",
      answer: ["def", "say_hello", "(", "name", "=", "'John'", ")", ":"],
      blocks: ["def", "say_hello", "(", "name", "=", "'John'", ")", ":"]
    },
    {
      id: 7,
      question: "Return max of a and b using function",
      answer: ["def", "max_val", "(", "a", ",", "b", ")", ":", "return", "a", "if", "a", ">", "b", "else", "b"],
      blocks: ["def", "max_val", "(", "a", ",", "b", ")", ":", "return", "a", "if", "a", ">", "b", "else", "b"]
    },
    {
      id: 8,
      question: "Higher order function apply f on x",
      answer: ["def", "apply", "(", "f", ",", "x", ")", ":", "return", "f", "(", "x", ")"],
      blocks: ["def", "apply", "(", "f", ",", "x", ")", ":", "return", "f", "(", "x", ")"]
    },
    {
      id: 9,
      question: "Compose two functions f(g(x))",
      answer: ["def", "compose", "(", "f", ",", "g", ")", ":", "return", "lambda", "x", ":", "f", "(", "g", "(", "x", ")", ")"],
      blocks: ["def", "compose", "(", "f", ",", "g", ")", ":", "return", "lambda", "x", ":", "f", "(", "g", "(", "x", ")", ")"]
    },
    {
      id: 10,
      question: "Function scope local variable y=10",
      answer: ["def", "test", "(", ")", ":", "y", "=", "10"],
      blocks: ["def", "test", "(", ")", ":", "y", "=", "10"]
    }
  ],

  level5: [
    {
      id: 1,
      question: "Recursive factorial function header",
      answer: ["def", "factorial", "(", "n", ")", ":"],
      blocks: ["def", "factorial", "(", "n", ")", ":", "return"]
    },
    {
      id: 2,
      question: "Factorial base case if n==0 return 1",
      answer: ["if", "n", "==", "0", ":", "return", "1"],
      blocks: ["if", "n", "==", "0", ":", "return", "1"]
    },
    {
      id: 3,
      question: "Factorial recursive case return n*factorial(n-1)",
      answer: ["return", "n", "*", "factorial", "(", "n", "-", "1", ")"],
      blocks: ["return", "n", "*", "factorial", "(", "n", "-", "1", ")"]
    },
    {
      id: 4,
      question: "Recursive fibonacci header",
      answer: ["def", "fib", "(", "n", ")", ":"],
      blocks: ["def", "fib", "(", "n", ")", ":"]
    },
    {
      id: 5,
      question: "Fibonacci base case if n<=1 return n",
      answer: ["if", "n", "<=", "1", ":", "return", "n"],
      blocks: ["if", "n", "<=", "1", ":", "return", "n"]
    },
    {
      id: 6,
      question: "Fibonacci recursive return fib(n-1)+fib(n-2)",
      answer: ["return", "fib", "(", "n", "-", "1", ")", "+", "fib", "(", "n", "-", "2", ")"],
      blocks: ["return", "fib", "(", "n", "-", "1", ")", "+", "fib", "(", "n", "-", "2", ")"]
    },
    {
      id: 7,
      question: "Simple generator yielding 1,2,3",
      answer: ["def", "gen", "(", ")", ":", "yield", "1", "yield", "2", "yield", "3"],
      blocks: ["def", "gen", "(", ")", ":", "yield", "1", "yield", "2", "yield", "3"]
    },
    {
      id: 8,
      question: "Decorator header function my_decorator",
      answer: ["def", "my_decorator", "(", "func", ")", ":"],
      blocks: ["def", "my_decorator", "(", "func", ")", ":"]
    },
    {
      id: 9,
      question: "Apply decorator using @my_decorator",
      answer: ["@", "my_decorator"],
      blocks: ["@", "my_decorator", "def"]
    },
    {
      id: 10,
      question: "Recursive sum of list header",
      answer: ["def", "list_sum", "(", "lst", ")", ":"],
      blocks: ["def", "list_sum", "(", "lst", ")", ":"]
    }
  ]
};

export default blockQuizPython;