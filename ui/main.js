
// counter  code


var button = document.getElementById('counter');
var counter = 0;


button.onclick = function () {
    
    // Make a Request to a counter endpoint
    
    
    // capture the responce and store it in a variable
    
    
    //Render the variable in the correct span
    
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
    
};


