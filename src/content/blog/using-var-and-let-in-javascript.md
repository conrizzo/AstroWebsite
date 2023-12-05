---
title: 'Using Var and Let in JavaScript'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '/blog-placeholder-4.jpg'
---

I've read this topic multiple times and feel like people explaining it make it too verbose.
In the code below it can be explained instantly:
```javascript
function cat(){
    var cat = 'LET'
    if (true){
        let cat = 'VAR'
        // here the value of cat is "VAR"
    }
    // here the value of cat is "LET"
}
```
In the inner if block which executes automatically with 'if (true)' the value of cat will be 'VAR' but outside of this block it will always be 'LET'
This is about all there is to it. "let" is limited in scope to ONLY the block of code it is in. In this case this IF statement.

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