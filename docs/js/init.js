function init() {
	addChooseOption("allSet", "Choose a set for all");
	addChooseOption("allColor", "Choose a color for all");

	fillColorDropdown("headColor");
	fillColorDropdown("bodyColor");
	fillColorDropdown("legsColor");
	fillColorDropdown("allColor");

	fillArmorDropdown("headSet");
	fillArmorDropdown("bodySet");
	fillArmorDropdown("legsSet");
	fillArmorDropdown("allSet");

	fillAdditionalHead("headSet");
	fillAdditionalBody("bodySet");
	fillAdditionalLegs("legsSet");

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
		"radiant-night":"Radiant (night)",
		"ancient":"Ancient",
		"wild":"Wild",
		"well-worn":"Well Worn",
		"dark":"Dark",
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

function fillAdditionalHead(elementName) {
	var dropDown = document.getElementById(elementName);

	var item = document.createElement("option");
	item.value = "amber-earings";
	item.innerHTML = "Amber Earings"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "ruby-circlet";
	item.innerHTML = "Ruby Circlet"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "sapphire-circlet";
	item.innerHTML = "Sapphire Circlet"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "topaz-earings";
	item.innerHTML = "Topaz Earings"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "opal-earings";
	item.innerHTML = "Opal Earings"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "thunder-helm";
	item.innerHTML = "Thunder Helm"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "diamond-circlet";
	item.innerHTML = "Diamond Circlet"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "bokoblin";
	item.innerHTML = "Bokoblin Mask"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "moblin";
	item.innerHTML = "Moblin Mask"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "lizalfos";
	item.innerHTML = "Lizalfos Mask"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "lynel";
	item.innerHTML = "Lynel Mask"
	dropDown.appendChild(item);
}

function fillAdditionalBody(elementName) {
	var dropDown = document.getElementById(elementName);

	var item = document.createElement("option");
	item.value = "champion";
	item.innerHTML = "Champion"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "warm-doublet";
	item.innerHTML = "Warm Doublet"
	dropDown.appendChild(item);

	item = document.createElement("option");
	item.value = "switch-shirt";
	item.innerHTML = "Nintendo Switch Shirt"
	dropDown.appendChild(item);
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

function addChooseOption(elementName, text) {
	var dropDown = document.getElementById(elementName);

	var choose = document.createElement("option");
	choose.value = "default";
	choose.innerHTML = "-- " + text + " --"
	dropDown.appendChild(choose);
}
