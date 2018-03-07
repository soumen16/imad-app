
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


