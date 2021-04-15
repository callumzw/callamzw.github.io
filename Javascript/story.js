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
	localStorage.setItem("mute", 1);
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