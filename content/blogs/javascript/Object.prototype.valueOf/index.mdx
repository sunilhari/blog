---
title: Ever Heard of Object.prototype.valueOf
date: 2020-03-02T06:37:51.417Z
description: First interaction with valueOf
categories: Code,javascript
---

So what is `Object.prototype.valueOf`.
Yes it is just another function,but just that I have not used it ever.

MDN documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) says

> JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected

So let's see how can it be used.

```javascript
const numberArray = [1, 2, 3]
numberArray.valueOf()

// [1,2,3]
```

Typically it is used internally by javascript.But let find a use case where we can use it.
This might not be the simplest use case you can get.But this is the one where I saw valueOf being used for the first time.

Lets try to develop a function which calculates sum of numbers.Simple enough Huh!!!!!
Ok,if it is too simple lets add a little more `masala` to it.

Design a function such that it takes the operands as individual arguments.This specific pattern is called currying.if you want to learn more about it,you can read it [here](https://javascript.info/currying-partials)

```javascript
sum(1)(2)(3)
// should give output 6
```

Lets start it simple.Consider `sum(1)(2)`.From this we can easily understand that we have to write a function that can return a function.
Confused?Lets see it in code.

```javascript
function sum(a) {
  return function(b) {
    return a + b
  }
}
```

Hope this clears the air a bit.Similarly if we have to handle more operands,say 4 arguments

```javascript
//sum(1)(2)(3)(4)

function sum(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a + b + c + d
      }
    }
  }
}
```

Now lets make this more generic so that it can cater n number of operands.
So we have to handle two cases

1. it should keep adding depending on the number of times it is invoked
2. It should output the value at the end of it

Now we can easily make out the part of code that is repeating.Lets take it out separately and make it into a function

```javascript
function sum(a) {
  function adder(b) {
    a += b
    return adder
  }
  return adder
}
```

We have simplified our code.But if you execute this you can see that it keeps returning a function and not a value.

```javascript
function sum(a) {
  function adder(b) {
    a += b
    return adder
  }
  adder.valueOf = () => {
    return a
  }
  return adder
}

// +sum(1)(2)(3)
// 6
```

In the above piece of code we have overwrote the default `valueOf` method to return our sum total.Adding `+` infront would force engine to call `valueOf` on it

**Authors Note**

_Completely understand this post is not super informative.it has its pitfalls.Bear it all for now.I will get there_
