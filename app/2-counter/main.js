
let buttonElement = document.getElementById('button');
let displayElement = document.getElementById('display');
let token = 0;
 

buttonElement.addEventListener('click',function(){
   
    token = token+1;
   // console.log(token);
    displayElement.innerHTML = token;
});