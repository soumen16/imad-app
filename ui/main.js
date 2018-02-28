//console.log('Loaded!');


//change the text of the main-text div 

//var element = document.getElementById('main-text');

//element.innerHTML = 'Hello This Is New Html Text';

//moving the image

//var img = document.getElementById('madi');
//img.onclick = function () {
//  img.style.marginLeft = '100px'; 
//};


// counter  code


var button = document.getElementById('counter');



button.onclick = function() {
    //  Make a  request to the counter end point
    //creating a request Object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            
            //Take Some Action
        
            if(request.status === 200) {
                var counter = requset.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
            }
        
        }
        // not done yet
    };
    
    // Makr  the Request
    requset.open('GET', 'http://soumenbaidya123.imad.hasura-app.io/counter', true);
    request.send(null);
    
    };
    
    
    // submit name
    
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // make a request to the server and the name
    
    //capture a list of names and render it as a list
    var names =['name1','name2','name3'];
    var list ='';
    for (i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '<li>';
        
    }
    
    var ul = document.getElementById('namelist');
    ui.innerHTML = list;
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

