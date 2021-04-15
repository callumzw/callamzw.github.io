localStorage.Background;
localStorage.Colour;
localStorage.Page;
localStorage.volBar= 0;
localStorage.drop = 0;
localStorage.mute = 0;
localStorage.Home;
localStorage.Back;
localStorage.Restart;
localStorage.Monitor;
localStorage.Music;
localStorage.Muted;


		// Macintosh
		function Mac(){
		localStorage.setItem('Colour', '#e5ffff');
		localStorage.setItem('Background', '#333319');
		localStorage.setItem('Home', "../images/homeMac.png");
		localStorage.setItem('Back', "../images/backMac.png");
		localStorage.setItem('Restart', "../images/restartMac.png");
		localStorage.setItem('Monitor', "../images/monitorMac.png");
		localStorage.setItem('Music', "../images/musicMac.png");
		localStorage.setItem('Muted', "../images/mutedMac.png");
		}

		// IBM 5151 (Green)
		function IBMGr(){
		localStorage.setItem('Colour', '#01eb5f');
		localStorage.setItem('Background', '#25342f');
		localStorage.setItem('Home', "../images/homeIBMGr.png");
		localStorage.setItem('Back', "../images/backIBMGr.png");
		localStorage.setItem('Restart', "../images/restartIBMGr.png");
		localStorage.setItem('Monitor', "../images/monitorIBMGr.png");
		localStorage.setItem('Music', "../images/musicIBMGr.png");
		localStorage.setItem('Muted', "../images/mutedIBMGr.png");
		}
	
		// IBM 8503 (Cream)
		function IBMCrm(){
		localStorage.setItem('Colour', '#ebe5ce');
		localStorage.setItem('Background', '#2e3037');
		localStorage.setItem('Home', "../images/homeIBMCrm.png");
		localStorage.setItem('Back', "../images/backIBMCrm.png");
		localStorage.setItem('Restart', "../images/restartIBMCrm.png");
		localStorage.setItem('Monitor', "../images/monitorIBMCrm.png");
		localStorage.setItem('Music', "../images/musicIBMCrm.png");
		localStorage.setItem('Muted', "../images/mutedIBMCrm.png");
		}

		// Commodore (Blue)
		function Comm(){
		document.body.style.backgroundColor = "black";
		localStorage.setItem('Colour', '#88d7de');
		localStorage.setItem('Background', '#40318e');;
		localStorage.setItem('Home', "../images/homeComm.png");
		localStorage.setItem('Back', "../images/backComm.png");
		localStorage.setItem('Restart', "../images/restartComm.png");
		localStorage.setItem('Monitor', "../images/monitorComm.png");
		localStorage.setItem('Music', "../images/musicComm.png");
		localStorage.setItem('Muted', "../images/mutedComm.png");
		}
	
		// Zenith (Yellow)
		function Zen(){
		localStorage.setItem('Colour', '#fdca55');
		localStorage.setItem('Background', '#3f291e');
		localStorage.setItem('Home', "../images/homeZen.png");
		localStorage.setItem('Back', "../images/backZen.png");
		localStorage.setItem('Restart', "../images/restartZen.png");
		localStorage.setItem('Monitor', "../images/monitorZen.png");
		localStorage.setItem('Music', "../images/musicZen.png");
		localStorage.setItem('Muted', "../images/mutedZen.png");
		};

		// Black & White
		function LCD(){
		localStorage.setItem('Colour', 'white');
		localStorage.setItem('Background', 'black');
		localStorage.setItem('Home', "../images/home.png");
		localStorage.setItem('Back', "../images/back.png");
		localStorage.setItem('Restart', "../images/restart.png");
		localStorage.setItem('Monitor', "../images/monitor.png");
		localStorage.setItem('Music', "../images/music.png");
		localStorage.setItem('Muted', "../images/muted.png");
		}
	
	

