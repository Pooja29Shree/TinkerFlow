export const en = `
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
`;

export const hi = `
    <h2>अध्याय 1: फ़ंक्शन का परिचय</h2>
    <h3>फ़ंक्शन क्या है?</h3>
    <p>प्रोग्रामिंग में, एक फ़ंक्शन पुन: प्रयोज्य कोड का एक ब्लॉक है जो एक विशिष्ट कार्य करता है। एक ही कोड को बार-बार लिखने के बजाय, हम एक बार एक फ़ंक्शन बनाते हैं और जब भी ज़रूरत हो उसका उपयोग करते हैं।</p>
    <h3>हमें फ़ंक्शंस की आवश्यकता क्यों है?</h3>
    <ol>
        <li>पुनरावृत्ति से बचें</li>
        <li>बेहतर संगठन</li>
        <li>आसान परीक्षण</li>
        <li>पुन: उपयोगिता</li>
    </ol>

    <h2>अध्याय 2: पायथन फ़ंक्शंस - मूल बातें</h2>
    <h3>फ़ंक्शन परिभाषा</h3>
    <p>पायथन में एक फ़ंक्शन बनाने के लिए, हम <code>def</code> कीवर्ड का उपयोग करते हैं।</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>पैरामीटर के साथ फ़ंक्शंस</h3>
    <p>पैरामीटर उन सामग्रियों की तरह हैं जो आप एक फ़ंक्शन को देते हैं।</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>वापसी मान</h3>
    <p><code>return</code> स्टेटमेंट वह है जो फ़ंक्शन प्रोसेसिंग के बाद वापस देता है।</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>अध्याय 3: लैम्ब्डा फ़ंक्शंस - त्वरित और सरल फ़ंक्शंस</h2>
    <h3>लैम्ब्डा फ़ंक्शंस क्या हैं?</h3>
    <p>लैम्ब्डा फ़ंक्शंस छोटे, अनाम फ़ंक्शंस होते हैं जिन्हें एक ही पंक्ति में परिभाषित किया जा सकता है।</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>अध्याय 4: उच्च-क्रम फ़ंक्शंस और फ़ंक्शन संरचना</h2>
    <h3>उच्च-क्रम फ़ंक्शंस क्या हैं?</h3>
    <p>उच्च-क्रम फ़ंक्शंस ऐसे फ़ंक्शंस होते हैं जो अन्य फ़ंक्शंस को पैरामीटर के रूप में ले सकते हैं या परिणामों के रूप में फ़ंक्शंस वापस कर सकते हैं।</p>
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

    <h2>अध्याय 5: व्यावहारिक उदाहरण और सर्वोत्तम अभ्यास</h2>
    <h3>उदाहरण: ग्राम इन्वेंटरी प्रबंधन प्रणाली</h3>
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
`;

