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
localStorage.Monitor;
localStorage.Bag;
localStorage.Music;
localStorage.Muted;
// Items
localStorage.Sword;
localStorage.Gunpowder;
localStorage.Flower;
localStorage.Potato;
localStorage.BoiledPotato;
localStorage.Fish;
localStorage.Key;
// Checks
localStorage.Fort;
localStorage.Manor;
localStorage.Drunkard;
localStorage.Red;
localStorage.Pirate;
localStorage.Cook;
localStorage.Vanguard;
localStorage.Gunner;


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

function inventory(){
			if (localStorage.Sword == 1) {
				document.getElementsByClassName("item")[0].innerText = "Sword";
			} else {
				document.getElementsByClassName("item")[0].innerText = "_________";
			}
			if (localStorage.Gunpowder == 1) {
				document.getElementsByClassName("item")[1].innerText = "Gunpowder";
			} else {
				document.getElementsByClassName("item")[1].innerText = "_________";
			}
			if (localStorage.Potato == 1) {
				document.getElementsByClassName("item")[2].innerText = "Potato";
			}
			else if (localStorage.BoiledPotato == 1) {
				document.getElementsByClassName("item")[2].innerText = "Cooked Potato";
			}
			else {
				document.getElementsByClassName("item")[2].innerText = "_________";
			}
			if (localStorage.Flower == 1) {
				document.getElementsByClassName("item")[3].innerText = "Flower";
			} else {
				document.getElementsByClassName("item")[3].innerText = "_________";
			}
}

function openBag() {
			inventory();
	var b = localStorage.openBag;
	var x = document.getElementsByClassName("bag-content");
	if (b == 0) {
		document.getElementsByClassName("monitor-content")[0].style.display="none";
		localStorage.setItem('drop', 0);
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "block";
		}
		localStorage.setItem('openBag', 1);
	}
	else {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		localStorage.setItem('openBag', 0);
	}
}

