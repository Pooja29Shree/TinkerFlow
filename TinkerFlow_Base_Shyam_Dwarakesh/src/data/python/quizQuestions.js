const quizPython = {
  level1: [
    {
      question: "Which function is used to display output in Python?",
      options: ["echo()", "print()", "printf()", "display()"],
      answer: "print()"
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/* */", "--"],
      answer: "#"
    },
    {
      question: "Which function is used to take input from the user?",
      options: ["scanf()", "read()", "input()", "get()"],
      answer: "input()"
    },
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".pyt", ".python", ".txt"],
      answer: ".py"
    },
    {
      question: "Which of these is NOT a Python data type?",
      options: ["int", "float", "real", "bool"],
      answer: "real"
    },
    {
      question: "What is the type of output from input() function?",
      options: ["int", "str", "float", "bool"],
      answer: "str"
    },
    {
      question: "Which of the following is a valid variable name?",
      options: ["1value", "value_1", "value-1", "value 1"],
      answer: "value_1"
    },
    {
      question: "Which function is used to check the type of a variable?",
      options: ["typeof()", "type()", "instance()", "varType()"],
      answer: "type()"
    },
    {
      question: "What is the boolean value of bool(0)?",
      options: ["True", "False", "0", "Error"],
      answer: "False"
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "exp()", "^^"],
      answer: "**"
    }
  ],

  level2: [
    {
      question: "Which of these is a comparison operator in Python?",
      options: ["=", "==", "equals", ":="],
      answer: "=="
    },
    {
      question: "What is the result of 10 % 3 in Python?",
      options: ["3", "1", "0", "10"],
      answer: "1"
    },
    {
      question: "Which keyword is used in conditional statements?",
      options: ["if", "switch", "case", "when"],
      answer: "if"
    },
    {
      question: "What is the result of True and False?",
      options: ["True", "False", "1", "Error"],
      answer: "False"
    },
    {
      question: "Which of these is NOT a Python keyword?",
      options: ["elif", "else", "then", "if"],
      answer: "then"
    },
    {
      question: "What does the operator // do in Python?",
      options: ["Modulo", "Floor division", "Exponent", "Normal division"],
      answer: "Floor division"
    },
    {
      question: "Which operator is used for assignment?",
      options: ["=", "==", ":=", "<-"],
      answer: "="
    },
    {
      question: "What will be the output of bool(5 > 3 and 2 < 1)?",
      options: ["True", "False", "Error", "None"],
      answer: "False"
    },
    {
      question: "Which of these is a logical operator in Python?",
      options: ["&&", "and", "&", "AND"],
      answer: "and"
    },
    {
      question: "What is the result of not True?",
      options: ["True", "False", "None", "Error"],
      answer: "False"
    }
  ],

  level3: [
    {
      question: "Which loop is used when the number of iterations is known?",
      options: ["while", "for", "do while", "loop"],
      answer: "for"
    },
    {
      question: "Which keyword is used to skip the current iteration in a loop?",
      options: ["stop", "skip", "continue", "break"],
      answer: "continue"
    },
    {
      question: "Which keyword is used to terminate a loop immediately?",
      options: ["exit", "stop", "break", "end"],
      answer: "break"
    },
    {
      question: "What is the output of range(5)?",
      options: ["[1,2,3,4,5]", "[0,1,2,3,4]", "[0,1,2,3,4,5]", "Error"],
      answer: "[0,1,2,3,4]"
    },
    {
      question: "Which loop will execute at least once even if condition is false?",
      options: ["for", "while", "do while", "None"],
      answer: "None"
    },
    {
      question: "What is the output of sum(range(1,5))?",
      options: ["10", "15", "5", "Error"],
      answer: "10"
    },
    {
      question: "Which of these is used for nested loops?",
      options: ["Two loops inside each other", "if-else", "switch", "lambda"],
      answer: "Two loops inside each other"
    },
    {
      question: "Which keyword is used with loops to execute code when loop finishes without break?",
      options: ["finally", "done", "else", "end"],
      answer: "else"
    },
    {
      question: "Which of these is used to iterate over a sequence in Python?",
      options: ["foreach", "for", "loop", "iterate"],
      answer: "for"
    },
    {
      question: "What will be the output of: for i in range(3): print(i)?",
      options: ["1 2 3", "0 1 2", "0 1 2 3", "Error"],
      answer: "0 1 2"
    }
  ],

  level4: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: "def"
    },
    {
      question: "What is the default return value of a Python function without return statement?",
      options: ["0", "None", "Error", "Undefined"],
      answer: "None"
    },
    {
      question: "Which keyword is used for anonymous functions in Python?",
      options: ["lambda", "func", "def", "anon"],
      answer: "lambda"
    },
    {
      question: "What will be the output of (lambda x: x + 5)(10)?",
      options: ["5", "10", "15", "Error"],
      answer: "15"
    },
    {
      question: "Which scope rules does Python follow?",
      options: ["LEGB", "BFS", "DFS", "STACK"],
      answer: "LEGB"
    },
    {
      question: "Which of these can be passed as function arguments?",
      options: ["Only numbers", "Only strings", "Any object", "None"],
      answer: "Any object"
    },
    {
      question: "Which function can accept another function as an argument?",
      options: ["Higher-order function", "Recursive function", "Main()", "Constructor"],
      answer: "Higher-order function"
    },
    {
      question: "What is the correct syntax to return a value from a function?",
      options: ["give x", "return x", "output x", "yield x"],
      answer: "return x"
    },
    {
      question: "Which statement defines a function parameter with default value?",
      options: ["def f(x=5):", "def f(x==5):", "def f(x:5):", "def f(x->5):"],
      answer: "def f(x=5):"
    },
    {
      question: "Which keyword is used to refer to variables inside the current function?",
      options: ["self", "this", "local", "None"],
      answer: "local"
    }
  ],

  level5: [
    {
      question: "What is the base case in recursion?",
      options: [
        "Condition where function keeps calling itself",
        "Condition to stop recursion",
        "Infinite loop condition",
        "None"
      ],
      answer: "Condition to stop recursion"
    },
    {
      question: "Which function is an example of recursion?",
      options: ["print()", "factorial()", "len()", "type()"],
      answer: "factorial()"
    },
    {
      question: "Which keyword is used to create a generator in Python?",
      options: ["generate", "yield", "return", "gen"],
      answer: "yield"
    },
    {
      question: "What is the output type of a generator function?",
      options: ["list", "tuple", "generator object", "dict"],
      answer: "generator object"
    },
    {
      question: "What is a decorator in Python?",
      options: [
        "Function that modifies another function",
        "Type of class",
        "Loop control",
        "Error handler"
      ],
      answer: "Function that modifies another function"
    },
    {
      question: "Which function is an example of infinite recursion?",
      options: [
        "Function without base case",
        "Function with return",
        "Function with yield",
        "None"
      ],
      answer: "Function without base case"
    },
    {
      question: "Which of the following is NOT true about recursion?",
      options: [
        "Requires base case",
        "Uses call stack",
        "Always faster than loops",
        "Function calls itself"
      ],
      answer: "Always faster than loops"
    },
    {
      question: "Which keyword is used to apply a decorator?",
      options: ["@", "#", "decor", "&"],
      answer: "@"
    },
    {
      question: "Which of these problems can recursion solve easily?",
      options: ["Sorting", "Factorial", "Multiplication", "Addition"],
      answer: "Factorial"
    },
    {
      question: "Which function converts a generator to a list?",
      options: ["tuple()", "list()", "set()", "dict()"],
      answer: "list()"
    }
  ]
}

export default quizPython;