export const kn = `
    <h2>ಅಧ್ಯಾಯ 1: ಕಾರ್ಯಗಳ ಪರಿಚಯ</h2>
    <h3>ಕಾರ್ಯ ಎಂದರೇನು?</h3>
    <p>ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ, ಒಂದು ಕಾರ್ಯವು ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯವನ್ನು ನಿರ್ವಹಿಸುವ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕೋಡ್‌ನ ಒಂದು ಬ್ಲಾಕ್ ಆಗಿದೆ. ಒಂದೇ ಕೋಡ್ ಅನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಬರೆಯುವ ಬದಲು, ನಾವು ಒಮ್ಮೆ ಕಾರ್ಯವನ್ನು ರಚಿಸುತ್ತೇವೆ ಮತ್ತು ಅಗತ್ಯವಿದ್ದಾಗ ಅದನ್ನು ಬಳಸುತ್ತೇವೆ.</p>
    <h3>ನಮಗೆ ಕಾರ್ಯಗಳು ಏಕೆ ಬೇಕು?</h3>
    <ol>
        <li>ಪುನರಾವರ್ತನೆಯನ್ನು ತಪ್ಪಿಸಿ</li>
        <li>ಉತ್ತಮ ಸಂಘಟನೆ</li>
        <li>ಸುಲಭ ಪರೀಕ್ಷೆ</li>
        <li>ಮರುಬಳಕೆ</li>
    </ol>

    <h2>ಅಧ್ಯಾಯ 2: ಪೈಥಾನ್ ಕಾರ್ಯಗಳು - ಮೂಲಭೂತಗಳು</h2>
    <h3>ಕಾರ್ಯ ವ್ಯಾಖ್ಯಾನ</h3>
    <p>ಪೈಥಾನ್‌ನಲ್ಲಿ ಕಾರ್ಯವನ್ನು ರಚಿಸಲು, ನಾವು <code>def</code> ಕೀವರ್ಡ್ ಅನ್ನು ಬಳಸುತ್ತೇವೆ.</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>ಪ್ಯಾರಾಮೀಟರ್‌ಗಳೊಂದಿಗೆ ಕಾರ್ಯಗಳು</h3>
    <p>ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು ನೀವು ಕಾರ್ಯಕ್ಕೆ ನೀಡುವ ಪದಾರ್ಥಗಳಂತೆ ಇವೆ.</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>ಹಿಂತಿರುಗಿಸುವ ಮೌಲ್ಯಗಳು</h3>
    <p><code>return</code> ಸ್ಟೇಟ್‌ಮೆಂಟ್ ಎಂದರೆ ಕಾರ್ಯವು ಪ್ರಕ್ರಿಯೆಯ ನಂತರ ಹಿಂತಿರುಗಿಸುವುದು.</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>ಅಧ್ಯಾಯ 3: ಲ್ಯಾಂಬ್ಡಾ ಕಾರ್ಯಗಳು - ತ್ವರಿತ ಮತ್ತು ಸರಳ ಕಾರ್ಯಗಳು</h2>
    <h3>ಲ್ಯಾಂಬ್ಡಾ ಕಾರ್ಯಗಳು ಯಾವುವು?</h3>
    <p>ಲ್ಯಾಂಬ್ಡಾ ಕಾರ್ಯಗಳು ಸಣ್ಣ, ಅನಾಮಧೇಯ ಕಾರ್ಯಗಳಾಗಿವೆ, ಇವುಗಳನ್ನು ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು.</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>ಅಧ್ಯಾಯ 4: ಉನ್ನತ-ಶ್ರೇಣಿಯ ಕಾರ್ಯಗಳು ಮತ್ತು ಕಾರ್ಯ ಸಂಯೋಜನೆ</h2>
    <h3>ಉನ್ನತ-ಶ್ರೇಣಿಯ ಕಾರ್ಯಗಳು ಯಾವುವು?</h3>
    <p>ಉನ್ನತ-ಶ್ರೇಣಿಯ ಕಾರ್ಯಗಳು ಇತರ ಕಾರ್ಯಗಳನ್ನು ಪ್ಯಾರಾಮೀಟರ್‌ಗಳಾಗಿ ತೆಗೆದುಕೊಳ್ಳುವ ಅಥವಾ ಫಲಿತಾಂಶಗಳಾಗಿ ಕಾರ್ಯಗಳನ್ನು ಹಿಂದಿರುಗಿಸುವ ಕಾರ್ಯಗಳಾಗಿವೆ.</p>
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

    <h2>ಅಧ್ಯಾಯ 5: ಪ್ರಾಯೋಗಿಕ ಉದಾಹರಣೆಗಳು ಮತ್ತು ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು</h2>
    <h3>ಉದಾಹರಣೆ: ಹಳ್ಳಿ ದಾಸ್ತಾನು ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ</h3>
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
`;

