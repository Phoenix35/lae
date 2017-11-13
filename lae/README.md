# The Lazy and Easy library - README
Too much code was written or copied over and over for my most basic needs of
scripting.  
I decided to put those codes in one small lib: `lae` was born.  
I do not intend to support older browsers.  
**Expected support**
EdgeHTML 14,
Firefox 44,
Chrome 45,
Opera 32,
Safari 7.1 / iOS 8[\*](#Safari-case)  

<a id="Safari-case" style="font-size: x-small">
  \* In the case of Safari,
  the Fetch API support, used internally for XMLHttpRequests
  (as per [the spec][the-spec]),
  started in Safari 10.1 / iOS 10.3 (April 2017!)
</a>

[the-spec]: <https://xhr.spec.whatwg.org/#ref-for-concept-fetch%E2%91%A5> (WhatWG XHR spec)

## Table of contents
- [How to use](#How-to-use)
  - [AJAX](#AJAX)
  - [XPath](#XPath)
  - [Canvas](#Canvas)

## How to use
The lae library is directly added to the `self` object
(`window` only prior to 0.2.0).  
**DO NOT** use `new`.  
Example
``` javascript
lae.ajax( ... )
```

#### Functions
[`lae.ajax`](#AJAX) for XMLHttpRequests.  
[`lae.xpath`](#XPath) for XPath queries.  
[`lae.canvas`](#Canvas) for canvas handling.  

---

### AJAX
`lae.ajax` currently supports `GET` and `POST` requests.
More methods will be added later on, and a `forms-only` branch will be created
for a minimalist support.
#### lae.ajax([url [, method]])
##### Request
The first argument must be the `url` of the request.
- `url` (String) - parsed URL (default: `''`)
- `method` (String) - HTTP method.  
If `method` is given, a **function** will be returned.  
If `method` is not given,
an object containing the two functions `.get()` and `.post()` will be returned.

``` javascript
// 1. When method is provided, don't forget to call the function.
// This is the preferred call when you have the user choose the method.
// E.g replace 'GET' by a variable chosenMethod.
lae.ajax('test/table.php', 'GET')({ form: { id: 2, author: 'John Doe' } })
  .then(result => {
    console.log(result);
  }, callbackError);

// This will send id=2&author=John%20Doe and log the response in the console.
// callbackError is your own function when the request somehow fails.


// 2. Or separate the steps.
lae.ajax('test/table.php')
  .get({ form: { id: 2, author: 'John Doe' } })
  .then(result => {
    console.log(result);
  }, callbackError);


// 3. NOT YET IMPLEMENTED Arguments can be given directly.
lae.ajax('test/table.php', 'GET', { form: { id: 2, author: 'John Doe' } })
  .then(result => {
    console.log(result);
  }, callbackError);

```
All calls are equivalent.

##### Response
The API returns a Promise.  
It resolves the **body** of the response sent by the server.  
It rejects if one of the following is true:
- the argument `form` is not an Object-like.
- *BUG* the argument `form` is not a String for GET requests.
- the HTTP response status is not successful (code outside the 200 ~ 299 range).
- The XMLHttpRequest fired the `error` event (request interrupted, aborted, ...).

- [ ] TODO: Return the whole HTTP response,
whose body will be parsed if a parser is given.
- [ ] TODO: Document CORS and credentials.

---

### XPath
NYI

---

### Canvas
NYI

---
[Back to top](#readme)  

<div align="center">
  [![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
  <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">The Lazy and Easy library</span> by [Phoenix35](https://github.com/Phoenix35/lae) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
</div>