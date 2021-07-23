song = "";
music = "";


function preload(){
	song = loadSound("music.mp3");
    music = loadSound("Kristen Bell, Idina Menzel - For the First Time in Forever (From FrozenSing-Along).mp3");
}

function setup(){
	canvas = createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

}

function draw(){
	image(video, 0, 0, 600, 500);
}

function play(){
	song.play();
 music.play();
}
