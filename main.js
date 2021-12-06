song="";
song2="";
leftx=0;
lefty=0;
rightx=0;
righty=0;

function preload() {
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(600, 500);
    canvas.position(470, 200);
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        leftx=results[0].pose.leftWrist.x;
        console.log("Left Wrist x= "+leftx);
        lefty=results[0].pose.leftWrist.y;
        console.log("Left Wrist y= "+lefty);

        rightx=results[0].pose.rightWrist.x;
        console.log("Right Wrist x= "+rightx);
        righty=results[0].pose.rightWrist.y;
        console.log("Right Wrist y= "+righty);
    }
}

function modelLoaded() {
    console.log("PoseNet Is Loaded!");
}

function draw() {
    image(video, 0, 0, 600, 500);
}