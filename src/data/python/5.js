export const en = `
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
`;

export const hi = `
    <h2>अध्याय 1: पायथन में पुनरावर्तन को समझना</h2>
    <h3>पुनरावर्तन क्या है?</h3>
    <p>पुनरावर्तन एक प्रोग्रामिंग तकनीक है जहाँ एक फ़ंक्शन किसी समस्या को हल करने के लिए खुद को कॉल करता है। यह जटिल समस्याओं को छोटे, समान समस्याओं में तोड़ देता है।</p>
    <h3>पुनरावर्तन के मुख्य घटक</h3>
    <ol>
        <li><b>बेस केस:</b> वह शर्त जो पुनरावर्तन को रोकती है।</li>
        <li><b>पुनरावर्ती केस:</b> फ़ंक्शन खुद को एक संशोधित इनपुट के साथ कॉल कर रहा है।</li>
    </ol>
    <h3>मूल पुनरावर्तन उदाहरण: फैक्टोरियल की गणना</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>अध्याय 2: उन्नत फ़ंक्शन अवधारणाएं</h2>
    <h3>डेकोरेटर</h3>
    <p>एक डेकोरेटर एक फ़ंक्शन है जो दूसरे फ़ंक्शन के स्रोत कोड को बदले बिना उसके व्यवहार को संशोधित करता है।</p>
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

    <h3>जनरेटर</h3>
    <p>एक जनरेटर एक विशेष फ़ंक्शन है जो एक पुनरावर्तक लौटाता है, एक ही बार में सभी मानों के बजाय एक-एक करके मान देता है। यह बहुत स्मृति-कुशल है।</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>अध्याय 3: पुनरावर्ती दृष्टिकोणों के साथ समस्या-समाधान</h2>
    <h3>पुनरावर्तन का उपयोग कब करें</h3>
    <p>पुनरावर्तन उन समस्याओं के लिए सबसे उपयुक्त है जिन्हें छोटे, समान उप-समस्याओं में तोड़ा जा सकता है, एक स्पष्ट बेस केस है, और अक्सर एक पेड़ जैसी संरचना शामिल होती है।</p>
    <h3>उन्नत पुनरावर्ती उदाहरण: डायरेक्टरी ट्री ट्रैवर्सल</h3>
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
`;

