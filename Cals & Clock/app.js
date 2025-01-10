let outPutScreen = document.getElementById("output-screen");

function display(num){
   outPutScreen.value += num ;
}

function clr(){
	outPutScreen.value = '';
}

function del(){
	outPutScreen.value = outPutScreen.value.slice(0 , -1);
}

function equall(){
	outPutScreen.value= eval(outPutScreen.value);
}


let hour = document.getElementById("hour");
let min  = document.getElementById("min");
let sec  = document.getElementById('sec');

function displayTime(){

	let date = new Date;

	let hr = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	let hRotation = 30*hr + mm/2;
	let mRotation = 6*mm;
	let sRotation = 6*ss;


	hour.style.transform = `rotate(${hRotation}deg)`;
	min.style.transform = `rotate(${mRotation}deg)`;
	sec.style.transform = `rotate(${sRotation}deg)`;


} 

setInterval(displayTime, 1000);