export const ml = `
    <h2>അധ്യായം 1: ഫംഗ്ഷനുകളുടെ ആമുഖം</h2>
    <h3>എന്താണ് ഒരു ഫംഗ്ഷൻ?</h3>
    <p>പ്രോഗ്രാമിംഗിൽ, ഒരു ഫംഗ്ഷൻ ഒരു പ്രത്യേക ടാസ്ക് ചെയ്യുന്ന, വീണ്ടും ഉപയോഗിക്കാവുന്ന കോഡിന്റെ ഒരു ബ്ലോക്കാണ്. ഒരേ കോഡ് വീണ്ടും വീണ്ടും എഴുതുന്നതിന് പകരം, നമ്മൾ ഒരു ഫംഗ്ഷൻ ഒരിക്കൽ ഉണ്ടാക്കുകയും ആവശ്യം വരുമ്പോൾ അത് ഉപയോഗിക്കുകയും ചെയ്യുന്നു.</p>
    <h3>എന്തുകൊണ്ടാണ് നമുക്ക് ഫംഗ്ഷനുകൾ വേണ്ടത്?</h3>
    <ol>
        <li>ആവർത്തനം ഒഴിവാക്കാൻ</li>
        <li>മെച്ചപ്പെട്ട ഓർഗനൈസേഷൻ</li>
        <li>എളുപ്പമുള്ള ടെസ്റ്റിംഗ്</li>
        <li>വീണ്ടും ഉപയോഗിക്കാനുള്ള കഴിവ്</li>
    </ol>

    <h2>അധ്യായം 2: പൈത്തൺ ഫംഗ്ഷനുകൾ - അടിസ്ഥാന കാര്യങ്ങൾ</h2>
    <h3>ഫംഗ്ഷൻ നിർവചനം</h3>
    <p>പൈത്തണിൽ ഒരു ഫംഗ്ഷൻ ഉണ്ടാക്കാൻ, നമ്മൾ <code>def</code> എന്ന കീവേഡ് ഉപയോഗിക്കുന്നു.</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>പാരാമീറ്ററുകളുള്ള ഫംഗ്ഷനുകൾ</h3>
    <p>പാരാമീറ്ററുകൾ ഒരു ഫംഗ്ഷന് നിങ്ങൾ നൽകുന്ന ചേരുവകൾ പോലെയാണ്.</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>റിട്ടേൺ മൂല്യങ്ങൾ</h3>
    <p><code>return</code> സ്റ്റേറ്റ്മെന്റ്, പ്രോസസ്സിംഗ് കഴിഞ്ഞ ശേഷം ഫംഗ്ഷൻ തിരികെ നൽകുന്നതാണ്.</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>അധ്യായം 3: ലാംഡ ഫംഗ്ഷനുകൾ - വേഗതയേറിയതും ലളിതവുമായ ഫംഗ്ഷനുകൾ</h2>
    <h3>എന്താണ് ലാംഡ ഫംഗ്ഷനുകൾ?</h3>
    <p>ലാംഡ ഫംഗ്ഷനുകൾ ഒരു വരിയിൽ നിർവചിക്കാൻ കഴിയുന്ന, ചെറിയതും അജ്ഞാതവുമായ ഫംഗ്ഷനുകളാണ്.</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>അധ്യായം 4: ഹയർ-ഓർഡർ ഫംഗ്ഷനുകളും ഫംഗ്ഷൻ കോമ്പോസിഷനും</h2>
    <h3>എന്താണ് ഹയർ-ഓർഡർ ഫംഗ്ഷനുകൾ?</h3>
    <p>ഹയർ-ഓർഡർ ഫംഗ്ഷനുകൾ മറ്റ് ഫംഗ്ഷനുകളെ പാരാമീറ്ററുകളായി എടുക്കാനോ അല്ലെങ്കിൽ ഫംഗ്ഷനുകളെ ഫലങ്ങളായി തിരികെ നൽകാനോ കഴിയുന്ന ഫംഗ്ഷനുകളാണ്.</p>
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

    <h2>അധ്യായം 5: പ്രായോഗിക ഉദാഹരണങ്ങളും മികച്ച പരിശീലനങ്ങളും</h2>
    <h3>ഉദാഹരണം: വില്ലേജ് ഇൻവെന്ററി മാനേജ്മെന്റ് സിസ്റ്റം</h3>
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
`;

