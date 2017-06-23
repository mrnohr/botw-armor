function init() {
    addOptionToSelect("allSet", "default", "-- Choose a set for all --")
    addOptionToSelect("allColor", "default", "-- Choose a set for all --")

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

	for(var key in colors) {
        addOptionToSelect(elementName, key, colors[key]);
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
		"fierce-deity":"Fierce Deity",
		"radiant":"Radiant",
		"radiant-night":"Radiant (night)",
		"ancient":"Ancient",
		"wild":"Wild",
		"well-worn":"Well Worn",
		"dark":"Dark",
		"time":"Time",
		"wind":"Wind",
		"twilight":"Twilight",
		"sky":"Sky",
		"hero":"Hero",
		"unequipped":"Unequipped"
	};

	for(var key in armors) {
		addOptionToSelect(elementName, key, armors[key]);
	}
}

function fillAdditionalHead(elementName) {
    addOptionToSelect(elementName, "amber-earings", "Amber Earings");
    addOptionToSelect(elementName, "ruby-circlet", "Ruby Circlet");
    addOptionToSelect(elementName, "sapphire-circlet", "Sapphire Circlet");
    addOptionToSelect(elementName, "topaz-earings", "Topaz Earings");
    addOptionToSelect(elementName, "opal-earings", "Opal Earings");
    addOptionToSelect(elementName, "sheiks-mask", "Sheik's Mask");
    addOptionToSelect(elementName, "thunder-helm", "Thunder Helm");
    addOptionToSelect(elementName, "diamond-circlet", "Diamond Circlet");
    addOptionToSelect(elementName, "bokoblin", "Bokoblin Mask");
    addOptionToSelect(elementName, "moblin", "Moblin Mask");
    addOptionToSelect(elementName, "lizalfos", "Lizalfos Mask");
    addOptionToSelect(elementName, "lynel", "Lynel Mask");
}

function fillAdditionalBody(elementName) {
    addOptionToSelect(elementName, "champion", "Champion");
    addOptionToSelect(elementName, "warm-doublet", "Warm Doublet");
    addOptionToSelect(elementName, "switch-shirt", "Nintendo Switch Shirt");
}

function fillAdditionalLegs(elementName) {
    addOptionToSelect(elementName, "sand-boots", "Sand Boots");
    addOptionToSelect(elementName, "snow-boots", "Snow Boots");
}

function addOptionToSelect(elementName, key, displayText) {
    var dropDown = document.getElementById(elementName);
    var item = document.createElement("option");
    item.value = key;
    item.innerHTML = displayText;
    dropDown.appendChild(item);
}