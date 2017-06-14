function setHeadPicture(set, color) {
	var headImg = document.getElementById("headImg");
	headImg.src = "images/" + set + "/" + color + "-head.png";
}
function setBodyPicture(set, color) {
	var bodyImg = document.getElementById("bodyImg");
	bodyImg.src = "images/" + set + "/" + color + "-body.png";
}
function setLegsPicture(set, color) {
	var legsImg = document.getElementById("legsImg");
	legsImg.src = "images/" + set + "/" + color + "-legs.png";
}

function headChanged() {
	var setDropDown = document.getElementById("headSet")
	var colorDropDown = document.getElementById("headColor")

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setHeadPicture(set, color);
}
function bodyChanged() {
	var setDropDown = document.getElementById("bodySet")
	var colorDropDown = document.getElementById("bodyColor")

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setBodyPicture(set, color);
}

function legsChanged() {
	var setDropDown = document.getElementById("legsSet")
	var colorDropDown = document.getElementById("legsColor")

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setLegsPicture(set, color);
}

function allColorChanged() {
	var colorDropDown = document.getElementById("allColor")
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	var headSetDropDown = document.getElementById("headSet")
	var headSet = headSetDropDown.options[headSetDropDown.selectedIndex].value;
	setHeadPicture(headSet, color);
	document.getElementById("headColor").value = color;

	var bodySetDropDown = document.getElementById("bodySet")
	var bodySet = bodySetDropDown.options[bodySetDropDown.selectedIndex].value;
	setBodyPicture(bodySet, color);
	document.getElementById("bodyColor").value = color;

	var legsSetDropDown = document.getElementById("legsSet")
	var legsSet = legsSetDropDown.options[legsSetDropDown.selectedIndex].value;
	setLegsPicture(legsSet, color);
	document.getElementById("legsColor").value = color;
}

function allSetChanged() {
	var setDropDown = document.getElementById("allSet")
	var set = setDropDown.options[setDropDown.selectedIndex].value;

	var headColorDropDown = document.getElementById("headColor")
	var headColor = headColorDropDown.options[headColorDropDown.selectedIndex].value;
	setHeadPicture(set, headColor);
	document.getElementById("headSet").value = set;

	var bodyColorDropDown = document.getElementById("bodyColor")
	var bodyColor = bodyColorDropDown.options[bodyColorDropDown.selectedIndex].value;
	setBodyPicture(set, bodyColor);
	document.getElementById("bodySet").value = set;

	var legsColorDropDown = document.getElementById("legsColor")
	var legsColor = legsColorDropDown.options[legsColorDropDown.selectedIndex].value;
	setLegsPicture(set, legsColor);
	document.getElementById("legsSet").value = set;
}
