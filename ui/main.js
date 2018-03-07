
// counter  code


var button = document.getElementById('counter');



button.onclick = function () {
    
    // Create a Request object
    
    var request = new XMLHttpRequest();
    
    
    // capture the responce and store it in a variable
    
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
        // Take somen action
            if(request.status === 200) {
                var counter = requset.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString(); 
            
            }
        }
         //Not Done Yet
        
    };  
     
    // make the Request
    requset.open('GET', 'http://soumenbaidya123.imad.hasura-app.io/counter', true);
    request.send(null);
    
};


// Submit Name


var nameInput = document.getElementById('name');

var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {

    
    // make a request to the server and the name
    
    //capture a list of names and render it as a list
    
    var names =['name1','name2','name3', 'name4'];
    var list ='';
    for (i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '<li>';

}


    var ul = document.getElementById('namelist');
    ui.innerHTML = list;
};
 















