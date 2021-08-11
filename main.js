function preload()
{
    
}

function setup()
{
    canvas = createCanvas(450,350);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
    video.center();

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on("pose", getpose);
}
function loaded()
{
    console.log(ml5.version + "is loaded");
}
function getpose(results)
{
    console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
     
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
}
function draw()
{
    image(video, 0, 0, 450, 350);
}
function sing()
{
    sound.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline";
}
function stop_sing()
{
    sound.stop();
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline";
}
