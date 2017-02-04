var mySample;

function init(){
  mySample = new Tone.Player("./samples/albloom.mp4").toMaster();
  console.log('sample loaded!');
}

function playSample(){
  mySample.start();
}

function changePlaybackRate(rate){
  mySample.playbackRate = rate;
}

function toggleAutoplay(){
  mySample.loop = !mySample.loop;
}



var isReverbConnected = false;

var myReverb = new Tone.Freeverb().toMaster();

function toggleReverb(){
  if(!isReverbConnected){
    mySample.connect(myReverb);
    isReverbConnected = true;
  }else{
    mySample.disconnect();
    mySample.toMaster();

    isReverbConnected = false;
  }
}


var isDelayConnected = false;
var myDelay = new Tone.PingPongDelay().toMaster();

function toggleDelay(){
  if(!isDelayConnected){
    mySample.connect(myDelay);
    isDelayConnected = true;
  }else{
    mySample.disconnect();
    mySample.toMaster();

    isDelayConnected = false;
  }
}

var params = {
    oscillator:{type:"triangle"},
    envelope:{
      attack: 0.0125,
      decay:0.025,
      sustain:0.5,
      release:1
    }
  };

var note = new Tone.Synth(params).toMaster();

function playNote(){

  note.triggerAttackRelease("C4", 0.25);
}

function playNoteRandom(){
  if(Math.random() > 0.25)
    note.triggerAttackRelease(500+Math.random()*1000, 0.25);
}

function playOtherNoteRandom(){
  if(Math.random() > 0.25)
    note.triggerAttackRelease(100+Math.random()*500, 0.25);
}

function repeatNote(){
  Tone.Transport.scheduleRepeat(function(time){
    playOtherNoteRandom();
  }, "0:2");
  Tone.Transport.scheduleRepeat(function(time){
  	playNoteRandom();
  }, "0:2");

  Tone.Transport.loop = true;
  Tone.Transport.start();
}

// TODO: figure out how we only play downbeat
function repeatOtherNote(){
  Tone.Transport.scheduleRepeat(function(time){
    playOtherNoteRandom();
  }, "0:2:2.5");
}

function stopTransport(){
  Tone.Transport.stop();
}

document.addEventListener("keypress", function(){
  note.triggerAttackRelease(500+Math.random()*1000, 0.25);
});
