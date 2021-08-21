function preload()
{
    Whales = loadSound("song5.mp3");
    Memory = loadSound("song1.mp3");
    SkyHigh = loadSound("song2.mp3");
    HarryPotter = loadSound("song3.mp3");
    FireFly = loadSound("song4.mp3");
}
time="";
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";

Song = "";
song_play = "";
score="";
function setup()
{
    canvas = createCanvas(450,450);
    canvas.center;
    video = createCapture(VIDEO);
    canvas.center();
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

    score = results[0].pose.keypoints[9].score;
}
function draw()
{
    image(video, 0, 0, 450, 450);
    console.log("leftWristY = " +leftWristY)
    if(time == "time"){
    setTimeout(function(){
        setTimeout(function(){
            tint("orange");
         },500);
         setTimeout(function(){
            tint("pink");
         },1000);
         setTimeout(function(){
            tint("grey");
         },1500);
        tint("cyan");
    },2000);
        }
        else
        {
            tint("white");
        }
        if(song_play == "play")
        {
        if(score > 0)
        {
        if(leftWristY <= 22 + 440)
        {
            Whales.stop();
            FireFly.stop();
            SkyHigh.stop();
            HarryPotter.stop();
            Song = Memory;
            Song.play();
            document.getElementById("song").innerHTML ="Memory";
            console.log(Song);
        }
        else if(leftWristY <= 44 + 440)
        {
            Memory.stop();
            FireFly.stop();
            SkyHigh.stop();
            HarryPotter.stop();
            Song = Whales;
            Song.play();
            document.getElementById("song").innerHTML ="Whales";
            console.log(Song);
        }
        else if(leftWristY <= 66 + 440)
        {
            Whales.stop();
            Memory.stop();
            SkyHigh.stop();
            HarryPotter.stop();
            Song = FireFly;
            Song.play();
            document.getElementById("song").innerHTML ="FireFly";
            console.log(Song);
        }
        else if(leftWristY <= 88 + 440)
        {
            Whales.stop();
            FireFly.stop();
            Memory.stop();
            HarryPotter.stop();
            Song = SkyHigh;
            Song.play();
            document.getElementById("song").innerHTML ="SkyHigh";
            console.log(Song);
        }
        else if(leftWristY > 88 + 440)
        {
            Whales.stop();
            FireFly.stop();
            SkyHigh.stop();
            Memory.stop();
            Song = HarryPotter;
            Song.play();
            document.getElementById("song").innerHTML ="HarryPotter";
            console.log(Song);
        }
        }
        else
        {
            window.alert("Show Your Left Wrist inside the live Video or Try Reloading the page")
        }
        }
        else
        {
            HarryPotter.stop();
            FireFly.stop();
            Memory.stop();
            Whales.stop();
            SkyHigh.stop();
        }
    
}
function play()
{
    song_play = "play";
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline";
}
function stop_sing()
{
    song_play = "stop";
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline";
}
function disco()
{
    if(time=="")
    {
    time = "time";
    }
    else if(time=="time")
    {
        time="";
    }
}