function dropdown(){
	var n = localStorage.drop;
	var x = document.getElementsByClassName("monitor-content");
	if (n == 0){
		for (i = 0; i < x.length; i++) {
			if (document.getElementById("bag")){
			document.getElementsByClassName("bag-content")[0].style.display="none";
			localStorage.setItem('openBag', 0);
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

function Next(){
			var x;
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}
function Choice(){
	var x;
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}
function Navigation(){
	var x;
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}
function Actions(){
	var x;
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}

function Interact(){
	var x;
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}
function Dialog(){
	var x;
	x = document.getElementsByClassName('Navigation');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Next');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Actions');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Choice');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementsByClassName('Dialog');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}

function Continue(){
			if (parseInt(localStorage.Page) == 0 || localStorage.Page == null){
				AudioSelect(1);
			}
			else {
				document.getElementById('heading').innerHTML = "</br>";
				document.getElementById('cover').innerHTML = "</br>";
				document.getElementById('image').style.display = "none";
				document.getElementById("mainText").innerHTML = "</br>";
				Choice();
				document.getElementsByClassName('choice')[8].innerHTML = "Continue";
				document.getElementsByClassName('choice')[8].setAttribute("onclick", "AudioSelect(0);");
				document.getElementsByClassName('choice')[9].innerHTML = "New Game";
				document.getElementsByClassName('choice')[9].setAttribute("onclick", "AudioSelect(1);");
			}
}
function ConfirmNew(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "Are You Sure?";
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "";
	Choice();
	document.getElementsByClassName('choice')[8].innerHTML = "Yes";
	document.getElementsByClassName('choice')[8].setAttribute("onclick", "AudioSelect(1);");
	document.getElementsByClassName('choice')[9].innerHTML = "No";
	document.getElementsByClassName('choice')[9].setAttribute("onclick", "Continue();");


}
function AudioSelect(y){
	document.getElementById('heading').innerHTML = "</br>";
	document.getElementById('cover').innerHTML = "</br>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "</br>";
	Choice();
	document.getElementsByClassName('choice')[8].innerHTML= "Audio";
	document.getElementsByClassName('choice')[9].innerHTML= "No Audio";
	switch (y){
		case 0:
			document.getElementsByClassName('choice')[8].setAttribute("onclick", "start(1,0);");
			document.getElementsByClassName('choice')[9].setAttribute("onclick", "start(0,0);");
			break;
		case 1:
			document.getElementsByClassName('choice')[8].setAttribute("onclick", "start(1,1);");
			document.getElementsByClassName('choice')[9].setAttribute("onclick", "start(0,1);");
			break;
	}
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
function nullManor()
{
	var num = Math.floor(Math.random()* 5)
	switch (num) {
		case 0:document.getElementById("mainText").innerHTML = "Are you crazy? What if I get Hit!"; break;
		case 1:document.getElementById("mainText").innerHTML = "Yeaaah.... that doesnt look safe to me"; break;
		case 3:document.getElementById("mainText").innerHTML = "Why would I do that while they're firing at it?"; break;
		case 4:document.getElementById("mainText").innerHTML = "I might be fast enough to dodge the cannonballs?.....actually probably not"; break;
	}
}

function LoadPage(){
	var x = localStorage.Page;
	switch (x){
		case "0": frontPage(); break;
		case "1": pageOne(); break;
		case "2": pageTwo(); break;
		case "3": pageThree(); break;
		case "4": pageFour(); break;
		case "5": pageFive(); break;
		case "Chapter1": Chapter1(); break;
		case "RoadPier": RoadPier(); break;
		case "RoadManor": RoadManor(); break;
		case "RoadTown": RoadTown(); break;
		case "RoadBeach": RoadBeach(); break;
		case "Pier": Pier(); break;
		case "Manor": Manor(); break;
		case "Town": Town(); break;
		case "Camp": Camp(1); break;
		case "Beach": Beach(); break;
		case "MuckyTankard": MuckyTankard(); break;
		case "Kitchen": Kitchen(2); break;
		case "BloomBoom": BloomBoom(); break;
		default: frontPage(); break;
	}
}


function frontPage(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> The Mystery <br/> of <br/> Baboon Island <br/>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	Next();
	document.getElementsByClassName('choice')[10].innerHTML= "Play";
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "pageOne();");
	localStorage.setItem("Page", "0");
	localStorage.Sword = 0;
	localStorage.Gunpowder = 0;
	localStorage.Potato = 0;
	localStorage.BoiledPotato = 0;
	localStorage.Dirt= 0;
	localStorage.Flower = 0;
	localStorage.Key = 0;
	localStorage.Beigebeard= 0;
	localStorage.Drunkard= 0;
	localStorage.Red= 0;
	localStorage.Fort= 1;

}

function pageOne(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "A young man walks onto the pier and see's a pot-bellied man fishing off the side, he approaches the man. </br>" +
		'"Hi there! My name is Benjamin Hornblower and I want to be a pirate!".';
	Next();
	document.getElementsByClassName('choice')[10].innerHTML= "Next";
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "pageTwo();");

	localStorage.setItem("Page", "1");
}

function pageTwo(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"AWW DRATS!" </br> "Ya scared the fishies away ya landlubber". </br> "Well what ya ' + "wantin'" + ' Trumpetwailer?"';
	Next();
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "pageThree();");
	localStorage.setItem("Page", "2");
}

function pageThree(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "It's" +' Hornblower actually..." </br> "Benjamin Hornblower, but my friends call be Benji"';
	Next();
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "pageFour();");
	localStorage.setItem("Page", "3");
}
function pageFour(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"Ah yes yes, my bad me lad" </br> "So ya want ta be a pirate then Horntooter" </br> 				' +
		"*sigh* </br>" +
		'"Well then ya better speak to the boys down at the Mucky Tankard"';
	Next();
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "pageFive();");
	localStorage.setItem("Page", "4");
}
function pageFive(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"Thanks a bunch friend!" </br> You head off to the pier onto the dirt road';
	Next();
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "Chapter1();");
	localStorage.setItem("Page", "5");
}

function Chapter1(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> Chapter 1 <br/> Call Of A True Pirate <br/>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	Next();
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "RoadPier();");
	localStorage.setItem("Page", "Chapter1");
}

