localStorage.Background;
localStorage.Colour;
localStorage.Page;
localStorage.Log;
localStorage.volBar= 0;
localStorage.drop = 0;
localStorage.openBag= 0;
localStorage.mute = 0;
// Buttons
localStorage.Home;
// localStorage.Back;
// localStorage.Restart;
localStorage.Monitor;
localStorage.Bag;
localStorage.Music;
localStorage.Muted;
// Items
localStorage.Sword;
localStorage.Gunpowder;
localStorage.Potato;
localStorage.Key;


		// Macintosh
		function Mac(){
		localStorage.setItem('Colour', '#e5ffff');
		localStorage.setItem('Background', '#333319');
		localStorage.setItem('Home', "../images/homeMac.png");
		localStorage.setItem('Back', "../images/backMac.png");
		localStorage.setItem('Restart', "../images/restartMac.png");
		localStorage.setItem('Monitor', "../images/monitorMac.png");
		localStorage.setItem('Bag', "../images/bagMac.png");
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
		localStorage.setItem('Bag', "../images/bagIBMGr.png");
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
		localStorage.setItem('Bag', "../images/bagIBMCrm.png");
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
		localStorage.setItem('Bag', "../images/bagComm.png");
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
		localStorage.setItem('Bag', "../images/bagZen.png");
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
		localStorage.setItem('Bag', "../images/bag.png");
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
	/*
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
	 */
	if (document.getElementById("bag")){
		document.getElementById("bag").src = localStorage.Bag;
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
	if (document.getElementsByClassName("SignIn")){
		x = document.getElementsByClassName("SignIn")
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = localStorage.Background;
			x[i].style.borderColor = localStorage.Colour;
		}
	}
}

function Email(){
			window.open('mailto:baboonisland.game@gmail.com')
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

function openBag() {
	var b = localStorage.openBag;
	var x = document.getElementsByClassName("bag-content");
	if (b == 0) {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "block";
		}
	}
	else {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
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
/*
function LogCheck(){
			if (localStorage.Log == null){localStorage.Log = 0;}
			if (localStorage.Log == 0)
			{
				document.getElementById("Log").innerHTML = "Log In";
				document.getElementById("Log").href = "Log In/Log In.html";
			}
			else if (localStorage.Log == 1)
			{
				document.getElementById("Log").innerHTML = "Log Out";
				document.getElementById("Log").href = "Log In/Logout.html";
			}
}


function LogIn(){
	localStorage.setItem("Log", 1);
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var obj = {username: user, password: pass};
	var userData = JSON.stringify(obj);
	localStorage.setItem("UserData", userData);


}
function Logout(){
	localStorage.setItem("Log", 0);
}
function Register(){
			var user = document.getElementById("username").value;
			var pass = document.getElementById("password").value;

}

 */

function Continue(){
			if (parseInt(localStorage.Page) == 0 || localStorage.Page == null){
				AudioSelect(1);
			}
			else {
				document.getElementById('heading').innerHTML = "</br>";
				document.getElementById('cover').innerHTML = "</br>";
				document.getElementById('image').style.display = "none";
				document.getElementById("mainText").innerHTML = "</br>";
				document.getElementsByClassName('choice')[0].style.display = null;
				document.getElementsByClassName('choice')[0].innerHTML = "Continue";
				document.getElementsByClassName('choice')[1].style.display = null;
				document.getElementsByClassName('choice')[0].setAttribute("onclick", "AudioSelect(0);");
				document.getElementsByClassName('choice')[1].innerHTML = "New Game";
				document.getElementsByClassName('choice')[1].setAttribute("onclick", "ConfirmNew();");
				document.getElementsByClassName('choice')[2].style.display = "none";
				document.getElementsByClassName('choice')[3].style.display = "none";
			}
}
function ConfirmNew(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = " Are You Sure?";
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "";
	document.getElementsByClassName('choice')[0].style.display = null;
	document.getElementsByClassName('choice')[0].innerHTML = "Yes";
	document.getElementsByClassName('choice')[1].style.display = null;
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "AudioSelect(1);");
	document.getElementsByClassName('choice')[1].innerHTML = "No";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "Continue();");
	document.getElementsByClassName('choice')[2].style.display = "none";
	document.getElementsByClassName('choice')[3].style.display = "none";

}
function AudioSelect(y){
	document.getElementById('heading').innerHTML = "</br>";
	document.getElementById('cover').innerHTML = "</br>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "</br>";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Audio";
	document.getElementsByClassName('choice')[1].style.display= null;
	document.getElementsByClassName('choice')[1].innerHTML= "No Audio";
	switch (y){
		case 0:
			document.getElementsByClassName('choice')[0].setAttribute("onclick", "start(1,0);");
			document.getElementsByClassName('choice')[1].setAttribute("onclick", "start(0,0);");
			break;
		case 1:
			document.getElementsByClassName('choice')[0].setAttribute("onclick", "start(1,1);");
			document.getElementsByClassName('choice')[1].setAttribute("onclick", "start(0,1);");
			break;
	}
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
}

