//let's go

var sample1 = new Tone.GrainPlayer('samples/albloom.mp4');
var sample2 = new Tone.GrainPlayer('samples/albloom.mp4');

var panner1 = new Tone.Panner(-1).toMaster();
var panner2 = new Tone.Panner(1).toMaster();

function playSample(){
  sample1.connect(panner1);
  sample2.connect(panner2);

  sample1.loop = true;
  sample2.loop = true;

  sample1.playbackRate = 1.0;
  sample2.playbackRate = 1.01;

  sample1.start();
  sample2.start();
}

function adjustRate(value){
  sample1.playbackRate = value;
  sample2.playbackRate = value;
}

function adjustLoopStart(value){
  sample1.loopStart = value;
  sample2.loopStart = value;
}

function adjustLoopEnd(value){
  sample1.loopEnd = value;
  sample2.loopEnd = value;
}

var params = {
    oscillator:{type:"sine"},
    envelope:{
      attack: 1.5,
      decay:0.5,
      sustain:5,
      release:35
    },
    modulation:{
      type: "sine"
    },
    modulationEnvelope:{
      attack: 1.5,
      decay: 0.5,
      sustain: 5,
      release: 35
    }
  };

var reverb = new Tone.Freeverb().toMaster();
var filter = new Tone.Filter(300, "lowpass").connect(reverb);
var note = new Tone.FMSynth(params).connect(filter);

var good_notes = ["F3", "Ab3", "C4", "Db4", "Eb4", "F4", "Ab4"];

function playNote(){
  if(Math.random() < 0.45)
    note.triggerAttackRelease(good_notes[Math.floor(Math.random()*good_notes.length)], 0.25);
}

function adjustFrequency(value){
  filter.frequency.value = value;
}

var params2 = {
  oscillator:{
  type:"triangle"
  },
  envelope:{
  attack:0.001,
  decay:0.0,
  sustain:0.3,
  release:0.1
  }
};


var delay = new Tone.PingPongDelay("8n", 0.95).toMaster();
var gain = new Tone.Gain(0.1).connect(delay);
var note2 = new Tone.Synth().connect(gain);

function playSharpNote(){
  if(Math.random() < 0.85)
    note2.triggerAttackRelease(good_notes[Math.floor(Math.random()*good_notes.length)], 0.5);
}


function startPattern(){
  Tone.Transport.scheduleRepeat(function(){
    playSharpNote();
  }, "0:1:0");

  Tone.Transport.scheduleRepeat(function(){
    playNote();
  }, "0:2:0");

  Tone.Transport.start();
}