function RoadPier(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"Wait a minute? Where even is the Mucky Tankard?" </br></br> A dirt road lays before you. It bends left going West and bends right going East.';
	Navigation();
	document.getElementsByClassName('choice')[1].style.display = null;
	document.getElementsByClassName('choice')[2].style.display = null;
	document.getElementsByClassName('choice')[3].style.display = null;
	document.getElementsByClassName('choice')[1].innerHTML= "West Road";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "RoadManor();");
	document.getElementsByClassName('choice')[2].innerHTML= "East Road";
	document.getElementsByClassName('choice')[2].setAttribute("onclick", "RoadTown();");
	document.getElementsByClassName('choice')[3].innerHTML= "Pier (South)";
	document.getElementsByClassName('choice')[3].setAttribute("onclick", "Pier();");
	document.getElementsByClassName('choice')[0].style.display= "none";
	localStorage.setItem("Page", "RoadPier");

}
function RoadManor() {
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = 'You see a dilapidated manor on a cliff edge. Cannonballs are being fired at it from a fort on a mountain in the center of the island' +
		"They are all missing. </br> Probably best to stay away for now while they're firing at it";
	Navigation();
	document.getElementsByClassName('choice')[0].style.display = null;
	document.getElementsByClassName('choice')[2].style.display = null;
	document.getElementsByClassName('choice')[0].innerHTML = "North Road";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "RoadBeach();");
	document.getElementsByClassName('choice')[1].innerHTML = "Manor (West)";
	if (localStorage.Fort == 0) {
		document.getElementsByClassName('choice')[1].setAttribute("onclick", "Manor();");
	}
	else {document.getElementsByClassName('choice')[1].setAttribute("onclick", "nullManor();"); }
	document.getElementsByClassName('choice')[2].innerHTML = "East Road";
	document.getElementsByClassName('choice')[2].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[3].style.display = "none";
	localStorage.setItem("Page", "RoadManor");
}
function RoadBeach() {
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "You come to the north of the island on a long beach." ;
	Navigation();
	document.getElementsByClassName('choice')[2].style.display = null;
	document.getElementsByClassName('choice')[3].style.display = null;
	document.getElementsByClassName('choice')[2].innerHTML = "Beach Camp (East)";
	document.getElementsByClassName('choice')[2].setAttribute("onclick", "Beach();");
	document.getElementsByClassName('choice')[3].innerHTML = "South Road";
	document.getElementsByClassName('choice')[3].setAttribute("onclick", "RoadManor();");
	document.getElementsByClassName('choice')[0].style.display = "none";
	document.getElementsByClassName('choice')[1].style.display = "none";
	localStorage.setItem("Page", "RoadBeach");
}
function RoadTown() {
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "You come across an archway with 'Town of Hilt' scrawled across it with paint" ;
	Navigation();
	document.getElementsByClassName('choice')[2].style.display = null;
	document.getElementsByClassName('choice')[1].style.display = null;
	document.getElementsByClassName('choice')[2].innerHTML = "Town (East)";
	document.getElementsByClassName('choice')[2].setAttribute("onclick", "Town();");
	document.getElementsByClassName('choice')[1].innerHTML = "West Road";
	document.getElementsByClassName('choice')[1].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[0].style.display = "none";
	document.getElementsByClassName('choice')[3].style.display = "none";
	localStorage.setItem("Page", "RoadTown");
}

function Pier(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "The pier struts out unto the middle of the bay. </br>" +
		"The water is a clear turquoise, with the fish seen clearly scavenging on the ocean floor.</br>" +
		"The man you first spoke to is still fishing away. He is stood near a small hut." ;
	Interact();
	document.getElementsByClassName('choice')[11].style.display = null;
	document.getElementsByClassName('choice')[12].style.display = null;
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[11].innerHTML = "Man Fishing";
	document.getElementsByClassName('choice')[11].setAttribute("onclick", "Town();");
	document.getElementsByClassName('choice')[12].innerHTML = "Hut";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[13].innerHTML = "Ocean";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[14].style.display = "none";
	localStorage.setItem("Page", "Pier");

}
function Manor() {
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "The Manor is eerie. Wind blows through the buidling, creating unsurity of where the nosie is from. </br>" +
		"You see pillars along the corridor, mostly bare except two. A simple vase sits upon one, and a sparkling necklace upon the other";
	Interact();
	document.getElementsByClassName('choice')[11].style.display = null;
	document.getElementsByClassName('choice')[12].style.display = null;
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[11].innerHTML = "Vase";
	document.getElementsByClassName('choice')[11].setAttribute("onclick", "InteractVase();");
	document.getElementsByClassName('choice')[12].innerHTML = "Necklace";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "InteractNecklace();");
	document.getElementsByClassName('choice')[13].innerHTML = "Stairs";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "Upstairs();");
	document.getElementsByClassName('choice')[14].style.display = "none";
	localStorage.setItem("Page", "Manor");
}

function Beach(){
		document.getElementById('heading').innerHTML = "";
		document.getElementById('cover').innerHTML = null;
		document.getElementById('image').style.display = null;
		document.getElementById('image').style.display = "none";
		document.getElementById("mainText").innerHTML = "The sand is white, with empty bottles strewn across the beach. </br>" +
			"In the middle is a camp with pirates.</br>" +
			"There's a path south into the jungle" ;
		Interact();
		document.getElementsByClassName('choice')[11].style.display = null;
		document.getElementsByClassName('choice')[12].style.display = null;
		document.getElementsByClassName('choice')[13].style.display = null;
		document.getElementsByClassName('choice')[11].innerHTML = "Camp";
		if (localStorage.Vanguard == 1)
		{
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(9);");
		}
		else if (localStorage.Vanguard == 1 && localStorage.Sword == 0){
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(1);");
		}
		else {
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(0);");
		}
		document.getElementsByClassName('choice')[12].innerHTML = "Jungle";
		document.getElementsByClassName('choice')[12].setAttribute("onclick", "Jungle();");
		document.getElementsByClassName('choice')[13].innerHTML = "Road";
		document.getElementsByClassName('choice')[13].setAttribute("onclick", "RoadBeach();");
		document.getElementsByClassName('choice')[14].style.display = "none";
		localStorage.setItem("Page", "Town");
		}

