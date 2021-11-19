/* 
1.  trigger the event when user clicks the button.
2.  create  function to generate a random color.
3.  apply generate random color to body tag or background.
*/

//   1. trigger the event when user clicks the button.
let clickButton = document.getElementById('color-button');
let bodyTag = document.getElementById('body-tag');
 
  //console.log(clickButton);

clickButton.addEventListener('click',function(){
      // console.log(getRandomcolors());
      //3.  apply generate random color to body tag or background.
    bodyTag.style.backgroundColor = getRandomcolors();
});

//2.  create  function to generate a random color.

//from google to get a random numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get random numbers 0 to 255 for red,green,blue

function getRandomcolors(){
    let red,green,blue,rgbformat;

    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);

    //console.log(red,green,blue);

    //by format rgb(value,value,value) 

  rgbformat= 'rgb(' + red + ' ' + green + ' ' + blue +')';
  return rgbformat ;
}


  
       