function start(x,y){
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

	switch (y)
	{
		case 0: LoadPage(); break;
		case 1: frontPage(); break;
	}
}
function printActions(heading, num){
	document.getElementById('heading').innerHTML = heading+"</br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	localStorage.setItem("Page", num);
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Look";
	document.getElementsByClassName('choice')[1].style.display= null;
	document.getElementsByClassName('choice')[1].innerHTML= "Walk";
	document.getElementsByClassName('choice')[2].style.display= null;
	document.getElementsByClassName('choice')[2].innerHTML= "Pick Up";
	document.getElementsByClassName('choice')[3].style.display= null;
	document.getElementsByClassName('choice')[3].innerHTML= "Use";

}
function nullAction()
{
	var num = Math.floor(Math.random()* 5)
	switch (num) {
		case 0:document.getElementById("mainText").innerHTML = "I'm not sure what good that'll do"; break;
		case 1:document.getElementById("mainText").innerHTML = "Yeaaah.... probably not"; break;
		case 3:document.getElementById("mainText").innerHTML = "Why would I do that?"; break;
		case 4:document.getElementById("mainText").innerHTML = "That's not possible"; break;
	}
}

function LoadPage(){
	var x = parseInt(localStorage.Page);
	switch (x){
		case 0: frontPage(); break;
		case 1: pageOne(); break;
		case 2: pageTwo(); break;
		case 3: pageThree(); break;
		case 4: pageFour(); break;
		case 5: pageFive(); break;
		case 6: pageSix(); break;
		case 7: pageSeven(); break;
		case 8: pageEight(); break;
		case 9: pageNine(); break;
		default: frontPage(); break;
	}
}


function frontPage(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> The Mystery <br/> of <br/> Baboon Island <br/>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Play";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageOne();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 0);
}

function pageOne(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "Welcome To The Blackwall Sailor! You have just departed Kingston in search for the wreckage of the HMS Ruby.  Your Captain, Benjamin Hornblower, stands proudly upon the upper deck next to the Pilot, with his Quartermaster and First Mate behind him.";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageTwo();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 1);
}

function pageTwo(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "The sea is calm and the breeze is warm, the Bos'n approaches you and puts his arm around you. He gives you a warm greeting and tells you to report to the Head Cook";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageThree();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 2);
}

function pageThree(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "You steady yourself and take in your surroundings, you wonder whether to explore first or meet with the Head Cook first";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Explore Quarterdeck";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageSix();");
	document.getElementsByClassName('choice')[1].style.display= null;
	document.getElementsByClassName('choice')[1].innerHTML= "Explore Deck";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "pageFive();");
	document.getElementsByClassName('choice')[2].style.display= null;
	document.getElementsByClassName('choice')[2].innerHTML= "Explore Below Deck";
	document.getElementsByClassName('choice')[2].setAttribute("onclick", "pageFour();");
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 3);
}
function pageFour(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "You go below deck and find its as busy as the top deck but twice as cramped, the Head Cook pops his head from the lower level and calls you over";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageNine();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 4);
}
function pageFive(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "The top deck is busy with seamen moving supplies below and tightening ropes above";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageFour();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 5);
}

function pageSix(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "The Quarterdeck is as busy as the top deck, but as you stand gazing the Bos'n spots you and shouts:</br> Oi boy didn I tell you to see the Cook?";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Run Below Deck";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageSeven();");
	document.getElementsByClassName('choice')[1].style.display= null;
	document.getElementsByClassName('choice')[1].innerHTML= "Rudely Brush off Bos'n";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "pageEight();");
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 6);
}

function pageSeven(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "Sorry Sir, you say as you run down below";
	document.getElementsByClassName('choice')[0].style.display= null;
	document.getElementsByClassName('choice')[0].innerHTML= "Next";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "pageFour();");
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 7);
}

function pageEight(){
	document.getElementById('heading').innerHTML = "Chapter 1 </br>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "Awh fuck off pal, I'll get there when I get there </br> You focking what mate? </br>" +
		" The Bos'n socks you in the face and you pass out, you wake up in the harbour with the ship away in the distant </br> This is the end of your adventure, my friend. ";
	document.getElementsByClassName('choice')[0].style.display = "none";
	document.getElementsByClassName('choice')[1].style.display= "none";
	document.getElementsByClassName('choice')[2].style.display= "none";
	document.getElementsByClassName('choice')[3].style.display= "none";
	localStorage.setItem("Page", 8);
}

	







