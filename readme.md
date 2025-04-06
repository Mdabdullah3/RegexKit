# 📦 RegexKit

A lightweight and developer-friendly utility kit for common regular expression operations in JavaScript/TypeScript — validate emails, extract hashtags, escape HTML, and more, all with clean and powerful one-liners.

---

## ✨ Why use RegexKit?

- ✅ Simple and expressive API
- ⚡ Zero dependencies
- 💼 Perfect for both frontend and backend (Node.js)
- 🔒 Includes strong validation for emails, URLs, phone numbers, and passwords
- 🔍 Extract data like hashtags, mentions, and numbers
- 🔐 Escape & unescape HTML, JSON, and RegEx patterns

---

## 🚀 Installation

```bash
npm install regexkit
```

If you're using TypeScript and ESM:

```bash
npm install regexkit --save
```

---

## 📚 Features & Usage

### ✅ Validators

```
import { isValidEmail, isValidPhone, isValidURL, isStrongPassword } from 'regexkit';

// Email
isValidEmail("hello@example.com"); // true

// Phone
isValidPhone("+8801712345678"); // true

// URL
isValidURL("https://example.com"); // true

// Password (min 8 chars, upper, lower, number, symbol)
isStrongPassword("Str0ng@Pass"); // true

```

### 🔍 Extractors

```
import { extractHashtags, extractMentions, extractNumbers } from 'regexkit';

const text = "Loving #JavaScript and #OpenSource! Shoutout to @you and @me. Total cost: 45.99 USD";

// Extract hashtags
extractHashtags(text); // ['#JavaScript', '#OpenSource']

// Extract mentions
extractMentions(text); // ['@you', '@me']

// Extract numbers
extractNumbers(text); // ['45.99']
```

### 🔐 Escapers & Unescapers

HTML

```
import { escapeHTML, unescapeHTML } from 'regexkit';

escapeHTML('<div class="box">Hello & Welcome</div>');
// &lt;div class=&quot;box&quot;&gt;Hello &amp; Welcome&lt;/div&gt;

unescapeHTML('&lt;div&gt;Test&lt;/div&gt;');
// <div>Test</div>
```

JSON

```
import { escapeJSON, unescapeJSON } from 'regexkit';

escapeJSON('Hello "World"\n');
// Hello \"World\"\\n

unescapeJSON('Hello \\\"World\\\"\\n');
// Hello "World"
```

RegEx

```
import { escapeRegex, unescapeRegex } from 'regexkit';

escapeRegex('[a-z]+.js');
// \[a\-z\]\+\.js

unescapeRegex('\\[a\\-z\\]\\+\\.js');
// [a-z]+.js
```

---

## 📚 License

RegexKit is released under the [MIT License].

---

## 📝 Contributing

Want to add a new regex utility or improve an existing one? Contributions are welcome! Please open a pull request or issue with your ideas.

---

## 📚 Support

If you have any questions or need help, feel free to reach out to our 

🌐 Connect

    GitHub: github.com/Mdabdullah3

    LinkedIn: linkedin.com/in/mdabdullah3

--- 