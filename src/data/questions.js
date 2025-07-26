const questions = [
  {
    question: "What is the output of printf(\"%d\", 10 + 20); in C?",
    options: ["1020", "30", "10+20", "Error"],
    answer: "30"
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "function", "def", "define"],
    answer: "def"
  },
  {
    question: "Which C operator is used to allocate memory dynamically?",
    options: ["malloc", "alloc", "new", "mem"],
    answer: "malloc"
  },
  {
    question: "What is the output of len('Python')?",
    options: ["5", "6", "7", "Error"],
    answer: "6"
  },
  {
    question: "What does `static` keyword mean in C?",
    options: [
      "Creates a global variable",
      "Limits scope to the file/function",
      "Deletes memory",
      "Creates a dynamic array"
    ],
    answer: "Limits scope to the file/function"
  },
  {
    question: "Which data structure does Python's list implement?",
    options: ["Array", "Linked List", "Dynamic Array", "Queue"],
    answer: "Dynamic Array"
  },
  {
    question: "What is segmentation fault in C?",
    options: [
      "Arithmetic error",
      "Illegal memory access",
      "Divide by zero",
      "Syntax error"
    ],
    answer: "Illegal memory access"
  },
  {
    question: "What does `self` refer to in Python classes?",
    options: [
      "Parent class",
      "Module",
      "The current instance",
      "Global variable"
    ],
    answer: "The current instance"
  },
  {
    question: "What is a dangling pointer?",
    options: [
      "Pointer that points to an unused variable",
      "Pointer that’s NULL",
      "Pointer pointing to freed memory",
      "None of the above"
    ],
    answer: "Pointer pointing to freed memory"
  },
  {
    question: "Which function returns a list of attributes of an object in Python?",
    options: ["attr()", "list()", "dir()", "type()"],
    answer: "dir()"
  },
  {
    question: "Which header file contains malloc() function?",
    options: ["memory.h", "stdlib.h", "malloc.h", "stdio.h"],
    answer: "stdlib.h"
  },
  {
    question: "What is the output of `print(type(lambda x: x))`?",
    options: ["function", "lambda", "<class 'function'>", "syntax error"],
    answer: "<class 'function'>"
  },
  {
    question: "Which C keyword is used for conditional compilation?",
    options: ["#ifdef", "#define", "if", "switch"],
    answer: "#ifdef"
  },
  {
    question: "What does the `with` keyword do in Python?",
    options: [
      "Imports modules",
      "Handles exceptions",
      "Manages context/resources",
      "Declares variables"
    ],
    answer: "Manages context/resources"
  }
];

export default questions;
