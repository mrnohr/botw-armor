function init() {

    fillColors();

    fillAllArmor();
	fillHeadArmor();
    fillBodyArmor();
    fillLegsArmor();

    randomizeOutfit();
}

function fillColors() {
    addOptionToSelect("allColor", "default", "-- Choose a color for all --");

    var colors = getColors();

    for (var i = 0; i < colors.length; i++) {
        addOptionToSelect("headColor", colors[i].id, colors[i].name);
        addOptionToSelect("bodyColor", colors[i].id, colors[i].name);
        addOptionToSelect("legsColor", colors[i].id, colors[i].name);
        addOptionToSelect("allColor", colors[i].id, colors[i].name);
    }
}

function fillHeadArmor() {
    var armors = getHeadArmor();

    for (var i = 0; i < armors.length; i++) {
        addOptionToSelect("headSet", armors[i].id, armors[i].name);
    }
}

function fillBodyArmor() {
    var armors = getBodyArmor();

    for (var i = 0; i < armors.length; i++) {
        addOptionToSelect("bodySet", armors[i].id, armors[i].name);
    }
}

function fillLegsArmor() {
    var armors = getLegsArmor();

    for (var i = 0; i < armors.length; i++) {
        addOptionToSelect("legsSet", armors[i].id, armors[i].name);
    }
}

function fillAllArmor() {
    addOptionToSelect("allSet", "default", "-- Choose a set for all --");

    var armors = getAllArmor();

    for (var i = 0; i < armors.length; i++) {
        addOptionToSelect("allSet", armors[i].id, armors[i].name);
    }
}


function addOptionToSelect(elementName, key, displayText) {
    var dropDown = document.getElementById(elementName);
    var item = document.createElement("option");
    item.value = key;
    item.innerHTML = displayText;
    dropDown.appendChild(item);

}

function getRandomOption(elementId) {
    var dropdown = document.getElementById(elementId);
    var randomIndex = Math.floor(Math.random() * dropdown.options.length);
    return dropdown.options[randomIndex].value;
}

function getRandomColor() {
    return colorList[Math.floor(Math.random() * colorList.length)].id;
}

function randomizeAll() {
    var randomHeadSet = getRandomOption("headSet");
    var randomHeadColor = getRandomColor();
    setHeadPicture(randomHeadSet, randomHeadColor);

    var randomBodySet = getRandomOption("bodySet");
    var randomBodyColor = getRandomColor();
    setBodyPicture(randomBodySet, randomBodyColor);

    var randomLegsSet = getRandomOption("legsSet");
    var randomLegsColor = getRandomColor();
    setLegsPicture(randomLegsSet, randomLegsColor);

    // Randomize the "all" dropdowns if needed
    var randomAllSet = getRandomOption("allSet");
    setHeadPicture(randomAllSet, randomHeadColor);
    setBodyPicture(randomAllSet, randomBodyColor);
    setLegsPicture(randomAllSet, randomLegsColor);

    // Randomize the color dropdown
    var randomColor = getRandomColor();
    setHeadPicture(randomHeadSet, randomHeadColor);
    setBodyPicture(randomBodySet, randomBodyColor);
    setLegsPicture(randomLegsSet, randomLegsColor);
}