export const ta = `
    <h2>அத்தியாயம் 1: செயற்கூறுகளின் அறிமுகம்</h2>
    <h3>செயற்கூறு என்றால் என்ன?</h3>
    <p>நிரலாக்கத்தில், ஒரு செயற்கூறு என்பது ஒரு குறிப்பிட்ட வேலையைச் செய்யும் மீண்டும் பயன்படுத்தக்கூடிய குறியீட்டின் தொகுதியாகும். ஒரே குறியீட்டை மீண்டும் மீண்டும் எழுதுவதற்குப் பதிலாக, நாம் ஒரு செயற்கூறை ஒருமுறை உருவாக்கி, தேவைப்படும் போதெல்லாம் அதைப் பயன்படுத்துகிறோம்.</p>
    <h3>நமக்கு ஏன் செயற்கூறுகள் தேவை?</h3>
    <ol>
        <li>மீண்டும் மீண்டும் செய்வதைத் தவிர்க்க</li>
        <li>சிறந்த அமைப்பு</li>
        <li>எளிதான சோதனை</li>
        <li>மீண்டும் பயன்படுத்தும் திறன்</li>
    </ol>

    <h2>அத்தியாயம் 2: பைத்தான் செயற்கூறுகள் - அடிப்படைகள்</h2>
    <h3>செயற்கூறு வரையறை</h3>
    <p>பைத்தானில் ஒரு செயற்கூறை உருவாக்க, நாம் <code>def</code> என்ற முக்கிய சொல்லைப் பயன்படுத்துகிறோம்.</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>அளவீடுகளுடன் செயற்கூறுகள்</h3>
    <p>அளவீடுகள் என்பது ஒரு செயற்கூறுக்கு நீங்கள் கொடுக்கும் மூலப்பொருட்கள் போன்றவை.</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>திரும்ப வரும் மதிப்புகள்</h3>
    <p><code>return</code> அறிக்கை என்பது, செயல்படுத்திய பிறகு செயற்கூறு மீண்டும் கொடுக்கும் மதிப்பு.</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>அத்தியாயம் 3: லாம்ப்டா செயற்கூறுகள் - விரைவான மற்றும் எளிமையான செயற்கூறுகள்</h2>
    <h3>லாம்ப்டா செயற்கூறுகள் என்றால் என்ன?</h3>
    <p>லாம்ப்டா செயற்கூறுகள் சிறிய, பெயர் தெரியாத செயற்கூறுகள் ஆகும், அவை ஒரே வரியில் வரையறுக்கப்படலாம்.</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>அத்தியாயம் 4: உயர்-வரிசை செயற்கூறுகள் மற்றும் செயற்கூறு கலவை</h2>
    <h3>உயர்-வரிசை செயற்கூறுகள் என்றால் என்ன?</h3>
    <p>உயர்-வரிசை செயற்கூறுகள் என்பது, பிற செயற்கூறுகளை அளவீடுகளாக எடுத்துக்கொள்ளும் அல்லது செயற்கூறுகளை முடிவுகளாகத் திரும்ப அளிக்கும் செயற்கூறுகள் ஆகும்.</p>
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

    <h2>அத்தியாயம் 5: நடைமுறை உதாரணங்கள் மற்றும் சிறந்த நடைமுறைகள்</h2>
    <h3>உதாரணம்: கிராம சரக்கு மேலாண்மை அமைப்பு</h3>
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
`;

