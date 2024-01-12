---

title: 'Is this string a Palindrome in JavaScript?'
description: 'How to check if a string is a palindrome in JavaScript'
pubDate: 'Jan 09 2024'
heroImage: '/blog-placeholder-5.jpg'
---
<script>
function isPalindrome(stringToEvaluate) {

            stringToEvaluate = stringToEvaluate.toLowerCase()

            if (stringToEvaluate === null || stringToEvaluate.length === 0) {
                return false;
            }

            stringToEvaluate = stringToEvaluate.toString();

            let s = 0;
            let end = stringToEvaluate.length - 1;

            while (s < end) {
                if (stringToEvaluate[s] !== stringToEvaluate[end]) {
                    return false;
                }

                s++;
                end--;
            }

            return true;
        }

function checkPalindrome() {
    let word = document.getElementById('word').value;
    let result = isPalindrome(word);
    document.getElementById('result').textContent = result ? "The string is a palindrome." : "The string is not a palindrome.";
}
</script>

<html lang="en">
<body>

Self-written code without any tools or looking up anything to check if a string is a palindrome. Quickly written as an exercise,
this is an interesting thing to solve. This isn't optimized as it was written in 5-10 minutes or so. I added in the
input field for this page later, only talking about the function itself.

Update - added in the toLowerCase so an input like "Racecar" is still True and it doesn't match the
exact case, just the letters.

<input type="text" id="word" />
<button onclick="checkPalindrome()">Check Palindrome</button>
    <p id="result"></p>

This code is the javaScript function being used to evaluate this:
```javascript
function isPalindrome(stringToEvaluate) {

    stringToEvaluate = stringToEvaluate.toLowerCase()
        
    if (stringToEvaluate === null || stringToEvaluate.length === 0) {
        return false;
    }

    stringToEvaluate = stringToEvaluate.toString();

    let s = 0;
    let end = stringToEvaluate.length - 1;

    while (s < end) {
        if (stringToEvaluate[s] !== stringToEvaluate[end]) {
            return false;
        }

        s++;
        end--;
    }

    return true;
}  

console.log(isPalindrome("12334321")) // false
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("145641")) // false
console.log(isPalindrome("123454321")) // true    
```
</body>
</html>