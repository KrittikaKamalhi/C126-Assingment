righthandWristX = 0;
righthandWristY = 0;

lefthandWristX = 0;
lefthandWristY = 0;

song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("blackpink.mp3");
    song2= loadSound("bts.mp3");
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}

function modelLoaded(){
    console.log("PoseNet model had been intialized ");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        
        righthandWristX = results[0].pose.rightWrist.x;
        righthandWristY = results[0].pose.rightWrist.y;

        lefthandWristX = results[0].pose.leftWrist.x;
        lefthandWristY = results[0].pose.leftWrist.y;

        console.log("Right Wrist X = " + righthandWristX);
        console.log("Right Wrist Y = " + righthandWristY);

        console.log("Left Wrist X = " + lefthandWristX);
        console.log("Left Wrist Y = " + lefthandWristY);
    }
}

function draw(){
    image(video,0,0,500,450);
}