export const kn = `
    <h2>ಅಧ್ಯಾಯ 1: ಪೈಥಾನ್‌ನಲ್ಲಿ ಪುನರಾವರ್ತನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು</h2>
    <h3>ಪುನರಾವರ್ತನೆ ಎಂದರೇನು?</h3>
    <p>ಪುನರಾವರ್ತನೆಯು ಒಂದು ಪ್ರೋಗ್ರಾಮಿಂಗ್ ತಂತ್ರವಾಗಿದ್ದು, ಇಲ್ಲಿ ಒಂದು ಕಾರ್ಯವು ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ತನ್ನನ್ನು ತಾನೇ ಕರೆ ಮಾಡುತ್ತದೆ. ಇದು ಸಂಕೀರ್ಣ ಸಮಸ್ಯೆಗಳನ್ನು ಚಿಕ್ಕ, ಇದೇ ರೀತಿಯ ಸಮಸ್ಯೆಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ.</p>
    <h3>ಪುನರಾವರ್ತನೆಯ ಪ್ರಮುಖ ಘಟಕಗಳು</h3>
    <ol>
        <li><b>ಬೇಸ್ ಕೇಸ್:</b> ಪುನರಾವರ್ತನೆಯನ್ನು ನಿಲ್ಲಿಸುವ ಸ್ಥಿತಿ.</li>
        <li><b>ಪುನರಾವರ್ತಿತ ಕೇಸ್:</b> ಮಾರ್ಪಡಿಸಿದ ಇನ್‌ಪುಟ್‌ನೊಂದಿಗೆ ಕಾರ್ಯವು ತನ್ನನ್ನು ತಾನೇ ಕರೆ ಮಾಡುವುದು.</li>
    </ol>
    <h3>ಮೂಲಭೂತ ಪುನರಾವರ್ತನೆ ಉದಾಹರಣೆ: ಫ್ಯಾಕ್ಟೋರಿಯಲ್ ಲೆಕ್ಕಾಚಾರ</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>ಅಧ್ಯಾಯ 2: ಸುಧಾರಿತ ಕಾರ್ಯ ಪರಿಕಲ್ಪನೆಗಳು</h2>
    <h3>ಡೆಕೋರೇಟರ್‌ಗಳು</h3>
    <p>ಒಂದು ಡೆಕೋರೇಟರ್ ಒಂದು ಕಾರ್ಯವಾಗಿದ್ದು, ಅದರ ಮೂಲ ಕೋಡ್ ಅನ್ನು ಬದಲಾಯಿಸದೆ ಮತ್ತೊಂದು ಕಾರ್ಯದ ನಡವಳಿಕೆಯನ್ನು ಮಾರ್ಪಡಿಸುತ್ತದೆ.</p>
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

    <h3>ಜನರೇಟರ್‌ಗಳು</h3>
    <p>ಒಂದು ಜನರೇಟರ್ ಒಂದು ವಿಶೇಷ ಕಾರ್ಯವಾಗಿದ್ದು, ಇದು ಇಟರೇಟರ್ ಅನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತದೆ, ಎಲ್ಲಾ ಮೌಲ್ಯಗಳನ್ನು ಒಂದೇ ಬಾರಿಗೆ ನೀಡುವ ಬದಲು ಒಂದೊಂದಾಗಿ ನೀಡುತ್ತದೆ. ಇದು ತುಂಬಾ ಮೆಮೊರಿ ದಕ್ಷತೆಯನ್ನು ಹೊಂದಿದೆ.</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>ಅಧ್ಯಾಯ 3: ಪುನರಾವರ್ತಿತ ವಿಧಾನಗಳೊಂದಿಗೆ ಸಮಸ್ಯೆ-ಪರಿಹಾರ</h2>
    <h3>ಪುನರಾವರ್ತನೆಯನ್ನು ಯಾವಾಗ ಬಳಸಬೇಕು</h3>
    <p>ಪುನರಾವರ್ತನೆಯು ಸಣ್ಣ, ಇದೇ ರೀತಿಯ ಉಪಸಮಸ್ಯೆಗಳಾಗಿ ವಿಭಜಿಸಬಹುದಾದ, ಸ್ಪಷ್ಟವಾದ ಬೇಸ್ ಕೇಸ್ ಹೊಂದಿರುವ ಮತ್ತು ಹೆಚ್ಚಾಗಿ ಮರದಂತಹ ರಚನೆಯನ್ನು ಒಳಗೊಂಡಿರುವ ಸಮಸ್ಯೆಗಳಿಗೆ ಹೆಚ್ಚು ಸೂಕ್ತವಾಗಿದೆ.</p>
    <h3>ಸುಧಾರಿತ ಪುನರಾವರ್ತಿತ ಉದಾಹರಣೆ: ಡೈರೆಕ್ಟರಿ ಟ್ರೀ ಟ್ರಾವರ್ಸಲ್</h3>
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
`;

