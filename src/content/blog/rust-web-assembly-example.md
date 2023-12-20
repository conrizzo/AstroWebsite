---
title: 'Short Rust Web Assembly example'
description: 'How this rust web assembly code works.'
pubDate: 'Dec 17 2023'
heroImage: '/blog-placeholder-2.jpg'
---

The Rust code that shuffles the letter load in animation in the title on https://conradswebsite.com is below, this of course
has to be converted to web assembly to be used! This code takes a JavaScript array as input, then shuffles the array in 
`pub fn randomize_word_order(words: Array) -> Array` returning a randomized array.

```rust
use wasm_bindgen::prelude::*;
use rand::seq::SliceRandom;
use js_sys::Array;
use rand::Rng;
use rand::thread_rng;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

pub fn randomize_word_order(words: Array) -> Array {
    let mut rng = rand::thread_rng();

    let mut words_vec = js_sys::Array::from(&words).to_vec();
    words_vec.shuffle(&mut rng);

    let shuffled_words = Array::new();
    for word in words_vec {
        shuffled_words.push(&JsValue::from(word));
    }

    return shuffled_words
}

// currently accepts an array, then sends  it to randomize_word_order to randomize the order of the items in the array
#[wasm_bindgen]
pub fn main(words: Array) -> Array { 
    return randomize_word_order(words);    
}
```


