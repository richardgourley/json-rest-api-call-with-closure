
//This is an outer function which contains an inner function.
function outer(category){
    
    function inner(published){
        //Inside this inner function...
        //we assign a new variable to a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
        //We set the request to 'GET'
        //You can change DATA.JSON to an API endpoint as required.
        xhr.open('GET','data.json', true);
        xhr.responseType = 'text';
        xhr.send();
        
        //Here we use the onload function for program logic.
        xhr.onload = function(){
            //We check the connection is successful
            if(xhr.status == 200){
                //We parse JSON to a Javascript object
                var myObj = JSON.parse(xhr.responseText);
                //We perform login on the array of objects returned and parsed as 'myObj'
                for(i=0; i<myObj.length; i++){
                    if(myObj[i].category == category && myObj[i].published == published){
                        console.log(myObj[i]);
                    }
                }
            }
            else{
                console.log("Sorry, there was a problem.");
            }
        }
    }
    return inner;
}

//These variables 'remember' the environment they were created in.
var wordpressCategory = outer("wordpress");
var javaCategory = outer("java");
var javascriptCategory = outer("javascript");

//When we call the function assigned to these variables we access
//the INNER function!
javaCategory(false);
javascriptCategory(false);
wordpressCategory(true);

//You can pass variables, which have been assigned functions with closure, around your program!
//It's very powerful!










