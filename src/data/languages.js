const languages = {
  python: {
    id: "python",
    name: "Python",
    desc: "Versatile, Beginner-Friendly and Powerful",
    levels: [
      { id: 1, title: "Python Foundation", description: "Introduction, variables, and data types" },
      { id: 2, title: "Operations and Logic", description: "Basic operations, logical expressions and conditional statements" },
      { id: 3, title: "Control Flow", description: "Loops and conditional statements" },
      { id: 4, title: "Functions and Modules", description: "Code organization and reusability" },
      { id: 5, title: "Recursion", description: "Understanding and implementing recursion" }
    ]
  },
  cpp: {
    id: "c++",
    name: "C++",
    desc: "High Performance and System-Level Programming",
    levels: [
      { id: 1, title: "C++ Basics", description: "Syntax, variables, and basic I/O" },
      { id: 2, title: "Pointers and Memory", description: "Memory management concepts" },
      { id: 3, title: "Object-Oriented C++", description: "Classes and objects in C++" },
      { id: 4, title: "Templates and STL", description: "Generic programming and libraries" },
      { id: 5, title: "Advanced C++", description: "Performance optimization and best practices" }
    ]
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    desc: "Dynamic and Versatile Web Development Language",
    levels: [
      { id: 1, title: "Introduction to JavaScript", description: "Basic syntax and concepts" },
      { id: 2, title: "Variables and Data Types", description: "Understanding different data types" },
      { id: 3, title: "Functions and Scope", description: "Creating reusable code blocks" },
      { id: 4, title: "DOM Manipulation", description: "Interacting with web pages" },
      { id: 5, title: "Advanced JavaScript", description: "ES6+ features and async programming" }
    ]
  },
  java: {
    id: "java",
    name: "Java",
    desc: "Object-Oriented and Platform-Independent Language",
    levels: [
      { id: 1, title: "Java Fundamentals", description: "Basic syntax and structure" },
      { id: 2, title: "Object-Oriented Programming", description: "Classes, objects, and inheritance" },
      { id: 3, title: "Collections Framework", description: "Lists, maps, and data structures" },
      { id: 4, title: "Exception Handling", description: "Error management and debugging" },
      { id: 5, title: "Advanced Java", description: "Threads, streams, and best practices" }
    ]
  },
  html: {
    id: "html",
    name: "HTML/CSS",
    desc: "Markup Language for Web Development",
    levels: [
      { id: 1, title: "HTML Structure", description: "Basic HTML elements and structure" },
      { id: 2, title: "CSS Styling", description: "Colors, fonts, and basic styling" },
      { id: 3, title: "Layout Techniques", description: "Flexbox and CSS Grid" },
      { id: 4, title: "Responsive Design", description: "Mobile-first web design" },
      { id: 5, title: "Advanced CSS", description: "Animations and modern CSS features" }
    ]
  },
  haskell: {
    id: "haskell",
    name: "Haskell",
    desc: "Functional Programming Language",
    levels: [
      { id: 1, title: "Haskell Basics", description: "Syntax, types, and basic functions" },
      { id: 2, title: "Functional Programming", description: "Pure functions and immutability" },
      { id: 3, title: "Type System", description: "Type inference and custom types" },
      { id: 4, title: "Monads and Functors", description: "Advanced functional concepts" },
      { id: 5, title: "Real World Haskell", description: "IO, concurrency, and libraries" }
    ]
  }
};

export default languages;