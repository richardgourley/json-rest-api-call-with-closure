JSON REST API CALL WITH CLOSURE

This is an example for Javascript intermediate level students on how to create a get request and get information from a JSON file.

You can replace the JSON file in the example with an API endpoint of your own.  An example of an endpoint could be www.yourwebsite.com/api/posts or something similar.

In this example we are using a simple JSON file instead of an actual API endpoint.

The JSON file has data to represent typical objects retreived from Wordpress or Drupal such as blog posts, with a title, category and a boolean for published or unplublished - true or false.

We have also added an example of closure.  In understanding closure, the key thing to understand at what point we call the INNER and OUTER method of a function.

CLOSURE IN ACTION

The two key lines are as follows in demonstrating when the inner() and outer() functions are called:

- OUTER function = 
var wordpressCategory = outer("wordpress");

- INNER function called later on but 'remembers' the inner function! =
wordpressCategory(true);

- NOTE:  Closure is not exclusive to XMLHttpRequests!  It can be used in many programming situations!  Enjoy!

SKILLS COVERED
- JSON
- XMLHttpRequest()
- Closure