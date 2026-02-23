1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() নির্দিষ্ট একটি id দিয়ে একটিমাত্র element select করে।
getElementsByClassName() নির্দিষ্ট class name দিয়ে একাধিক element select করে এবং একটি live HTMLCollection return করে।
querySelector() CSS selector ব্যবহার করে প্রথম matching element select করে।
querySelectorAll() CSS selector ব্যবহার করে সব matching element select করে এবং একটি static NodeList return করে।


2. How do you create and insert a new element into the DOM?

New element create করতে document.createElement() use করা হয়, তারপর textContent বা innerHTML দিয়ে content add করা হয়, এবং শেষে appendChild(), append() বা insertBefore() দিয়ে element টি DOM এ insert করা হয়।


3. What is Event Bubbling? And how does it work?

Event Bubbling হলো এমন একটি process যেখানে কোনো child element এ event ঘটলে সেই event parent → grandparent → document পর্যন্ত উপরের দিকে propagate করে। অর্থাৎ event নিচ থেকে উপরের দিকে ওঠে।


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো parent element এ event listener বসিয়ে তার child element গুলোর event handle করা। এটি useful কারণ এতে কম event listener লাগে, performance ভালো হয়, এবং dynamically added element গুলোর event সহজে handle করা যায়।


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() কোনো element এর default behavior (যেমন form submit, link redirect) বন্ধ করে।
stopPropagation() event কে parent element এ bubble হওয়া বন্ধ করে।
