console.log('Loaded!');


//change the text of the main-text div 

var element = document.getElementById('main-text');

element.innerHTML = 'Hello This Is New Html Text';

//moving the image

var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginLeft = '100px'; 
};