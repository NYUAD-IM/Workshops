// this sketch uses an application called syphon to send the graphic output
// of the processing window to any other application on that computer
// using a software called Syphon

// here we import the library
import codeanticode.syphon.*;

// the PGraphics object is where we will draw our sketch, not directly on the canvas
PGraphics imageToSend;

// the syphon object which will send our frames out
SyphonServer server;

void settings(){
  size(800, 600, P3D);
  PJOGL.profile=1;
}

void setup(){
  // we initialize the PGraphics object, just like a canvas
  imageToSend = createGraphics(800, 600, P3D);
  
  // we create our server, which will be discoverable by other applications (Max/MSP, VDMX, MadMapper, Isadora, etc.)
  // under the name "Processing Syphon", as indicated by the second argument
  server = new SyphonServer(this, "Processing Syphon");
}

void draw(){
  
  //this is where we do all of our drawing. - a 3D rotating sphere
  imageToSend.beginDraw();
  imageToSend.background(255);
  imageToSend.lights();
  imageToSend.translate(width*0.5, height*0.5);
  imageToSend.rotateX(millis()*0.001);
  imageToSend.sphere(100);
  imageToSend.endDraw();
  
  // once we've drawn everything to the PGraphics object, we send that object
  // out into the world through our syphon Server object
  server.sendImage(imageToSend);
}