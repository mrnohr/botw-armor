// Set the picture
function setHeadPicture(set, color) {
	var headImg = document.getElementById("headImg");
	headImg.src = "images/" + set + "/" + color + "-head.png";

	document.getElementById("headSet").value = set;
	document.getElementById("headColor").value = color;
}

function setBodyPicture(set, color) {
	var bodyImg = document.getElementById("bodyImg");
	bodyImg.src = "images/" + set + "/" + color + "-body.png";

	document.getElementById("bodySet").value = set;
	document.getElementById("bodyColor").value = color;
}
function setLegsPicture(set, color) {
	var legsImg = document.getElementById("legsImg");
	legsImg.src = "images/" + set + "/" + color + "-legs.png";

	document.getElementById("legsSet").value = set;
	document.getElementById("legsColor").value = color;
}

// Component dropdown changed
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

// "all" dropdown changed
function allColorChanged() {
	var colorDropDown = document.getElementById("allColor")
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	var headSetDropDown = document.getElementById("headSet")
	var headSet = headSetDropDown.options[headSetDropDown.selectedIndex].value;
	setHeadPicture(headSet, color);

	var bodySetDropDown = document.getElementById("bodySet")
	var bodySet = bodySetDropDown.options[bodySetDropDown.selectedIndex].value;
	setBodyPicture(bodySet, color);

	var legsSetDropDown = document.getElementById("legsSet")
	var legsSet = legsSetDropDown.options[legsSetDropDown.selectedIndex].value;
	setLegsPicture(legsSet, color);
}

function allSetChanged() {
	var setDropDown = document.getElementById("allSet")
	var set = setDropDown.options[setDropDown.selectedIndex].value;

	var headColorDropDown = document.getElementById("headColor")
	var headColor = headColorDropDown.options[headColorDropDown.selectedIndex].value;
	setHeadPicture(set, headColor);

	var bodyColorDropDown = document.getElementById("bodyColor")
	var bodyColor = bodyColorDropDown.options[bodyColorDropDown.selectedIndex].value;
	setBodyPicture(set, bodyColor);

	var legsColorDropDown = document.getElementById("legsColor")
	var legsColor = legsColorDropDown.options[legsColorDropDown.selectedIndex].value;
	setLegsPicture(set, legsColor);
}

// Back/Next buttons
function findNext(dropDown) {
	var index = dropDown.selectedIndex;
	index++;
	if(index >= dropDown.options.length) {
		index = 0;
	}
	return index;
}

function findBack(dropDown) {
	var index = dropDown.selectedIndex;
	index--;
	if(index < 0) {
		index = dropDown.options.length - 1;
	}
	return index;
}

function headSetNext() {
	var setDropDown = document.getElementById("headSet");
	var colorDropDown = document.getElementById("headColor")

	var index = findNext(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setHeadPicture(set, color);
}

function headSetBack() {
	var setDropDown = document.getElementById("headSet");
	var colorDropDown = document.getElementById("headColor")

	var index = findBack(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setHeadPicture(set, color);
}

function headColorNext() {
	var setDropDown = document.getElementById("headSet");
	var colorDropDown = document.getElementById("headColor")

	var index = findNext(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setHeadPicture(set, color);
}

function headColorBack() {
	var setDropDown = document.getElementById("headSet");
	var colorDropDown = document.getElementById("headColor")

	var index = findBack(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setHeadPicture(set, color);
}

function bodySetNext() {
	var setDropDown = document.getElementById("bodySet");
	var colorDropDown = document.getElementById("bodyColor")

	var index = findNext(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setBodyPicture(set, color);
}

function bodySetBack() {
	var setDropDown = document.getElementById("bodySet");
	var colorDropDown = document.getElementById("bodyColor")

	var index = findBack(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setBodyPicture(set, color);
}

function bodyColorNext() {
	var setDropDown = document.getElementById("bodySet");
	var colorDropDown = document.getElementById("bodyColor")

	var index = findNext(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setBodyPicture(set, color);
}

function bodyColorBack() {
	var setDropDown = document.getElementById("bodySet");
	var colorDropDown = document.getElementById("bodyColor")

	var index = findBack(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setBodyPicture(set, color);
}

function legsSetNext() {
	var setDropDown = document.getElementById("legsSet");
	var colorDropDown = document.getElementById("legsColor")

	var index = findNext(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setLegsPicture(set, color);
}

function legsSetBack() {
	var setDropDown = document.getElementById("legsSet");
	var colorDropDown = document.getElementById("legsColor")

	var index = findBack(setDropDown);

	var set = setDropDown.options[index].value;
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	setLegsPicture(set, color);
}

function legsColorNext() {
	var setDropDown = document.getElementById("legsSet");
	var colorDropDown = document.getElementById("legsColor")

	var index = findNext(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setLegsPicture(set, color);
}

function legsColorBack() {
	var setDropDown = document.getElementById("legsSet");
	var colorDropDown = document.getElementById("legsColor")

	var index = findBack(colorDropDown);

	var set = setDropDown.options[setDropDown.selectedIndex].value;
	var color = colorDropDown.options[index].value;

	setLegsPicture(set, color);
}
