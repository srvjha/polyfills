# 🚀 Machine Coding: Polyfills in JavaScript  

## 🔥 Why Polyfills?  
Polyfills are one of the most frequently asked topics in **machine coding interviews**. Understanding how they work helps you build cross-browser-compatible applications and gain a deeper understanding of JavaScript internals.  

---

## 🤔 What is a Polyfill?  

### 📌 Raw Definition:  
Any prototype method provided by the browser can have different behaviors based on the browser type (**Chrome, Safari, Internet Explorer, etc.**). Some browsers may not support certain built-in methods, or these methods may not exist at all.  

To handle this, **developers create their own version of these methods** so that if the built-in method is missing or behaves unexpectedly, the custom version is used. This ensures that the **code execution does not break**, and this concept is known as **Polyfill**.  

### 🎯 Interview Definition:  
> A **polyfill** is a piece of code (usually JavaScript on the Web) used to provide modern functionality on **older browsers** that do not natively support it.

---

## 🛠️ How to Approach This Problem  

When implementing a **polyfill**, break it down into the following steps:  

✅ **Read the method signature** (What is expected? Kya nature hai uska?)  
✅ **Understand the input** (What type of data does it accept?)  
✅ **Check the parameters** (How many parameters does it take? What are they?)  
✅ **Define the output** (What should the function return?)  
✅ **Determine the return type** (Does it return an array, object, boolean, etc.?)  
✅ **Check if it’s iterable** (Does it work with loops or higher-order functions?)  

---

## 📚 Implemented Polyfills (16 Array Methods)  

Here are the **16 array prototype methods** for which I have written polyfills:  

1️⃣ **map**  
2️⃣ **reduce**  
3️⃣ **filter**  
4️⃣ **forEach**  
5️⃣ **some**  
6️⃣ **find**  
7️⃣ **fill**  
8️⃣ **flat**  
9️⃣ **flatMap**  
🔟 **includes**  
1️⃣1️⃣ **at**  
1️⃣2️⃣ **indexOf**  
1️⃣3️⃣ **push**  
1️⃣4️⃣ **pop**  
1️⃣5️⃣ **unshift**  
1️⃣6️⃣ **shift**  

---

💡 This list will help you **practice and master polyfills**, making you confident in handling JavaScript array methods **without relying on built-in functions**. 🚀  

🔥 Contribute your method if you are interested 
