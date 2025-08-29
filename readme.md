Answer the following questions clearly:

1. What is the difference between getElementById,  getElementsByClassName, and querySelector / querySelectorAll?

Ans: 

Difference by definition:

getElementById => Selects the html document having the selected ID.

getElementsByClassName => Selects all of the html documents containing the selected class name.

querySelector => Provides the first element of selected id, class, tag, etc.

querySelectorAll => Provide the all list of inner childs matches as querySelector before.


2. How do you create and insert a new element into the DOM?

Ans: 

I can create using the document.createElement function. Then I need to insert it into the selected DOM using the function appendChild, prepend, etc. functions as I need.

3. What is Event Bubbling and how does it work?

Ans:

When any target is selected, events are being actioned from child to parent continuously. It is called Event  Bubbling. 

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
 
To handle on multiple elements it is called Event Delegation. It is useful to handle easily and better performance of browser. 

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: 

preventDefault() prevents the browsers default behaviours and the stopPropagation() controls the behavior of Event Bubbling.
