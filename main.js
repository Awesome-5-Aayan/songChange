song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
RightWristY=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){

    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log('posenet is initialized');
    
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("left wrist X= "+ leftWristX + " Left Wrist Y= "+ leftWristY )
    console.log("right wrist X= "+ rightWristX + " Right Wrist Y= "+ rightWristY )
}
}