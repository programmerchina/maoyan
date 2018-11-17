function getWidth(){
	var cWidth = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = cWidth / 3.75 + "px";
//	console.log(111);
}
getWidth();
window.addEventListener("orientationchange",getWidth)
window.addEventListener("resize",getWidth)