function Camp(x) {
	switch (x) {
		case 0:
			Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "Camp(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "Camp(2);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "Camp(20);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "Camp(30);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "The camp is messy with tents open and a bonfire in the middle. </br>" +
				"To the side priates are striking wooden dummys";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			break;
		case 2:
			document.getElementById('heading').innerHTML = "";
			document.getElementById('cover').innerHTML = null;
			document.getElementById('image').style.display = null;
			document.getElementById('image').style.display = "none";
			document.getElementById("mainText").innerHTML = "Wood chips are flying as the pirates strike with their swords.</br>" +
				"One of them turns to see you,draws their sword and points at you.</br>" +
				"\"Hold it right there ye scurvy dog. Who ye be what ye wanting?\"";
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[15].innerHTML = "I want to be a pirate";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "Camp(3);");
			document.getElementsByClassName('choice')[16].style.display = null;
			document.getElementsByClassName('choice')[16].innerHTML = "Yikes";
			document.getElementsByClassName('choice')[16].setAttribute("onclick", "Camp(4);");
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		case 3:
			document.getElementById("mainText").innerHTML = "\"I'm Benjamin Hornblower, and I want to be a Pirate\"";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Camp(5);");
			break;
		case 4:
			document.getElementById("mainText").innerHTML = "You run out the camp. </br>";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			break;
		case 5:
			document.getElementById("mainText").innerHTML = "\"Really? Where's ye sword then?\"";
			Interact();
			document.getElementsByClassName('choice')[11].style.display = null;
			if (localStorage.Sword == 1) {
				document.getElementsByClassName('choice')[12].style.display = null
				document.getElementsByClassName('choice')[11].innerHTML = "Here it is";
				document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(7);");
				document.getElementsByClassName('choice')[12].innerHTML = "I don't have one.";
				document.getElementsByClassName('choice')[12].setAttribute("onclick", "Camp(6);");
			} else {
				document.getElementsByClassName('choice')[11].innerHTML = "I don't have one";
				document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(6);");
				document.getElementsByClassName('choice')[12].style.display = "none";
			}
			document.getElementsByClassName('choice')[13].style.display = "none";
			document.getElementsByClassName('choice')[14].style.display = "none";
			break;
		case 6:
			document.getElementById("mainText").innerHTML = "\"Well go get one then!\"";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			break;
		case 7:
			document.getElementById("mainText").innerHTML = "You draw your sword out and wiggle it about a bit in the air. </br></br>" +
				"They look slightly impressed";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Camp(8);");
			break;
		case 8:
			document.getElementById("mainText").innerHTML = "\"Very well. Welcome to the team then\".</br>" +
				"\"Make sure to practice on the dummies\".";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			localStorage.Pirate = 1;
			localStorage.Vanguard = 1;
			break;
		case 9:
			document.getElementById("mainText").innerHTML = "The camp is messy with tents open and a bonfire in the middle.</br>" +
				"The pirates are striking wodden dummies with their swords.</br>" +
				"There is one free for you.";
			Interact();
			document.getElementsByClassName('choice')[11].style.display = null;
			document.getElementsByClassName('choice')[12].style.display = null
			document.getElementsByClassName('choice')[11].innerHTML = "Practice with Dummy";
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "Camp(10);");
			document.getElementsByClassName('choice')[12].innerHTML = "Leave";
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Beach();");
			document.getElementsByClassName('choice')[13].style.display = "none";
			document.getElementsByClassName('choice')[14].style.display = "none";
			break;
		case 10:
			document.getElementById("mainText").innerHTML = "You strike the dummy hard. </br>" +
				"As soon as the sword clashes with the dummy it shatters into dust.</br>" +
				"Guess its been sitting in that Manor for too long.</br>" +
				"No one seemed to notice.</br>" +
				"You sneak away.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			localStorage.Sword = 0;
			break;
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Beach();");
			break;
	}
}

