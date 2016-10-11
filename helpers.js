function toggleClass(el, toggleClassName, animEndCallbackOnce){
	if (el.className.search(toggleClassName) > 0){
		el.className = el.className.replace(toggleClassName, "").replace(/(^\s|\s$)/gi, "");
	}
	else{
		el.className += " " + toggleClassName;
	}
	
	if (animEndCallbackOnce){
		var callBackOnce = function(){
			animEndCallbackOnce();
			el.removeEventListener("transitionend", callBackOnce);
		};
		el.addEventListener("transitionend", callBackOnce);
	}
}