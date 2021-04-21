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
localStorage.Potato;
localStorage.Dirt;
localStorage.Key;
// Checks
localStorage.Fort;
localStorage.Drunkard


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
		if (localStorage.Sword == 1){
			document.getElementsByClassName("item")[0].innerText = "Sword";
		}
		else {
			document.getElementsByClassName("item")[0].innerText = "________";
			document.getElementsByClassName("item")[0].style.color = localStorage.Background;
			document.getElementsByClassName("item")[0].style.borderColor = localStorage.Colour;
		}
		if (localStorage.Gunpowder == 1){
			document.getElementsByClassName("item")[1].innerText = "Gunpowder";
		}
		else {
			document.getElementsByClassName("item")[1].innerText = "________";
			document.getElementsByClassName("item")[1].style.color = localStorage.Background;
			document.getElementsByClassName("item")[1].style.borderColor = localStorage.Colour;
		}
		if (localStorage.Potato == 1){
			document.getElementsByClassName("item")[2].innerText = "Potato";
		}
		else {
			document.getElementsByClassName("item")[2].innerText = "________";
			document.getElementsByClassName("item")[2].style.color = localStorage.Background;
			document.getElementsByClassName("item")[2].style.borderColor = localStorage.Colour;
		}
	if (localStorage.Dirt == 1){
		document.getElementsByClassName("item")[3].innerText = "Dirt";
	}
	else {
		document.getElementsByClassName("item")[3].innerText = "________";
		document.getElementsByClassName("item")[3].style.color = localStorage.Background;
		document.getElementsByClassName("item")[3].style.borderColor = localStorage.Colour;
	}
		if (localStorage.Key == 1){
			document.getElementsByClassName("item")[4].innerText = "Key";
		}
		else {
			document.getElementsByClassName("item")[4].innerText = "________";
			document.getElementsByClassName("item")[4].style.color = localStorage.Background;
			document.getElementsByClassName("item")[4].style.borderColor = localStorage.Colour;
		}
}

function openBag() {
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
	x = document.getElementsByClassName('ItemActions');
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
	x = document.getElementsByClassName('ItemActions');
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
	x = document.getElementsByClassName('ItemActions');
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
	x = document.getElementsByClassName('ItemActions');
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
	x = document.getElementsByClassName('ItemActions');
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
	x = document.getElementsByClassName('Interact');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = null;
	}
}
function ItemActions(){
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
	x = document.getElementsByClassName('ItemActions');
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
				document.getElementsByClassName('choice')[10].innerHTML = "Continue";
				document.getElementsByClassName('choice')[10].setAttribute("onclick", "AudioSelect(0);");
				document.getElementsByClassName('choice')[11].innerHTML = "New Game";
				document.getElementsByClassName('choice')[11].setAttribute("onclick", "AudioSelect(1);");
			}
}
function ConfirmNew(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "Are You Sure?";
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "";
	Choice();
	document.getElementsByClassName('choice')[10].innerHTML = "Yes";
	document.getElementsByClassName('choice')[10].setAttribute("onclick", "AudioSelect(1);");
	document.getElementsByClassName('choice')[11].innerHTML = "No";
	document.getElementsByClassName('choice')[11].setAttribute("onclick", "Continue();");


}
function AudioSelect(y){
	document.getElementById('heading').innerHTML = "</br>";
	document.getElementById('cover').innerHTML = "</br>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "</br>";
	Choice();
	document.getElementsByClassName('choice')[10].innerHTML= "Audio";
	document.getElementsByClassName('choice')[11].innerHTML= "No Audio";
	switch (y){
		case 0:
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "start(1,0);");
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "start(0,0);");
			break;
		case 1:
			document.getElementsByClassName('choice')[10].setAttribute("onclick", "start(1,1);");
			document.getElementsByClassName('choice')[11].setAttribute("onclick", "start(0,1);");
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
		case "RoadPier": RoadPier(); break;
		case "RoadManor": RoadManor(); break;
		case "RoadTown": RoadTown(); break;
		default: frontPage(); break;
	}
}


