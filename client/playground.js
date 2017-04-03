//playground.js

maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
maxim7 = new Maxim();
maxim8 = new Maxim();

player1 = maxim1.loadFile("drums1.wav");
player1.setLooping(true);
player2 = maxim2.loadFile("bassline.wav");
player2.setLooping(true);
player3 = maxim3.loadFile("cymbal1.wav");
player3.setLooping(true);
player4 = maxim4.loadFile("arp.wav");
player4.setLooping(true);
player5 = maxim5.loadFile("hihat2.wav");
player5.setLooping(true);
player6 = maxim6.loadFile("snaredrum1.wav");
player6.setLooping(true);
player7 = maxim7.loadFile("bassline32.wav");
player7.setLooping(true);
player8 = maxim8.loadFile("bassdrum1.wav");
player8.setLooping(true);

playDrums = function(){
	player1.volume(1);
}

stopDrums = function(){
	player1.volume(0);
}

playBass = function(){
	player2.volume(1);
}

stopBass = function(){
	player2.volume(0);
}

playCymbal = function(){
	player3.volume(1);
}

stopCymbal = function(){
	player3.volume(0);
}

playArp = function(){
	player4.volume(1);
}

stopArp = function(){
	player4.volume(0);
}

playHihat = function(){
	player5.volume(1);
}

stopHihat = function(){
	player5.volume(0);
}

playSnaredrum = function(){
	player6.volume(1);
}

stopSnaredrum = function(){
	player6.volume(0);
}

playBassline32 = function(){
	player7.volume(1);
}

stopBassline32 = function(){
	player7.volume(0);
}

playBassdrum = function(){
	player8.volume(1);
}

stopBassdrum = function(){
	player8.volume(0);
}

playAll = function() {

	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
	player6.play();
	player7.play();
	player8.play();
	
	
}
stopAll = function() {

	player1.stop();
	player2.stop();
	player3.stop();
	player4.stop();
	player5.stop();
	player6.stop();
	player7.stop();
	player8.stop();
	
	
}
setSpeed = function(speed) {

	player1.speed(speed);
	player2.speed(speed);
	player3.speed(speed);
	player4.speed(speed);
	player5.speed(speed);
	player6.speed(speed);
	player7.speed(speed);
	player8.speed(speed);
}


