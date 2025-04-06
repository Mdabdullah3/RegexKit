import {
  isValidEmail,
  isValidPhone,
  isValidURL,
  isStrongPassword,
  extractHashtags,
  extractMentions,
  extractNumbers,
  escapeRegex,
  unescapeRegex,
} from "../src/index.js";

console.log(isValidEmail("hello@email.com")); // true
console.log(isValidPhone("+880123456789")); // true
console.log(isStrongPassword("Aa@123456")); // true

console.log(extractHashtags("Let's test #regex #TypeScript")); // ['#regex', '#TypeScript']
console.log(extractMentions("Hey @john @doe")); // ['@john', '@doe']
console.log(extractNumbers("Your total is 123.45 and 50")); // ['123.45', '50']

console.log(escapeRegex("1 + 1 = 2?")); // "1 \+ 1 = 2\?"
console.log(unescapeRegex("1 \\+ 1 = 2\\?")); // "1 + 1 = 2?"
