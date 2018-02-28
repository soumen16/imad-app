console.log('Loaded!');


//change the text of the main-text div 

var element = document.getElementById('main-text');

element.innerHTML = 'Hello This Is New Html Text';

//moving the image

var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginLeft = '100px'; 
};


// counter  code


var button = document.getElementById('counter');

var counter = 0;

button.onclick = function() {
    //  Make a  request to the counter end point
    
    // Capture the response and store it in a variable
    
    // render the variable in the correct span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    };

