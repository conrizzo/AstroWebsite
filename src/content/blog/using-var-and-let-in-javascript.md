---
title: 'Using Var and Let in JavaScript'
description: 'The basic difference between Var and Let in JavaScript'
pubDate: 'Dec 6 2023'
heroImage: '/var_let.jpg'
---

I've read this topic multiple times and feel like people explaining it make it too verbose.
In the code below it can be explained instantly. Here is a link to a jsfiddle 
<a href='https://jsfiddle.net/w40yLazr/1/'>example</a>.

```javascript
function cat(){
    var cat = 'VAR'
    if (true){
        let cat = 'LET'
        // here the value of cat is "LET"
    }
    // here the value of cat is "VAR"
}
```
In the inner if block which executes automatically with 'if (true)' the value of cat will be 'LET' but outside of this block it will always be 'VAR'
This is about all there is to it. "let" is limited in scope to ONLY the block of code it is in. In this case this means only inside this IF statement.

In the following example the position of var and let are switched. This will create an error since "let cat = 'LET'" declares the value to the whole
block for the function cat() and it cannot be redeclared. An error message of: "Cannot redeclare block-scoped variable 'cat'." will appear with the following code:

```javascript
function cat(){
    let cat = 'LET'
    if (true){
        var cat = 'VAR'        
    }    
}
```

The above example is the same principle as below:

```javascript
let cat = 'LET'
let cat = 'LET'
```

Here an error will appear saying the same variable cannot be declared twice!