function frontPage(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> The Mystery <br/> of <br/> Baboon Island <br/>";
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	Next();
	document.getElementsByClassName('choice')[12].innerHTML= "Play";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "pageOne();");
	localStorage.setItem("Page", "0");
	localStorage.Sword = 0;
	localStorage.Gunpowder = 0;
	localStorage.Potato = 0;
	localStorage.Dirt= 0;
	localStorage.Key = 0;
	localStorage.Drunkard= 0;
	localStorage.Fort= 1;

}

function pageOne(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "A young man walks onto the pier and see's a pot-bellied man fishing off the side, he approaches the man. </br>" +
		'"Hi there! My name is Benjamin Hornblower and I want to be a pirate!".';
	Next();
	document.getElementsByClassName('choice')[12].innerHTML= "Next";
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "pageTwo();");

	localStorage.setItem("Page", "1");
}

function pageTwo(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"AWW DRATS!" </br> "Ya scared the fishies away ya landlubber". </br> "Well what ya ' + "wantin'" + ' Trumpetwailer?"';
	Next();
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "pageThree();");
	localStorage.setItem("Page", "2");
}

function pageThree(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "It's" +' Hornblower actually..." </br> "Benjamin Hornblower, but my friends call be Benji"';
	Next();
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "pageFour();");
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
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "pageFive();");
	localStorage.setItem("Page", "4");
}
function pageFive(){
	document.getElementById('heading').innerHTML = "Epilogue </br>";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = '"Thanks a bunch friend!" </br> You head off to the pier onto the dirt road';
	Next();
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "Chapter1();");
	localStorage.setItem("Page", "5");
}

