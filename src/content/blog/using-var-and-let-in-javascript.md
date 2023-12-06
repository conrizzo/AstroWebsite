---
title: 'Using Var and Let in JavaScript'
description: 'The basic difference between Var and Let in JavaScript'
pubDate: 'Dec 6 2023'
heroImage: '/var_let.jpg'
---

I've read this topic multiple times and feel like people explaining it make it too verbose.
In the code below it can be explained instantly. Here is
<a href='https://jsfiddle.net/w40yLazr/1/'>a link to a jsfiddle example</a>.

```javascript
function cat(){
    var cat = 'VAR';
    if(true){
        let cat = 'LET';
        // here the value of cat is "LET"
    }i
    // here the value of cat is "VAR"
}
```
In the inner if block which executes automatically with `if(true)` the value of cat will be `LET`, but outside of this block it will always be `VAR`.
The `let` declaration is limited in scope to **only** the block of code it is in. In this case this means **only** inside the `if` statement.


```javascript
function cat(){
    let cat;    
    if(true){
        let cat = 'LET';
        // here the value of cat is "LET"
    }
    // here the value of cat is "undefined"
}
```

If var and let are switched as shown in example code directly below, this will create an error since `let cat = 'LET'` declares the value to the whole block for the function `cat()` and it cannot be redeclared. An error message of: "Cannot redeclare block-scoped variable 'cat'." will appear using the following code:

```javascript
function cat(){
    let cat = 'LET';
    if (true){
        var cat = 'VAR';     
    }    
}
```

The function in the code example directly above causes the same error as the example directly below.
"SyntaxError: Identifier 'cat' has already been declared"

```javascript
let cat = 'LET';
var cat = 'VAR';
```

Here an error will appear saying the same variable cannot be declared twice!

<h4>Summary:</h4>
The first choice for variables should always be <span class="variable-color">const</span>.
If something must change decide whether to use <span class="variable-color">let</span> or <span class="variable-color">var</span>. If possible, it's generally best to use <span class="variable-color">let</span> instead of <span class="variable-color">var</span> since <span class="variable-color">Let</span> does a better job with separation of concerns.



<style scoped>
.variable-color{
    color: rgb(168, 55, 247);
}
    
</style>