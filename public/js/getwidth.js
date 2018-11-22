function getWidth(){
	var cWidth = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = cWidth / 3.75 + "px";
//	console.log(document.documentElement.style.fontSize);
}
getWidth()
window.load = getWidth;
window.addEventListener("orientationchange",getWidth)
window.addEventListener("resize",getWidth)