export const ml = `
    <h2>അധ്യായം 1: പൈത്തണിൽ റിക്കർഷൻ മനസ്സിലാക്കുന്നു</h2>
    <h3>എന്താണ് റിക്കർഷൻ?</h3>
    <p>റിക്കർഷൻ എന്നത് ഒരു പ്രശ്നം പരിഹരിക്കാൻ ഒരു ഫംഗ്ഷൻ സ്വയം വിളിക്കുന്ന ഒരു പ്രോഗ്രാമിംഗ് ടെക്നിക്കാണ്. ഇത് സങ്കീർണ്ണമായ പ്രശ്നങ്ങളെ ചെറുതും സമാനവുമായ പ്രശ്നങ്ങളായി വിഭജിക്കുന്നു.</p>
    <h3>റിക്കർഷന്റെ പ്രധാന ഘടകങ്ങൾ</h3>
    <ol>
        <li><b>ബേസ് കേസ്:</b> റിക്കർഷൻ നിർത്തുന്നതിനുള്ള വ്യവസ്ഥ.</li>
        <li><b>റിക്കർസീവ് കേസ്:</b> ഒരു പരിഷ്കരിച്ച ഇൻപുട്ട് ഉപയോഗിച്ച് ഫംഗ്ഷൻ സ്വയം വിളിക്കുന്നു.</li>
    </ol>
    <h3>അടിസ്ഥാന റിക്കർഷൻ ഉദാഹരണം: ഫാക്ടോറിയൽ കണക്കാക്കുന്നു</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>അധ്യായം 2: അഡ്വാൻസ്ഡ് ഫംഗ്ഷൻ ആശയങ്ങൾ</h2>
    <h3>ഡെക്കറേറ്ററുകൾ</h3>
    <p>ഒരു ഡെക്കറേറ്റർ എന്നത് മറ്റൊരു ഫംഗ്ഷന്റെ സോഴ്സ് കോഡ് മാറ്റാതെ തന്നെ അതിന്റെ സ്വഭാവം മാറ്റുന്ന ഒരു ഫംഗ്ഷനാണ്.</p>
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

    <h3>ജനറേറ്ററുകൾ</h3>
    <p>ഒരു ജനറേറ്റർ എന്നത് ഒരു പ്രത്യേക ഫംഗ്ഷനാണ്, അത് ഒരു ഇറ്ററേറ്റർ നൽകുന്നു, എല്ലാ മൂല്യങ്ങളും ഒരേസമയം നൽകുന്നതിന് പകരം ഓരോന്നായി നൽകുന്നു. ഇത് വളരെ മെമ്മറി കാര്യക്ഷമമാണ്.</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>അധ്യായം 3: റിക്കർസീവ് സമീപനങ്ങളോടെയുള്ള പ്രശ്നപരിഹാരം</h2>
    <h3>എപ്പോൾ റിക്കർഷൻ ഉപയോഗിക്കണം</h3>
    <p>റിക്കർഷൻ ചെറുതും സമാനവുമായ ഉപപ്രശ്നങ്ങളായി വിഭജിക്കാൻ കഴിയുന്ന, വ്യക്തമായ ബേസ് കേസ് ഉള്ള, കൂടാതെ പലപ്പോഴും ഒരു വൃക്ഷം പോലുള്ള ഘടന ഉൾപ്പെടുന്ന പ്രശ്നങ്ങൾക്ക് ഏറ്റവും അനുയോജ്യമാണ്.</p>
    <h3>അഡ്വാൻസ്ഡ് റിക്കർസീവ് ഉദാഹരണം: ഡയറക്ടറി ട്രീ ട്രാവേഴ്സൽ</h3>
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
`;

export const ta = `
    <h2>அத்தியாயம் 1: பைத்தானில் தற்சுழற்சியைப் புரிந்துகொள்வது</h2>
    <h3>தற்சுழற்சி என்றால் என்ன?</h3>
    <p>தற்சுழற்சி என்பது ஒரு சிக்கலைத் தீர்க்க ஒரு செயற்கூறு தன்னைத்தானே அழைக்கும் ஒரு நிரலாக்க நுட்பமாகும். இது சிக்கலான சிக்கல்களை சிறிய, ஒத்த சிக்கல்களாகப் பிரிக்கிறது.</p>
    <h3>தற்சுழற்சியின் முக்கிய கூறுகள்</h3>
    <ol>
        <li><b>அடிப்படை நிலை:</b> தற்சுழற்சியை நிறுத்தும் நிபந்தனை.</li>
        <li><b>தற்சுழற்சி நிலை:</b> மாற்றியமைக்கப்பட்ட உள்ளீட்டுடன் செயற்கூறு தன்னைத்தானே அழைப்பது.</li>
    </ol>
    <h3>அடிப்படை தற்சுழற்சி உதாரணம்: காரணி கணக்கிடுதல்</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>அத்தியாயம் 2: மேம்பட்ட செயற்கூறு கருத்துக்கள்</h2>
    <h3>அலங்காரிகள் (Decorators)</h3>
    <p>ஒரு அலங்காரி என்பது அதன் மூலக் குறியீட்டை மாற்றாமல் மற்றொரு செயற்கூறின் நடத்தையை மாற்றியமைக்கும் ஒரு செயற்கூறு ஆகும்.</p>
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

    <h3>ஜெனரேட்டர்கள்</h3>
    <p>ஒரு ஜெனரேட்டர் என்பது ஒரு சிறப்பு செயற்கூறு ஆகும், இது ஒரு இட்டரேட்டரைத் திருப்பித் தருகிறது, அனைத்து மதிப்புகளையும் ஒரே நேரத்தில் வழங்குவதற்குப் பதிலாக ஒரு நேரத்தில் ஒரு மதிப்பை வழங்குகிறது. இது நினைவகத்திற்கு மிகவும் திறமையானது.</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>அத்தியாயம் 3: தற்சுழற்சி அணுகுமுறைகளுடன் சிக்கல் தீர்த்தல்</h2>
    <h3>தற்சுழற்சியை எப்போது பயன்படுத்த வேண்டும்</h3>
    <p>தற்சுழற்சி என்பது சிறிய, ஒத்த துணை சிக்கல்களாகப் பிரிக்கக்கூடிய, ஒரு தெளிவான அடிப்படை நிலையைக் கொண்ட, மற்றும் பெரும்பாலும் ஒரு மர போன்ற அமைப்பை உள்ளடக்கிய சிக்கல்களுக்கு மிகவும் பொருத்தமானது.</p>
    <h3>மேம்பட்ட தற்சுழற்சி உதாரணம்: அடைவு மரத்தை கடந்து செல்வது</h3>
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
`;

