// Set the picture
function setPicture(set, color, bodyPart){
    var img = document.getElementById(bodyPart + "Img");
    img.src = "images/" + set + "/" + color + "-" + bodyPart + ".png";

    document.getElementById(bodyPart + "Set").value = set;
    document.getElementById(bodyPart + "Color").value = color;

    updateName();
}

function setHeadPicture(set, color) {
	setPicture(set, color, "head");
}

function setBodyPicture(set, color) {
    setPicture(set, color, "body");
}
function setLegsPicture(set, color) {
    setPicture(set, color, "legs");
}

// Component dropdown changed
function headChanged() {
	var values = getSelected("headSet", "headColor");
	setHeadPicture(values.set, values.color);
}
function bodyChanged() {
    var values = getSelected("bodySet", "bodyColor");
    setBodyPicture(values.set, values.color);
}

function legsChanged() {
    var values = getSelected("legsSet", "legsColor");
    setLegsPicture(values.set, values.color);
}

// "all" dropdown changed
function allColorChanged() {
	var colorDropDown = document.getElementById("allColor")
	var color = colorDropDown.options[colorDropDown.selectedIndex].value;

	if(color != "default") {
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
}

function allSetChanged() {
	var setDropDown = document.getElementById("allSet")
	var set = setDropDown.options[setDropDown.selectedIndex].value;

	if(set != "default") {
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

function selectNext(elementName) {
    var dropDown = document.getElementById(elementName);
    var index = findNext(dropDown);
    var set = dropDown.options[index].value;
    dropDown.value = set;
}

function selectBack(elementName) {
    var dropDown = document.getElementById(elementName);
    var index = findBack(dropDown);
    var set = dropDown.options[index].value;
    dropDown.value = set;
}

function headSetNext() {
	selectNext("headSet");
    var values = getSelected("headSet", "headColor");
    setHeadPicture(values.set, values.color);
}

function headSetBack() {
    selectBack("headSet");
    var values = getSelected("headSet", "headColor");
    setHeadPicture(values.set, values.color);
}

function headColorNext() {
    selectNext("headColor");
    var values = getSelected("headSet", "headColor");
    setHeadPicture(values.set, values.color);
}

function headColorBack() {
    selectBack("headColor");
    var values = getSelected("headSet", "headColor");
    setHeadPicture(values.set, values.color);
}

function bodySetNext() {
    selectNext("bodySet");
    var values = getSelected("bodySet", "bodyColor");
    setBodyPicture(values.set, values.color);
}

function bodySetBack() {
    selectBack("bodySet");
    var values = getSelected("bodySet", "bodyColor");
    setBodyPicture(values.set, values.color);
}

function bodyColorNext() {
    selectNext("bodyColor");
    var values = getSelected("bodySet", "bodyColor");
    setBodyPicture(values.set, values.color);
}

function bodyColorBack() {
    selectBack("bodyColor");
    var values = getSelected("bodySet", "bodyColor");
    setBodyPicture(values.set, values.color);
}

function legsSetNext() {
    selectNext("legsSet");
    var values = getSelected("legsSet", "legsColor");
    setLegsPicture(values.set, values.color);
}

function legsSetBack() {
    selectBack("legsSet");
    var values = getSelected("legsSet", "legsColor");
    setLegsPicture(values.set, values.color);
}

function legsColorNext() {
    selectNext("legsColor");
    var values = getSelected("legsSet", "legsColor");
    setLegsPicture(values.set, values.color);
}

function legsColorBack() {
    selectBack("legsColor");
    var values = getSelected("legsSet", "legsColor");
    setLegsPicture(values.set, values.color);
}

function updateName() {
	var headSet = document.getElementById("headSet");
	var headColor = document.getElementById("headColor")
	var headSetName = headSet.options[headSet.selectedIndex].innerHTML;
	var headColorName = headColor.options[headColor.selectedIndex].innerHTML;

	var bodySet = document.getElementById("bodySet");
	var bodyColor = document.getElementById("bodyColor")
	var bodySetName = bodySet.options[bodySet.selectedIndex].innerHTML;
	var bodyColorName = bodyColor.options[bodyColor.selectedIndex].innerHTML;

	var legsSet = document.getElementById("legsSet");
	var legsColor = document.getElementById("legsColor")
	var legsSetName = legsSet.options[legsSet.selectedIndex].innerHTML;
	var legsColorName = legsColor.options[legsColor.selectedIndex].innerHTML;

	document.getElementById("comboNameHead").innerHTML = headColorName + " " + headSetName;
	document.getElementById("comboNameBody").innerHTML = bodyColorName + " " + bodySetName;
	document.getElementById("comboNameLegs").innerHTML = legsColorName + " " + legsSetName;
}

function getSelected(setElement, colorElement) {
    var setDropDown = document.getElementById(setElement);
    var colorDropDown = document.getElementById(colorElement);

    var set = setDropDown.options[setDropDown.selectedIndex].value;
    var color = colorDropDown.options[colorDropDown.selectedIndex].value;

    return {set: set, color: color};
}