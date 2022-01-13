let polySynth;
const vel = 0.1;
let soundLoop;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('salmon');
  polySynth = new p5.PolySynth();
  soundLoop = new p5.SoundLoop(playsequence, 8);
  soundLoop.pause();
  userStartAudio();
}

function draw() {
  background('salmon');
  text(`CHORDS: ${soundLoop.iterations}`, width/2, height/2);

}

function playsequence(timeFromNow) {
  playInvDMinor(0, 2);
  playAMinor(2, 2);
  playFMajor(4, 2)
  playGMajor(6, 2)
}

function keyPressed() {
  if (key === '1') {
    playInvDMinor(0, 2)
  }
  if (key === '2') {
    playAMinor(0, 2)
  }
  if (key === '3') {
    playFMajor(0, 2)
  }
  if (key === '4') {
    playGMajor(0, 2)
  }
  if (key === '5') {
    if (soundLoop.isPlaying) {
      soundLoop.stop();
    } else {
      // start the loop
      soundLoop.start();
    }
  }

}

function playInvDMinor(startTime, duration = 2) {

  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('D4', vel, startTime, duration);
  polySynth.play('F4', vel, startTime, duration);
}
function playAMinor(startTime, duration = 2) {
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('C4', vel, startTime, duration);
  polySynth.play('E4', vel, startTime, duration);
}
function playFMajor(startTime, duration = 2) {
  polySynth.play('F4', vel, startTime, duration);
  polySynth.play('A4', vel, startTime, duration);
  polySynth.play('C4', vel, startTime, duration);
}
function playGMajor(startTime, duration = 2) {
  polySynth.play('B4', vel, startTime, duration);
  polySynth.play('D4', vel, startTime, duration);
  polySynth.play('G4', vel, startTime, duration);
}