function turn(){
	var angle = Math.random() * 100;
	document.querySelector("#alt").style.transform = "rotate("+ angle + "deg)";

	document.querySelector("#alt").style.width = (angle * 10) + "px";

	document.querySelector("#angleview").innerHTML = angle + " degrees" + "<br>" + "width: " + (angle * 3) + "px";
};