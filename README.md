JSON REST API CALL WITH CLOSURE

This is an example for Javascript intermediate level students on how to create a get request and get information from a JSON file.

You can replace the JSON file (data.json) in the example with an API endpoint of your own.  An example of an endpoint could be yourwebsite.com/api/v1/posts or something similar.

The JSON file has data to represent typical objects retreived from content management systems such as Wordpress or Drupal. In our example we retrieve data about blog posts, with a title, category and a boolean for published or unpublished - true or false.

We have also added an example of closure.  In understanding closure, the key thing to understand is at what point we call the INNER and OUTER methods of a function.

CLOSURE IN ACTION

The two key lines, using closure in the example, which demonstrate when the inner() and outer() functions are called are:

- OUTER function = 
var wordpressCategory = outer("wordpress");
   * This sets the variable above to always have "wordpress" as it's parameter on the outer function.

- The INNER function =
wordpressCategory(true);
   * This is closure in action.  We can modify the parameter above to false as needed and the variable above will pass in 'wordpress' to the outer function and true or false to the inner function.

- NOTE:  Closure is not exclusive to XMLHttpRequests!  It can be used in many programming situations! The best way to understand closure is to practice using it as often as possible.

Take a look at some other examples of closure with repositories I have which give more examples of closure in action.

SKILLS COVERED
- JSON
- XMLHttpRequest()
- Closure