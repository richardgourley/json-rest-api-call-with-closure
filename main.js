

//Here, we pass in a string to create an endpoint.
//Our function will return an inner function which will return a parsed JSON object...

var endPointPosts = "posts";
var endPointCategories = "categories"

//closure involves having an inner and outer function.
//outer function that takes a string parameter (in our case, posts or categories)
//inner function that provides api details and then opens XMLHttpRequest.
//returns the inner function (which returns a parsed Javascript object)
//these two variables 'remember' the environment they were called in.
//you can use these variables later in your program.  You can pass them to other functions!