export const te = `
    <h2>అధ్యాయం 1: పైథాన్‌లో పునరావృత్తిని అర్థం చేసుకోవడం</h2>
    <h3>పునరావృత్తి అంటే ఏమిటి?</h3>
    <p>పునరావృత్తి అనేది ఒక సమస్యను పరిష్కరించడానికి ఒక ఫంక్షన్ తనను తాను పిలిచే ఒక ప్రోగ్రామింగ్ టెక్నిక్. ఇది సంక్లిష్ట సమస్యలను చిన్న, సారూప్య సమస్యలుగా విడగొడుతుంది.</p>
    <h3>పునరావృత్తి యొక్క కీలక భాగాలు</h3>
    <ol>
        <li><b>బేస్ కేసు:</b> పునరావృత్తిని ఆపే షరతు.</li>
        <li><b>పునరావృత్త కేసు:</b> సవరించిన ఇన్‌పుట్‌తో ఫంక్షన్ తనను తాను పిలవడం.</li>
    </ol>
    <h3>ప్రాథమిక పునరావృత్తి ఉదాహరణ: ఫ్యాక్టోరియల్ లెక్కించడం</h3>
    <pre><code>def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120</code></pre>

    <h2>అధ్యాయం 2: అధునాతన ఫంక్షన్ భావనలు</h2>
    <h3>డెకరేటర్లు</h3>
    <p>ఒక డెకరేటర్ అనేది మరొక ఫంక్షన్ యొక్క సోర్స్ కోడ్‌ను మార్చకుండా దాని ప్రవర్తనను సవరించే ఒక ఫంక్షన్.</p>
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

    <h3>జనరేటర్లు</h3>
    <p>ఒక జనరేటర్ అనేది ఒక ప్రత్యేక ఫంక్షన్, ఇది ఒక ఇటరేటర్‌ను తిరిగి ఇస్తుంది, అన్ని విలువలను ఒకేసారి కాకుండా ఒకదాని తర్వాత ఒకటిగా ఇస్తుంది. ఇది చాలా మెమరీ సామర్థ్యం గలది.</p>
    <pre><code>def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num) # Prints: 1, 2, 3, 4, 5</code></pre>

    <h2>అధ్యాయం 3: పునరావృత్త విధానాలతో సమస్య-పరిష్కారం</h2>
    <h3>పునరావృత్తిని ఎప్పుడు ఉపయోగించాలి</h3>
    <p>పునరావృత్తి అనేది చిన్న, సారూప్య ఉప-సమస్యలుగా విడగొట్టగల సమస్యలకు, స్పష్టమైన బేస్ కేస్ ఉన్న వాటికి మరియు తరచుగా ఒక చెట్టు లాంటి నిర్మాణాన్ని కలిగి ఉన్న వాటికి చాలా అనుకూలంగా ఉంటుంది.</p>
    <h3>అధునాతన పునరావృత్త ఉదాహరణ: డైరెక్టరీ ట్రీ ట్రావర్సల్</h3>
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
`;