function Town(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "You walk into a plaza, there's an empty fountain in the middle. On the other side of the fountain is a flower shop called Bloom & Boom" +
		"You hear muffled noise from a building to the left, it's the Mucky Tankard" ;
	Interact();
	document.getElementsByClassName('choice')[11].style.display = null;
	document.getElementsByClassName('choice')[12].style.display = null;
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[11].innerHTML = "Mucky Tankard ";
	document.getElementsByClassName('choice')[11].setAttribute("onclick", "InteractMuckyTankard(0);");
	document.getElementsByClassName('choice')[12].innerHTML = "Bloom & Boom";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "InteractBloomBoom(0);");
	document.getElementsByClassName('choice')[13].innerHTML = "Road";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "RoadTown();");
	document.getElementsByClassName('choice')[14].style.display = "none";
	localStorage.setItem("Page", "Town");
}

function InteractMuckyTankard(x){
			switch (x) {
				case 0: Actions();
					document.getElementsByClassName('choice')[4].setAttribute("onclick", "InteractMuckyTankard(1);");
					document.getElementsByClassName('choice')[5].setAttribute("onclick", "MuckyTankard();");
					document.getElementsByClassName('choice')[6].setAttribute("onclick", "InteractMuckyTankard(2);");
					document.getElementsByClassName('choice')[7].setAttribute("onclick", "InteractMuckyTankard(3);");
					break;
				case 1:
					document.getElementById("mainText").innerHTML = "It is small tavern with a tankard on the sign. You hear a lot of noise from it. All be it muffled.";
					Next();
					document.getElementsByClassName('choice')[10].setAttribute("onclick", "Town();");
					break;
				default:
					nullAction();
					Next();
					document.getElementsByClassName('choice')[10].setAttribute("onclick", "Town();");
					break;
			}
	}