export const te = `
    <h2>అధ్యాయం 1: ఫంక్షన్‌లకు పరిచయం</h2>
    <h3>ఫంక్షన్ అంటే ఏమిటి?</h3>
    <p>ప్రోగ్రామింగ్‌లో, ఒక ఫంక్షన్ అనేది ఒక నిర్దిష్ట పనిని చేసే పునర్వినియోగ కోడ్ యొక్క బ్లాక్. ఒకే కోడ్‌ను పదేపదే వ్రాయడానికి బదులుగా, మనం ఒకసారి ఒక ఫంక్షన్‌ను సృష్టించి, అవసరమైనప్పుడు దాన్ని ఉపయోగిస్తాము.</p>
    <h3>మనకు ఫంక్షన్‌లు ఎందుకు అవసరం?</h3>
    <ol>
        <li>పునరావృత్తిని నివారించడానికి</li>
        <li>మంచి సంస్థ</li>
        <li>సులభమైన పరీక్ష</li>
        <li>పునర్వినియోగం</li>
    </ol>

    <h2>అధ్యాయం 2: పైథాన్ ఫంక్షన్‌లు - ప్రాథమిక అంశాలు</h2>
    <h3>ఫంక్షన్ నిర్వచనం</h3>
    <p>పైథాన్‌లో ఒక ఫంక్షన్‌ను సృష్టించడానికి, మనం <code>def</code> అనే కీవర్డ్‌ను ఉపయోగిస్తాము.</p>
    <pre><code>def greet():
    print("Namaste! Welcome to our program.")

greet()</code></pre>

    <h3>పారామీటర్‌లతో ఫంక్షన్‌లు</h3>
    <p>పారామీటర్‌లు మీరు ఒక ఫంక్షన్‌కు ఇచ్చే పదార్థాల వంటివి.</p>
    <pre><code>def calculate_rectangle_area(length, width):
    area = length * width
    print(f"The area of rectangle is: {area} square units")

calculate_rectangle_area(10, 5)</code></pre>

    <h3>తిరిగి వచ్చే విలువలు</h3>
    <p><code>return</code> స్టేట్‌మెంట్ అనేది, ప్రాసెసింగ్ తర్వాత ఫంక్షన్ తిరిగి ఇచ్చే విలువ.</p>
    <pre><code>def add_two_numbers(a, b):
    result = a + b
    return result

sum_result = add_two_numbers(15, 25)
print(f"The sum is: {sum_result}")</code></pre>

    <h2>అధ్యాయం 3: లాంబ్డా ఫంక్షన్‌లు - త్వరిత మరియు సరళమైన ఫంక్షన్‌లు</h2>
    <h3>లాంబ్డా ఫంక్షన్‌లు అంటే ఏమిటి?</h3>
    <p>లాంబ్డా ఫంక్షన్‌లు చిన్న, అనామక ఫంక్షన్‌లు, వీటిని ఒకే లైన్‌లో నిర్వచించవచ్చు.</p>
    <pre><code># Regular function
def square(x):
    return x * x

# Lambda function
square_lambda = lambda x: x * x

print(f"Regular function: {square(5)}")
print(f"Lambda function: {square_lambda(5)}")</code></pre>

    <h2>అధ్యాయం 4: ఉన్నత-క్రమ ఫంక్షన్‌లు మరియు ఫంక్షన్ కూర్పు</h2>
    <h3>ఉన్నత-క్రమ ఫంక్షన్‌లు అంటే ఏమిటి?</h3>
    <p>ఉన్నత-క్రమ ఫంక్షన్‌లు అనేవి ఇతర ఫంక్షన్‌లను పారామీటర్‌లుగా తీసుకునేవి లేదా ఫంక్షన్‌లను ఫలితాలుగా తిరిగి ఇచ్చేవి.</p>
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

    <h2>అధ్యాయం 5: ఆచరణాత్మక ఉదాహరణలు మరియు ఉత్తమ అభ్యాసాలు</h2>
    <h3>ఉదాహరణ: గ్రామ ఇన్వెంటరీ నిర్వహణ వ్యవస్థ</h3>
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
`;
