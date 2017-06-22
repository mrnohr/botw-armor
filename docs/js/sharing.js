function checkForShare() {
	var id = getParameterByName("id");
	if(id != null) {
		setColorsFromLink(id);
	} else {
		setDropdownByKey("headColor", getParameterByName("hc"));
		setDropdownByKey("bodyColor", getParameterByName("bc"));
		setDropdownByKey("legsColor", getParameterByName("lc"));

		setDropdownByKey("headSet", getParameterByName("hs"));
		setDropdownByKey("bodySet", getParameterByName("bs"));
		setDropdownByKey("legsSet", getParameterByName("ls"));
	}
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

// take 2
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

var sharingColors = {
	1: "blue",
	2: "red",
	3: "yellow",
	4: "white",
	5: "black",
	6: "purple",
	7: "green",
	8: "light-blue",
	9: "navy",
	a: "orange",
	b: "peach",
	c: "crimson",
	d: "light-yellow",
	e: "brown",
	f: "gray",
	g: "undyed"
}

var sharingSet = {
	1: "hylian",
	2: "soldier",
	3: "snoquill",
	4: "desert-voe",
	5: "gerudo",
	6: "rubber",
	7: "flamebreaker",
	8: "zora",
	9: "stealth",
	a: "climber",
	b: "barbarian",
	c: "radiant",
	d: "ancient",
	e: "wild",
	f: "well-worn",
	g: "unequipped",
	h: "champion",
	i: "sand-boots",
	j: "snow-boots",
	k: "radiant-night",
	l: "warm-doublet",
	m: "amber-earings",
	n: "ruby-circlet",
	o: "sapphire-circlet",
	p: "topaz-earings",
	q: "opal-earings",
	r: "thunder-helm",
	s: "diamond-circlet",
	t: "bokoblin",
	u: "moblin",
	v: "lizalfos",
	w: "lynel",
	x: "dark"
	y: "switch-shirt",
	z: "fierce-deity",
	A: "time",
	B: "wind",
	C: "twilight",
	D: "sky",
	E: "hero"
}

function getLink2() {
	var hck = getKeyByValue(sharingColors, getDropdownKey("headColor"));
	var bck = getKeyByValue(sharingColors, getDropdownKey("bodyColor"));
	var lck = getKeyByValue(sharingColors, getDropdownKey("legsColor"));

	var hsk = getKeyByValue(sharingSet, getDropdownKey("headSet"));
	var bsk = getKeyByValue(sharingSet, getDropdownKey("bodySet"));
	var lsk = getKeyByValue(sharingSet, getDropdownKey("legsSet"));

	var sharingKey = "http://botw.fashion?id=" + hsk + hck + bsk + bck + lsk + lck;

	console.log(sharingKey);
	return sharingKey;
}

function setColorsFromLink(id) {
	var parts = id.split("");
	if(parts.length >= 6) {
		setDropdownByKey("headSet", sharingSet[parts[0]]);
		setDropdownByKey("headColor", sharingColors[parts[1]]);
		setDropdownByKey("bodySet", sharingSet[parts[2]]);
		setDropdownByKey("bodyColor", sharingColors[parts[3]]);
		setDropdownByKey("legsSet", sharingSet[parts[4]]);
		setDropdownByKey("legsColor", sharingColors[parts[5]]);
	}
}

function fillShareLink() {
	var shareLink = getLink2();

	var linkInput = document.getElementById("shareLink");
	linkInput.value = shareLink;

	var socialMessage = "This is my Zelda BOTW fashion! " + shareLink;

	var twitterInput = document.getElementById("shareTweet");
	twitterInput.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURI(socialMessage) + "&hashtags=zelda,botw,botwfashion");

	var facebookInput = document.getElementById("shareFacebook");
	facebookInput.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareLink);
}
