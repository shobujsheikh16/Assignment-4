1. Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: These are different ways to find and select elements in an HTML document.
           getElementById: This is the most direct way to grab a single element using its unique ID. It’s very fast and efficient.
           getElementsByClassName: This is used to select a group of elements that share the same class name. It returns an "HTMLCollection," which is a live list of elements.
           querySelector: This is the most flexible one because it uses CSS-style selectors (like .my-class or #my-id > p). It only returns the first match it finds. If you want all matching elements,you use querySelectorAll, which returns a NodeList.




2. Question: How do you create and insert a new element into the DOM?
   Answer: It’s usually a three-step process in vanilla JavaScript:
           Step 1 (Create): Use document.createElement('tagName') to make the element in memory.example: const myBox = document.createElement('div');
           Step 2 (Modify): Add some content or styles to it, like myBox.textContent = "Hello!"; or myBox.classList.add('active');
           Step 3 (Insert): Finally, place it in the document using appendChild() or prepend() on a parent element so it actually shows up on the page.




3. Question: What is Event Bubbling? And how does it work?
   Answer: Event Bubbling is the way an event (like a click) travels through the DOM. When you click an element that is inside 
           another element, the event doesn't just stay there.
           How it works: It starts at the specific target element you clicked and then "bubbles up" to its parent, then the grandparent, and so on, all the way up to the document and window.
           It’s like a bubble rising from the bottom of a pool to the surface.




4. Question: What is meant by Event Delegation? Why is it needed?
   Answer: When we have many child elements (such as many li in a list), then instead of setting a separate click event on each 
           one,setting a single event listener on their main parent or 'father' element
           is called event delegation.
           This is needed because: Even if a new item is added later, it works automatically, you don't have to write separate code.



   
5. Question: What is the difference between preventDefault() and stopPropagation() methods?
   Answer: They both "stop" something, but they stop different things:
          (I) preventDefault(): This stops some default actions of the browser. For example, it is needed to stop the page from  refreshing when clicking on a link or submitting a form.
          (II)stopPropagation(): This stops event bubbling. That is, if you want the event to not reach its parent element when you click on a button, then you need to use it.
