song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
RightWristY=0;
scoreLeftWrist=0;
song1_status="";
song2_status="";
scoreRightWrist="";
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
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
     fill("#87CEEB");
    stroke("#87CEEB");

    console.log('Score Left Wrist = ' + scoreLeftWrist);
    if (scoreLeftWrist>0.002) {
       circle(leftWristX, leftWristY, 20);
        song1.stop();
        if(song1_status==false){
            
        song2.play();
        document.getElementById("Song").innerHTML="Playing - Peter Pan";
        }
    }
    }
    console.log('Score Right Wrist = ' + scoreRightWrist);
    if (scoreRightWrist>0.002) {
       circle(RightWristX, RightWristY, 20);
        song2.stop();
        if(song2_status==false){
            
        song1.play();
        document.getElementById("Song").innerHTML="Playing - Harry Potter";
        }
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
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("left wrist X= "+ leftWristX + " Left Wrist Y= "+ leftWristY );
    console.log("right wrist X= "+ rightWristX + " Right Wrist Y= "+ rightWristY );
}
}