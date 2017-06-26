function checkForShare() {
	var id = getParameterByName("id");
	if(id != null) {
		setSharingColor(id);
	} else if (getParameterByName("hc") != null) {
		//TODO deprecated
		setDropdownByKey("headColor", getParameterByName("hc"));
		setDropdownByKey("bodyColor", getParameterByName("bc"));
		setDropdownByKey("legsColor", getParameterByName("lc"));

		setDropdownByKey("headSet", getParameterByName("hs"));
		setDropdownByKey("bodySet", getParameterByName("bs"));
		setDropdownByKey("legsSet", getParameterByName("ls"));
	} else {
		//default
        //setSharingColor("121111"); //hylian
    }
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

function getLink() {
	var hck = getColorShareKey(getDropdownKey("headColor"));
	var bck = getColorShareKey(getDropdownKey("bodyColor"));
	var lck = getColorShareKey(getDropdownKey("legsColor"));

	var hsk = getArmorShareKey(getDropdownKey("headSet"));
	var bsk = getArmorShareKey(getDropdownKey("bodySet"));
	var lsk = getArmorShareKey(getDropdownKey("legsSet"));

	var sharingKey = "http://botw.fashion?id=" + hsk + hck + bsk + bck + lsk + lck;

	//console.log(sharingKey);
	return sharingKey;
}

function setSharingColor(id) {
	var parts = id.split("");
	if(parts.length >= 6) {
		setDropdownByKey("headSet", getArmorIdFromShareKey(parts[0]));
		setDropdownByKey("headColor", getColorIdFromShareKey(parts[1]));
		setDropdownByKey("bodySet", getArmorIdFromShareKey(parts[2]));
		setDropdownByKey("bodyColor", getColorIdFromShareKey(parts[3]));
		setDropdownByKey("legsSet", getArmorIdFromShareKey(parts[4]));
		setDropdownByKey("legsColor", getColorIdFromShareKey(parts[5]));
	}
}

function fillShareLink() {
	var shareLink = getLink();

	var linkInput = document.getElementById("shareLink");
	linkInput.value = shareLink;

	var socialMessage = "This is my Zelda BOTW fashion! " + shareLink;

	var twitterInput = document.getElementById("shareTweet");
	twitterInput.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURI(socialMessage) + "&hashtags=zelda,botw,botwfashion");

	var facebookInput = document.getElementById("shareFacebook");
	facebookInput.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareLink);
}