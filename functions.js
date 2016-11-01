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

function ajaxGet(url, successCallback, failCallback){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	
	successCallback = successCallback || function (data){/*console.log(data)*/};
	failCallback = failCallback || function (data){/*console.log(data)*/};
	
	request.onload = function(){successCallback(request)};
	request.onerror = function(){failCallback(request)};
	
	request.send();
}