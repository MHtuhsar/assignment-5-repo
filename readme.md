1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 

**getElementById**  looks up an element by its unique ID. 

**getElementsByClassName** returns a live collection of elements with the given class.

**querySelector** returns the first element that matches a CSS selector.

**querySelectorAll** returns a static list of all elements that match a CSS selector.

<!-- ----------------------------------------------------------- -->

2. How do you **create and insert a new element into the DOM**?

Answer:- At first we use the createElement() method to create a new element, and then we use the appendChild() method to insert that element into the DOM.

**Example**

const newElement = document.createElement("h1");

newElement.innerText = "Hi!" 

document.body.appendChild(newElement);

<!-- -------------------------------------------------------------- -->


3. What is **Event Bubbling** and how does it work?

Answer:- Event bubbling is the process where an event triggered on a child element automatically propagates upward through its parent and ancestor elements in the DOM until it reaches the root.

When a button is clicked inside a card,The browser first runs the event handler attached directly to the button (the element that was clicked).After the button’s handler runs, the event automatically propagates to its parent,The event then bubbles up to the parent’s parent (body), continues to (html), and finally reaches the (document).If those parent elements have event listeners for the same event (like click), they will also fire in order.


<!-- -------------------------------------------------------------- -->

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:-

**Event delegation** Event delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to each of its child elements.

**Usefulness** It’s useful for performance, dynamic content, and cleaner code.

<!-- --------------------------------------------------------------- -->

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault()**  preventDefault() stops the browser’s default action,like following a link or submitting a form.

**stopPropagation()** stopPropagation() stops the event from bubbling up to parent elements in the DOM.





