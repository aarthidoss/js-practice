/*(

//1. to generate a current time.
//2.to generate a normal clock and apply current time to clock.


//1. to generate a current time
function currentTime(){

    let currentTime = new Date();
    console.log(currentTime);

    // to get a Date
    //console.log('date'+currentTime.getDate());
     // to get a day
     //console.log('day'+currentTime.getDay());
      // to get a Month
    //console.log('month'+currentTime.getMonth()); 
    // to get a Year
    //console.log('year'+currentTime.getYear());
     // to get a Hours
     console.log('hours'+currentTime.getHours());
      // to get a Minutes
    console.log('minutes'+currentTime.getMinutes());
     // to get a Seconds
     console.log('seconds'+currentTime.getSeconds());

  //2.to generate a normal clock and apply current time to clock.

    hoursElement = document.getElementById('hours');
    minutesElement = document.getElementById('minutes');
    secondsElement = document.getElementById('seconds');

    hoursElement.innerHTML = currentTime.getHours();
    minutesElement.innerHTML = currentTime.getMinutes();
    secondsElement.innerHTML = currentTime.getSeconds();
};
   // to update every seconds
     setInterval(difference,1000); 
)*/

// To make a timer for given date

function difference(){
    let currentTime = new Date();
    let targetTime = new Date('jan 1,2022 11:00:00');

  let delta = Math.abs(targetTime - currentTime) / 1000;

  let days = Math.floor(delta / 86400);
  delta -= days * 86400;

  let  hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  let  minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  let seconds = Math.floor(delta % 60);

  //console.log(days,hours,minutes,seconds);

  daysEle = document.querySelector('.days');
   daysEle.innerHTML = days;
   document.querySelector('.hours').innerHTML = hours;
   document.querySelector('.minutes').innerHTML =minutes;
   document.querySelector('.seconds').innerHTML = seconds;
   // also use an id
}

difference()
// to update every seconds
setInterval(difference,1000);