function Chapter1(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = "<br/><br/> Chapter 1 <br/> Call Of A True Pirate <br/>";
	document.getElementById('image').style.display= null;
	document.getElementById('image').style.display= "none";
	document.getElementById("mainText").innerHTML = "";
	Next();
	document.getElementsByClassName('choice')[12].setAttribute("onclick", "RoadPier();");
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
	document.getElementsByClassName('choice')[0].innerHTML = "North Road </br>";
	document.getElementsByClassName('choice')[0].setAttribute("onclick", "BlockSouth();");
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
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[14].style.display = null;
	document.getElementsByClassName('choice')[15].style.display = null;
	document.getElementsByClassName('choice')[13].innerHTML = "Man Fishing";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "Town();");
	document.getElementsByClassName('choice')[14].innerHTML = "Hut";
	document.getElementsByClassName('choice')[14].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[15].innerHTML = "Ocean";
	document.getElementsByClassName('choice')[15].setAttribute("onclick", "RoadPier();");
	document.getElementsByClassName('choice')[16].style.display = "none";
	localStorage.setItem("Page", "Pier");

}
function Town(){
	document.getElementById('heading').innerHTML = "";
	document.getElementById('cover').innerHTML = null;
	document.getElementById('image').style.display = null;
	document.getElementById('image').style.display = "none";
	document.getElementById("mainText").innerHTML = "You walk into a plaza, there's an empty fountain in the middle. On the other side of the fountain is a flower shop called Bloom & Boom" +
		"You hear muffled noise from a building to the left, it's the Mucky Tankard" ;
	Interact();
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[14].style.display = null;
	document.getElementsByClassName('choice')[15].style.display = null;
	document.getElementsByClassName('choice')[13].innerHTML = "Mucky Tankard ";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "InteractMuckyTankard(0);");
	document.getElementsByClassName('choice')[14].innerHTML = "Bloom & Boom";
	document.getElementsByClassName('choice')[14].setAttribute("onclick", "InteractBloomBoom(0);");
	document.getElementsByClassName('choice')[15].innerHTML = "Road";
	document.getElementsByClassName('choice')[15].setAttribute("onclick", "InteractRoadTown(0);");
	document.getElementsByClassName('choice')[16].style.display = "none";
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
					document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
				default:
					nullAction();
					Next();
					document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
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
			document.getElementById("mainText").innerHTML = "It is a shop with large glass windows on the front. Plants are pressing against the glass and blocking a view in.";
			Next();
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
		default:
			nullAction();
			Next();
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
	}
}
function InteractRoadTown(x){
	switch (x) {
		case 0:
			Actions();
			document.getElementsByClassName('choice')[4].setAttribute("onclick", "InteractRoadTown(1);");
			document.getElementsByClassName('choice')[5].setAttribute("onclick", "RoadTown();");
			document.getElementsByClassName('choice')[6].setAttribute("onclick", "InteractRoadTown(2);");
			document.getElementsByClassName('choice')[7].setAttribute("onclick", "InteractRoadTown(3);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = "It's a dirt road.";
			Next();
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
			break;
		case 2:
			if (localStorage.Dirt == 0) {
				document.getElementById("mainText").innerHTML = "You got Dirt. Congratulations";
				Next();
				document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
				localStorage.Dirt = 1
			}
			else {
				document.getElementById("mainText").innerHTML = "You already have dirt";
				Next();
				document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
			}
			break;
		default:
			document.getElementById("mainText").innerHTML = "You kick the dirt";
			Next();
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Town();");
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
		document.getElementsByClassName('choice')[12].setAttribute("onclick", "Drunkard(0);");
		localStorage.setItem("Page", "MuckyTankard");
	}
	else {
		document.getElementById("mainText").innerHTML = "The place is full of life, everyone loud and with drinks in hand. " +
			"A group of pirates are drinking by the tables next ot the door. You see food and drink coming out a door at the end of the room." +
			"Across from the door is a dark corner that is dimly lit. You see a figure sitting down, but cant make out their face";
		Interact();
		document.getElementsByClassName('choice')[13].style.display = null;
		document.getElementsByClassName('choice')[14].style.display = null;
		document.getElementsByClassName('choice')[15].style.display = null;
		document.getElementsByClassName('choice')[16].style.display = null;
		document.getElementsByClassName('choice')[13].innerHTML = "Tables";
		document.getElementsByClassName('choice')[13].setAttribute("onclick", "Tables();");
		document.getElementsByClassName('choice')[14].innerHTML = "Corner";
		document.getElementsByClassName('choice')[14].setAttribute("onclick", "Corner();");
		document.getElementsByClassName('choice')[15].innerHTML = "Kitchen";
		document.getElementsByClassName('choice')[15].setAttribute("onclick", "Kitchen();");
		document.getElementsByClassName('choice')[16].innerHTML = "Exit";
		document.getElementsByClassName('choice')[16].setAttribute("onclick", "Town();");
	}
	localStorage.setItem("Page", "MuckyTankard");
}

function Drunkard(x) {
	switch (x) {
		case 0:
			document.getElementById("mainText").innerHTML = '"Yes, i just arrived on the island. My name is Benjamin Hornblower, and I want to be a pirate".';
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Drunkard(1);");
			break;
		case 1:
			document.getElementById("mainText").innerHTML = '"HA!" *hiccup* </br> "Funny name kid" </br> *hiccup* "Listen here kid, you wanna be a pirate? You have to speak with the big guy Haha" ' +
				'He points to a man in a dark corner sitting by himself, before turning back to his drink ';
			document.getElementsByClassName('choice')[12].setAttribute("onclick", "Drunkard(2);");
			break;
		case 2:
			localStorage.Drunkard = 1;
			MuckyTankard();
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
	document.getElementsByClassName('choice')[13].style.display = null;
	document.getElementsByClassName('choice')[14].style.display = null;
	document.getElementsByClassName('choice')[13].innerHTML = "Lady ";
	document.getElementsByClassName('choice')[13].setAttribute("onclick", "MuckyTankard();");
	document.getElementsByClassName('choice')[14].innerHTML = "Flowers";
	document.getElementsByClassName('choice')[14].setAttribute("onclick", "Fountain();");
	document.getElementsByClassName('choice')[15].style.display = "none";
	document.getElementsByClassName('choice')[16].style.display = "none";
	localStorage.setItem("Page", "BloomBoom");

}


	







