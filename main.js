video="";
status="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
    }
function setup(){
    canvas=createCanvas(400,325);
    canvas.center();
}
function draw(){
    image(video,0,0,400,320);
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelloaded(){
 console.log("modelloaded");
 status=true;
 video.loop();
 video.speed(1);
 video.volume(0);
}