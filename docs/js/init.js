function init() {
	fillColorDropdown("headColor");
	fillColorDropdown("bodyColor");
	fillColorDropdown("legsColor");
	fillColorDropdown("allColor");

	fillArmorDropdown("headSet");
	fillArmorDropdown("bodySet");
	fillArmorDropdown("legsSet");
	fillArmorDropdown("allSet");

	fillAdditionalBody("bodySet");
	fillAdditionalLegs("legsSet");
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
		"gray":"Gray"
	};

	var dropDown = document.getElementById(elementName);

	for(var key in colors) {
		var option = document.createElement("option");
		option.value = key;
		option.innerHTML = colors[key];
		dropDown.appendChild(option);
	}
}

function fillArmorDropdown(elementName) {
	var armors = {
		"hylian":"Hylian",
		"soldier":"Soldier",
		"snoquill":"Snoquill",
		"desert-voe":"Desert Voe",
		"gerudo":"Gerudo",
		"rubber":"Rubber",
		"flamebreaker":"Flamebreaker",
		"zora":"Zora",
		"stealth":"Stealth",
		"climber":"Climber",
		"barbarian":"Barbarian",
		"radiant":"Radiant",
		"ancient":"Ancient",
		"wild":"Wild",
		"well-worn":"Well Worn",
		"unequipped":"Unequipped"
	};

	var dropDown = document.getElementById(elementName);

	for(var key in armors) {
		var option = document.createElement("option");
		option.value = key;
		option.innerHTML = armors[key];
		dropDown.appendChild(option);
	}
}

function fillAdditionalBody(elementName) {
	var dropDown = document.getElementById(elementName);

	var sand = document.createElement("option");
	sand.value = "champion";
	sand.innerHTML = "Champion"
	dropDown.appendChild(sand);
}

function fillAdditionalLegs(elementName) {
	var dropDown = document.getElementById(elementName);

	var sand = document.createElement("option");
	sand.value = "sand-boots";
	sand.innerHTML = "Sand Boots"
	dropDown.appendChild(sand);

	var snow = document.createElement("option");
	snow.value = "snow-boots";
	snow.innerHTML = "Snow Boots"
	dropDown.appendChild(snow);
}
