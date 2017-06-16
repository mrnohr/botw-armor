function checkForShare() {
	setDropdownByKey("headColor", getParameterByName("hc"));
	setDropdownByKey("bodyColor", getParameterByName("bc"));
	setDropdownByKey("legsColor", getParameterByName("lc"));

	setDropdownByKey("headSet", getParameterByName("hs"));
	setDropdownByKey("bodySet", getParameterByName("bs"));
	setDropdownByKey("legsSet", getParameterByName("ls"));
}

function getLink() {
	var link = "http://botw.fashion";
	link += "?hc=" + getDropdownKey("headColor");
	link += "&bc=" + getDropdownKey("bodyColor");
	link += "&lc=" + getDropdownKey("legsColor");
	link += "&hs=" + getDropdownKey("headSet");
	link += "&bs=" + getDropdownKey("bodySet");
	link += "&ls=" + getDropdownKey("legsSet");

	console.log(link);
}

//https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return null;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setDropdownByKey(elementName, key) {
	if(key != null) {
		var dropDown = document.getElementById(elementName);
		dropDown.value = key;
		dropDown.onchange();
	}
}

function getDropdownKey(elementName) {
	return document.getElementById(elementName).value
}
