// Declare a "SerialPort" object
let serial;
let latestData = "waiting for data";  // you'll use this to write incoming data to the canvas

function setup() {
  distance1 = loadSound('speech-7.mp3');
  distance2 = loadSound('speech-10.mp3');
  distance3 = loadSound('speech-6.mp3');
  distance4 = loadSound('speech-8.mp3');

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
  //copy this from serial control app
  serial.open("/dev/tty.usbmodem14201");  
  serial.on('data', gotData); //callback function 
}


// There is data available to work with from the serial port
function gotData() {
  let currentString = serial.readLine();
  console.log(currentString);
  // read the incoming string
  //same as readStringUntil(‘\r\n’)
  if (currentString == '2' && !distance1.isPlaying()) {
   distance1.play();
  
  } else if (currentString == '3' && !distance2.isPlaying()) {
    distance2.play();
 
  } else if (currentString == '6' && !distance3.isPlaying()){
    distance3.play();
 
  } else if (currentString == '5' && !distance4.isPlaying()) {
    distance4.play();

  // } else if (!currentString) return;             
  // if the string is empty, do no more
  //!if not playing then play
  // if playing dont play 
}

  
}