function setColour(){
	if (localStorage.Background == null)
	{
		Mac();
	}
	// Font and Background Colours
	document.body.style.backgroundColor = localStorage.Background;
	document.body.style.color = localStorage.Colour;
	//Icon Colours
	if (document.getElementById("monitor")){	
	document.getElementById("monitor").src = localStorage.Monitor;
	}
	if (document.getElementsByClassName("monitor")){
		x = document.getElementsByClassName("monitor")
		for (i = 0; i < x.length; i++) {
			x[i].src = localStorage.Monitor;
			}
		}
	if (document.getElementById("music")){
		document.getElementById("music").src = localStorage.Music;
		}
		
	if (document.getElementById("mute"))
		{
			document.getElementById("mute").src = localStorage.Muted;
		}

	if (document.getElementById("home")){
		document.getElementById("home").src = localStorage.Home;
	}
	if (document.getElementsByClassName("home")){
		x = document.getElementsByClassName("home")
		for (i = 0; i < x.length; i++) {
			x[i].src = localStorage.Home;
			}
		}
	if (document.getElementById("back")){
		document.getElementById("back").src = localStorage.Back;
	}
	if (document.getElementsByClassName("back")){
		x = document.getElementsByClassName("back")
		for (i = 0; i < x.length; i++) {
			x[i].src = localStorage.Back;
			}
		}
	if (document.getElementById("restart")){
		document.getElementById("restart").src = localStorage.Restart;
	}
	if (document.getElementById("box")){
		document.getElementById("box").style.borderColor = localStorage.Colour;
	}
	if (document.getElementsByTagName("a")){
		x = document.getElementsByTagName("a")
		for (i = 0; i < x.length; i++) {
			x[i].style.color = localStorage.Colour;
			}
		}
		if (document.getElementsByClassName("slider")){
			let root = document.documentElement;
			root.style.setProperty('--slider-thumb', localStorage.Colour);
		x = document.getElementsByClassName("slider")
		for (i = 0; i < x.length; i++) {
			x[i].style.color = localStorage.Colour;
			x[i].style.borderColor = localStorage.Colour;
			x[i].style.background = localStorage.Background;
			}
		}
	if (document.getElementsByClassName("choice")){
		x = document.getElementsByClassName("choice")
		for (i = 0; i < x.length; i++) {
			x[i].style.color = localStorage.Colour;
			}
		}
	if (document.getElementsByClassName("menu")){
		x = document.getElementsByClassName("menu")
		for (i = 0; i < x.length; i++) {
			x[i].style.color = localStorage.Colour;
			}
		}
}

function music(){
	var x = document.getElementById("audio");
	var slider = document.getElementById("range");
	x.volume = slider.value / 100 ;
	
		if (x.volume == 0)
		{
			document.getElementById("music").style.display="none";
			document.getElementById("mute").style.display="block";
		}
		else{
			document.getElementById("music").style.display="block";
			document.getElementById("mute").style.display="none";
		}
}


function volume(){
	document.getElementsByClassName("slider")[0].style.display="block";
	var n = localStorage.volBar;
	var x = document.getElementsByClassName("slider");
	if (n == 0){
		for (i = 0; i < x.length; i++) {
			document.getElementsByClassName("monitor-content")[0].style.display="none";
			localStorage.setItem('drop', 0);
			x[i].style.display = "block";
			}
			localStorage.setItem('volBar', 1);
			
	}
	else{
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			}
			localStorage.setItem('volBar', 0);
	}
	
}

function dropdown(){
	var n = localStorage.drop;
	var x = document.getElementsByClassName("monitor-content");
	if (n == 0){
		for (i = 0; i < x.length; i++) {
			if (document.getElementById("music")){
			document.getElementsByClassName("slider")[0].style.display="none";
			localStorage.setItem('volBar', 0);
			}
			x[i].style.display = "block";
			}
			localStorage.setItem('drop', 1);
	}
	else{
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			}
			localStorage.setItem('drop', 0);
	}

}
function back(){
	window.history.back();
}


function start(x){
	var m = document.getElementById("audio");
	var slider = document.getElementById("range");
	m.loop = true;
	m.volume = 0;
	m.play();
	switch (x)
	{
		case 0:
		m.volume = 0;
		break;
		
		case 1:
		m.volume = 0.5;
		slider.value = 50;
		break;
	}
	frontPage();
}

function frontPage(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> The Tale <br/> of <br/> Ruby Rod <br/>";
	document.getElementById('image').style.display= "none";
	document.getElementById('restart').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageOne()");
	document.getElementsByClassName('choice')[1].style.display= "none";
}

function pageOne(){
	document.getElementById('heading').innerHTML = "Epilogue";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('restart').style.display= null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').src= "../images/obra.png";
	document.getElementById("mainText").innerHTML = "Welcome To The Blackwall Sailor! You have just departed Kingston in search for the wreackage of the HMS Ruby.  Your Captian, Johnathon Hornblower, stands proudly upon the upper deck next to the Pilot, with his Quatermaster and First Mate behind him.";
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageTwo()");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementById('backward').setAttribute("onclick", "frontPage()");
}

function pageTwo(){
	document.getElementById('heading').innerHTML = "Epilogue";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "The sea is calm and the breeze is warm, the Bos'n approaches you and puts his arm around you";
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageThree()");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementById('backward').setAttribute("onclick", "pageOne()");
}

function pageThree(){
	document.getElementById('heading').innerHTML = "Chapter 1";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "Big ol kraken chomps ya friend";
	document.getElementsByClassName('choice')[0].innerHTML= "Go Up To Quarterdeck";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageFour()");
	document.getElementsByClassName('choice')[1].style.display= null;
	document.getElementsByClassName('choice')[1].innerHTML= "Explore the Deck";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "pageFive()");
	document.getElementById('backward').setAttribute("onclick", "pageTwo()");
}

	







