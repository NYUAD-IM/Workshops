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

function changePlaybackStart(start){
  mySample.loopStart = start;
}

function changePlaybackEnd(start){
  mySample.loopEnd = start;
}

function toggleAutoplay(){
  mySample.loop = !mySample.loop;
}



var isReverbConnected = false;
var myReverb = new Tone.Freeverb().toMaster();

function toggleReverb(){
  mySample.disconnect();
  if(!isReverbConnected){
    mySample.connect(myReverb);
    isReverbConnected = true;
  }else{
    mySample.toMaster();
    isReverbConnected = false;
  }
}


var isDelayConnected = false;
var myDelay = new Tone.PingPongDelay().toMaster();

function toggleDelay(){
  note.disconnect();
  if(!isDelayConnected){
    mySample.connect(myDelay);
    isDelayConnected = true;
  }else{
    mySample.toMaster();
    isDelayConnected = false;
  }
}


var chord = ["F3", "Ab3", "C4", "Db4", "Eb4", "F4", "Ab4"];

var params = {
    oscillator:{type:"sine"},
    envelope:{
      attack: 0.5,
      decay:0.5,
      sustain:3,
      release:15
    },
    modulation:{
      type: "sine"
    },
    modulationEnvelope:{
      attack: 2,
      decay: 0.5,
      sustain: 3,
      release: 15
    }
  };

var note = new Tone.FMSynth(params).toMaster();

function playNote(){
  note.triggerAttackRelease(chord[Math.floor(Math.random()*chord.length)], 0.25);
}

function playNoteRandom(){
  if(Math.random() > 0.25)
    note.triggerAttackRelease(chord[Math.floor(Math.random()*chord.length)], 0.25);
}

function playOtherNoteRandom(){
  if(Math.random() > 0.25)
    note.triggerAttackRelease(100+Math.random()*500, 0.25);
}

Tone.Transport.bpm.value = 60;

function repeatNote(){
  Tone.Transport.scheduleRepeat(function(time){
    playNoteRandom();
  }, "1m");

  Tone.Transport.loop = true;
  Tone.Transport.start();
}

function repeatOtherNote(){
  Tone.Transport.scheduleRepeat(function(time){
    note.triggerAttackRelease(chord[Math.floor(Math.random()*chord.length)], '8n', '+4n');
  }, "1m");
}

function stopTransport(){
  Tone.Transport.stop();
}

var myFilter = new Tone.Filter(200, "lowpass", -48).toMaster();

function toggleFilter(){
  note.disconnect();
  note.connect(myFilter);
}

function changeFilterBand(value){
  myFilter.frequency.value = value;
}

document.addEventListener("keypress", function(){
  note.triggerAttackRelease(500+Math.random()*1000, 0.25);
});
