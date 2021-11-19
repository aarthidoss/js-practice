//trigger the event when user clicks the button

playbtn= document.getElementById('play');
pausebtn = document.getElementById('pause');
volumebtn = document.getElementById('volume');
volumeSlider = document.getElementById('volume-slider');
mutebtn= document.getElementById('mute');
unmutebtn = document.getElementById('unmute');
forwardbtn= document.getElementById('forward');
backwardbtn= document.getElementById('backward');
downloadbtn= document.getElementById('download');
fullScreenbtn= document.getElementById('fullscreen');
qualitybtn= document.getElementById('quality');
video= document.getElementById('video');

playbtn.addEventListener('click',function(){
    //console.log('play');
     video.play();
});

pausebtn.addEventListener('click',function(){
    //console.log('pause');
    video.pause();
});

volumebtn.addEventListener('click',function(){
    // give the slider value and update volume
     volumeInput = volumeSlider.value/100;
     //the slider value bet 0 to 1 so div by 100
     //console.log(volumeInput);
     //apply to video
     video.volume = volumeInput;
});


mutebtn.addEventListener('click',function(){
    console.log('mute');
    video.muted = true;
});


unmutebtn.addEventListener('click',function(){
    console.log('unmute');
    video.muted = false;
});

forwardbtn.addEventListener('click',function(){
    //1: to find current time
  let  ct = video.currentTime,
    //2: forward 10 sec
    cTime = ct + 10;
    //3: apply to video
    video.currentTime = cTime;
});

backwardbtn.addEventListener('click',function(){
    //1: to find current time
   let ct = video.currentTime,
    //2: forward 10 sec
    cTime = ct - 10;
    //3: apply to video
    video.currentTime = cTime;
});

downloadbtn.addEventListener('click',function(){
    console.log('Pause');
    
  //video.location.href = '"https://www.youtube.com/embed/tgbNymZ7vqY"'; 
//<embed width="420" height="315"
    //src="https://www.youtube.com/embed/tgbNymZ7vqY"></embed>
    
});

qualitybtn.addEventListener('change',function(){
  //1 : TO GET THE SELECT PATH
  let  targetoption = this.value;
     ctime =  video.currentTime
  // 2: CHANGE SRC PATH
   video.setAttribute('src',targetoption);
    // 3: CHANGE CURRENT TIME
   video.currentTime = ctime ;
    video.play()
});
fullScreenbtn.addEventListener('click',function(){
  // fullscreen 
  video.requestFullscreen();
  video.play()
});