function MuckyTankard(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	if (localStorage.Drunkard == 0) {
		document.getElementById("mainText").innerHTML = "The place is full of life, everyone loud and with drinks in hand. </br>" +
			'A drunk pirate turns to you and says, while slurring his words, "' + "You're"+ " a new face," + "ain't ya?" + '"';
		Next();
		document.getElementsByClassName('choice')[10].setAttribute("onclick", "Drunkard(0);");
		localStorage.setItem("Page", "MuckyTankard");
	}
	else {
		document.getElementById("mainText").innerHTML = "The place is full of life, everyone loud and with drinks in hand. " +
			"A group of pirates are drinking by the tables next to the door. You see food and drink coming out a door at the end of the room." +
			"Across from the door is a dark corner that is dimly lit. You see a figure sitting down, but cant make out their face";
		Interact();
		document.getElementsByClassName('choice')[11].style.display = null;
		document.getElementsByClassName('choice')[12].style.display = null;
		document.getElementsByClassName('choice')[13].style.display = null;
		document.getElementsByClassName('choice')[14].style.display = null;
		document.getElementsByClassName('choice')[11].innerHTML = "Tables";
		document.getElementsByClassName('choice')[11].setAttribute("onclick", "Tables();");
		document.getElementsByClassName('choice')[12].innerHTML = "Corner";
		document.getElementsByClassName('choice')[12].setAttribute("onclick", "Corner(0);");
		document.getElementsByClassName('choice')[13].innerHTML = "Kitchen";
		document.getElementsByClassName('choice')[13].setAttribute("onclick", "Kitchen(0);");
		document.getElementsByClassName('choice')[14].innerHTML = "Exit";
		document.getElementsByClassName('choice')[14].setAttribute("onclick", "Town();");
	}
	localStorage.setItem("Page", "MuckyTankard");
}
function Drunkard(x) {
	switch (x) {
		case 0:
			document.getElementById("mainText").innerHTML = "\"Yes, i just arrived on the island. My name is Benjamin Hornblower, and I want to be a pirate\".";
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Drunkard(1);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "\"HA!\" *hiccup* </br> \"Funny name kid\" </br> *hiccup* \"Listen here kid, you wanna be a pirate? You have to speak with the big guy Haha\" " +
				"He points to a man in a dark corner sitting by himself, before turning back to his drink. ";
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Drunkard(2);");
			break;
		case 2:
			localStorage.Drunkard = 1;
			MuckyTankard();
	}
}
function Kitchen(x) {
			switch (x) {
				case 0:
					Actions();
					document.getElementsByClassName('choice')[4].setAttribute("onclick", "Kitchen(1);");
					document.getElementsByClassName('choice')[5].setAttribute("onclick", "Kitchen(2);");
					document.getElementsByClassName('choice')[6].setAttribute("onclick", "Kitchen(20);");
					document.getElementsByClassName('choice')[7].setAttribute("onclick", "Kitchen(20);");
					break;
				case 1:
					document.getElementById("mainText").innerHTML = "A man frequntly leaves with tankards full of grogg, and frequntly enters with empty tankards";
					Next();
					document.getElementsByClassName('choice')[10].setAttribute("onclick", "MuckyTankard();");
					break;
				case 2 :
					document.getElementById('heading').innerHTML = "";
					document.getElementById('cover').innerHTML = null;
					document.getElementById('image').style.display = null;
					document.getElementById('image').style.display = "none";
					document.getElementById("mainText").innerHTML = 'The Cook sits on a stool next to a boiling pot, smoking from his pipe. The kitchen is empty aside from a large keg' +
						'and a sack of potatoes';
					Interact();
					document.getElementsByClassName('choice')[11].style.display = null;
					document.getElementsByClassName('choice')[12].style.display = null;
					document.getElementsByClassName('choice')[13].style.display = null;
					document.getElementsByClassName('choice')[14].style.display = null;
					document.getElementsByClassName('choice')[11].innerHTML = "Cook ";
					document.getElementsByClassName('choice')[11].setAttribute("onclick", "Cook(0);");
					document.getElementsByClassName('choice')[12].innerHTML = "Pot";
					document.getElementsByClassName('choice')[12].setAttribute("onclick", "Pot(0);");
					document.getElementsByClassName('choice')[13].innerHTML = "Potatoes";
					document.getElementsByClassName('choice')[13].setAttribute("onclick", "PotatoSack(0);");
					document.getElementsByClassName('choice')[14].innerHTML = "Exit";
					document.getElementsByClassName('choice')[14].setAttribute("onclick", "MuckyTankard();");
					localStorage.Page = "Kitchen"
					break;
				default:
					nullAction();
					Next();
					document.getElementsByClassName('choice')[10].setAttribute("onclick", "MuckyTankard();");
					break;
			}
}
function PotatoSack(x) {
	switch (x) {
		case 0:
			Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "PotatoSack(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "PotatoSack(2);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "PotatoSack(3);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "PotatoSack(4);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "It's a brown sack full of potatoes.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 2:
			document.getElementById("mainText").innerHTML = "I won't fit in the sack, it's full of potatoes.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 3:
			if (localStorage.Pirate = 1){
				document.getElementById("mainText").innerHTML = "What do I need a potato for?.";
				Next();
				document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			}
			else if (localStorage.Potato = 1 || localStorage.BoiledPotato == 1){
				document.getElementById("mainText").innerHTML = "You already have a potato.";
				Next();
				document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			}
			else {
				document.getElementById("mainText").innerHTML = "You have a potato.";
				Next();
				document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
				localStorage.Potato = 1;
			}
			break;
		default:
			document.getElementById("mainText").innerHTML = "It's literally a sack of potatoes.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
	}
}
function Pot(x) {
	switch (x) {
		case 0:
			Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "Pot(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "Pot(2);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "Pot(3);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "Pot(4);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "It's a pot filled with boiling water.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 2:
			document.getElementById("mainText").innerHTML = "I don't wanna go in there. I'll get wet.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 4:
			if (localStorage.Potato == 1){
				document.getElementById("mainText").innerHTML = "The potato plops into the pot. You wait a few minutes before taking it out. </br></br></br></br></br>" +
					"You fish the potato out with the ladel. It's soft </br></br>" +
					"You have a Cooked Potato";
				Next();
				document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
				localStorage.BoiledPotato = 1;
				localStorage.Potato = 0;
				break;
			}
			else {}
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
	}
}
function  Cook(x) {
	switch (x) {
		case 0:
			Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "Cook(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "Cook(2);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "Cook(20);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "Cook(30);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "The cook is an ageing short man with a balding head and thinning head.</br>" +
				"His eyes are sunken with black bags underneath." +
				"He is rather expressionless";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 2:
			document.getElementById("mainText").innerHTML = '"The grogg will come in a minute my friend"';
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[15].innerHTML = "I want to be a pirate";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "Cook(3);");
			document.getElementsByClassName('choice')[16].style.display = null;
			document.getElementsByClassName('choice')[16].innerHTML = "Oh no problem";
			document.getElementsByClassName('choice')[16].setAttribute("onclick", "Kitchen(2);");
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		case 3:
			document.getElementById("mainText").innerHTML = "\"Aint no pirates here boy just a cook, but if you want to join the crew then you can take my place as the ship's cook\". </br>" +
				"\"I'm getting too old and weak for adventures\". </br>" +
				"But I can't do the lads dirty, and leave them with some seadog who cant tell the difference between a cucumber and courgette.</br>";
			Dialog();
			if (localStorage.Potato == 1) {
				document.getElementsByClassName('choice')[15].style.display = null;
				document.getElementsByClassName('choice')[15].innerHTML = "Give Potato";
				document.getElementsByClassName('choice')[15].setAttribute("onclick", "Cook(4);");
				document.getElementsByClassName('choice')[16].style.display = null;
				document.getElementsByClassName('choice')[16].innerHTML = "I won\'t fail you";
				document.getElementsByClassName('choice')[16].setAttribute("onclick", "Kitchen(2);");
			}
			if (localStorage.BoiledPotato == 1) {
				document.getElementsByClassName('choice')[15].style.display = null;
				document.getElementsByClassName('choice')[15].innerHTML = "Give Boiled Potato";
				document.getElementsByClassName('choice')[15].setAttribute("onclick", "Cook(5);");
				document.getElementsByClassName('choice')[16].style.display = null;
				document.getElementsByClassName('choice')[16].innerHTML = "I wont fail you";
				document.getElementsByClassName('choice')[16].setAttribute("onclick", "Kitchen(2);");
			} else {
				document.getElementsByClassName('choice')[15].style.display = null;
				document.getElementsByClassName('choice')[15].innerHTML = "I won\'t fail you";
				document.getElementsByClassName('choice')[15].setAttribute("onclick", "Kitchen(2);");
				document.getElementsByClassName('choice')[16].style.display = "none";
			}
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		case 4:
			document.getElementById("mainText").innerHTML = "\"You may want to cook that first\"." +
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		case 5:
			document.getElementById("mainText").innerHTML = "\"Aaaaa, merci beuacoup monsieur\". </br></br>" +
				"The cook scrans down the potato, seemingly pleased. </br></br>" +
				"\" That was a fine meal my boy, I'll be glad if you were to fill my boots\". </br></br>" +
				"You are now a Pirate"
				Next();
			localStorage.Pirate = 1;
			localStorage.Cook = 1;
			localStorage.Gunner = 0;
			localStorage.Vanguard = 0;
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Cook(6);");
			break;
		case 6:
			document.getElementById("mainText").innerHTML = "\"You came just in time, the ship is heading out in the morning\". </br>" +
				"Head down to the pier when you're ready to set off";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Kitchen(2);");
			break;
	}
}
function Corner(x) {
	switch (x) {
		case 0: Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "Corner(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "Corner(4);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "InteractBloomBoom(2);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "InteractBloomBoom(3);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "The corner is too dark to see anything but the outline of the figure. You'll have to get closer";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "MuckyTankard();");
			break;
		case 4:
			document.getElementById("mainText").innerHTML = "The figure says nothing. Only murmurs to themselves";
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[15].innerHTML = "Hello? ";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "Corner(5);");
			document.getElementsByClassName('choice')[16].style.display = "none";
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
			case 5:
				document.getElementById("mainText").innerHTML = '"GAH!"! The man seems to have just woken up. "What ya want!?"';
				Dialog();
				document.getElementsByClassName('choice')[15].style.display = null;
				document.getElementsByClassName('choice')[15].innerHTML = "I want to be a pirate";
				document.getElementsByClassName('choice')[15].setAttribute("onclick", "Corner(6);");
				document.getElementsByClassName('choice')[16].style.display = null;
				document.getElementsByClassName('choice')[16].innerHTML = "Whats your name?";
				document.getElementsByClassName('choice')[16].setAttribute("onclick", "Corner(7);");
				document.getElementsByClassName('choice')[17].style.display = null;
				document.getElementsByClassName('choice')[17].innerHTML = "Oh nothing, sorry";
				document.getElementsByClassName('choice')[17].setAttribute("onclick", "MuckyTankard();");
				document.getElementsByClassName('choice')[18].style.display = "none";
				break;
		case 6:
			document.getElementById("mainText").innerHTML = '"Well go bother one of the faction leaders! Dont bother me!"';
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[15].innerHTML = "Umm, Where would I find them?";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "Corner(8);");
			document.getElementsByClassName('choice')[16].style.display = "none";
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		case 7:
			localStorage.Beigebeard
			document.getElementById("mainText").innerHTML = "Eh!? My name is Beigebeard boy.</br>" +
				"Never Heard of me? huh you must be new. <.br>" +
				"Haha.... He falls back to sleep";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Corner(4);");
			break;
		case 8:
			document.getElementById("mainText").innerHTML = "You're pushing me here boy. </br></br>" +
				"You have The Vanguard, they're the front line. You'll find their camp on the beach. </br></br>" +
				"The Gunners are in that dammned fort, shooting at that damn Manor.</br></br>" +
				"Oh and I guess theres the Boilers, they're in the Kitchen";
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[15].innerHTML = "Thanks friend";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "MuckyTankard();");
			document.getElementsByClassName('choice')[16].style.display = "none";
			document.getElementsByClassName('choice')[17].style.display = "none";
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "MuckyTankard();");
			break;
	}
}
function InteractBloomBoom(x){
	switch (x) {
		case 0: Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "InteractBloomBoom(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "BloomBoom();");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "InteractBloomBoom(2);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "InteractBloomBoom(3);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "It is a shop with large glass windows on the front. Plants are pressing against the glass, blocking a view in.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Town();");
			break;
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "Town();");
			break;
	}
}
function BloomBoom(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "A bell rings as you enter, the shop is full of colourful plants and flowers. " +
		"Behind a rather large fern, a small lady pops her head out.</br> " +
		'"Oh. Hello"</br>' +
		'She turns her focus back to the plant.';
	Interact();
	document.getElementsByClassName('choice')[11].style.display = null;
	document.getElementsByClassName('choice')[12].style.display = null;
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[11].innerHTML = "Lady ";
	document.getElementsByClassName('choice')[11].setAttribute("onclick", "InteractLadyRed(0);");
	document.getElementsByClassName('choice')[12].innerHTML = "Flowers";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "Flowers();");
	document.getElementsByClassName('choice')[13].innerHTML = "Plaza";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "Town();");
	document.getElementsByClassName('choice')[14].style.display = "none";
	localStorage.setItem("Page", "BloomBoom");
}
function InteractLadyRed(x){
	switch (x) {
		case 0: Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "InteractLadyRed(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "InteractLadyRed(4);");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "InteractLadyRed(2);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "InteractLadyRed(3);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "She is a small woman with red hair, wearing a white dress. Her attetntion is soley on the large fern";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "BloomBoom();");
			break;
		case 4:
			document.getElementById("mainText").innerHTML = "Oh hello, welcome to my store. How can I help you?";
			Dialog();
			document.getElementsByClassName('choice')[15].style.display = null;
			document.getElementsByClassName('choice')[16].style.display = null;
			document.getElementsByClassName('choice')[17].style.display = null;
			document.getElementsByClassName('choice')[15 ].innerHTML = "Why is it called Bloom & Boom? ";
			document.getElementsByClassName('choice')[15].setAttribute("onclick", "InteractLadyRed(5);");
			if (localStorage.Red == 1){
				document.getElementsByClassName('choice')[16].innerHTML = "Can I have some gunpowder?";
				document.getElementsByClassName('choice')[16].setAttribute("onclick", "InteractLadyRed(6);");
				document.getElementsByClassName('choice')[17].innerHTML = "Oh nothing, just browsing ";
				document.getElementsByClassName('choice')[17].setAttribute("onclick", "BloomBoom();");
			}
			else {
				document.getElementsByClassName('choice')[16].innerHTML = "Oh nothing, just browsing ";
				document.getElementsByClassName('choice')[16].setAttribute("onclick", "BloomBoom();");
				document.getElementsByClassName('choice')[17].style.display = "none";
			}
			document.getElementsByClassName('choice')[18].style.display = "none";
			break;
		case 5:
			localStorage.Red = 1;
			document.getElementById("mainText").innerHTML = "Why cus I sell Flowers and Gunpowder of course.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "InteractLadyRed(4);");
			break;
		case 6:
			document.getElementById("mainText").innerHTML = "Well have you got any money? or items to barter with?.";
			Choice();
			if (localStorage.Flower == 1) {
				document.getElementsByClassName('choice')[8].innerHTML = "Yes, I have this rare flower";
				document.getElementsByClassName('choice')[8].setAttribute("onclick", "InteractLadyRed(8);");
			}
			else {document.getElementsByClassName('choice')[8].innerHTML = "No...";
				document.getElementsByClassName('choice')[8].setAttribute("onclick", "InteractLadyRed(7);");
			}
			document.getElementsByClassName('choice')[9].style.display = "none";
			break;
		case 7:
			document.getElementById("mainText").innerHTML = "Oh well, make sure to come back when you do!.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "BloomBoom();");
			break;
		case 8:
			localStorage.Gunpowder = 1;
			document.getElementById("mainText").innerHTML = '"Oh that is so beautiful, that will do nicely". </br>' +
				'"Hera ya go".</br></br>' +
				"You have gunpowder.";
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "BloomBoom();");
			break;
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "BloomBoom();");
			break;
	}
}







	







