function init() {

    addOptionToSelect("allColor", "default", "-- Choose a set for all --")

	fillColorDropdown("headColor");
	fillColorDropdown("bodyColor");
	fillColorDropdown("legsColor");
	fillColorDropdown("allColor");

    fillAllArmor();
	fillHeadArmor();
    fillBodyArmor();
    fillLegsArmor();

	checkForShare();
}

function fillColorDropdown(elementName) {
	var colors = {
		"blue":"Blue",
		"red":"Red",
		"yellow":"Yellow",
		"white":"White",
		"black":"Black",
		"purple":"Purple",
		"green":"Green",
		"light-blue":"Light Blue",
		"navy":"Navy",
		"orange":"Orange",
		"peach":"Peach",
		"crimson":"Crimson",
		"light-yellow":"Light Yellow",
		"brown":"Brown",
		"gray":"Gray",
		"undyed":"Original"
	};

	for(var key in colors) {
        addOptionToSelect(elementName, key, colors[key]);
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
    addOptionToSelect("allSet", "default", "-- Choose a set for all --")

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