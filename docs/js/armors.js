//last share = U
var armorList = [
    {id: "well-worn", name: "Well Worn", bodyPart: "all", shareKey: "f"},
    {id: "archaic", name: "Archaic", bodyPart: "all", shareKey: "V"},
    {id: "hylian", name: "Hylian", bodyPart: "all", shareKey: "1"},
    {id: "soldier", name: "Soldier", bodyPart: "all", shareKey: "2"},
    {id: "snoquill", name: "Snoquill", bodyPart: "all", shareKey: "3"},
    {id: "flamebreaker", name: "Flamebreaker", bodyPart: "all", shareKey: "7"},
    {id: "zora", name: "Zora", bodyPart: "all", shareKey: "8"},
    {id: "gerudo", name: "Gerudo", bodyPart: "all", shareKey: "5"},
    {id: "desert-voe", name: "Desert Voe", bodyPart: "all", shareKey: "4"},
    {id: "rubber", name: "Rubber", bodyPart: "all", shareKey: "6"},
    {id: "stealth", name: "Stealth", bodyPart: "all", shareKey: "9"},
    {id: "climber", name: "Climber", bodyPart: "all", shareKey: "a"},
    {id: "barbarian", name: "Barbarian", bodyPart: "all", shareKey: "b"},
    {id: "radiant", name: "Radiant", bodyPart: "all", shareKey: "c"},
    {id: "radiant-night", name: "Radiant (Night)", bodyPart: "all", shareKey: "k"},
    {id: "ancient", name: "Ancient", bodyPart: "all", shareKey: "d"},
    {id: "froggy", name: "Froggy", bodyPart: "all", shareKey: "02"},
    {id: "glide", name: "Glide", bodyPart: "all", shareKey: "04"},
    {id: "depths", name: "Of the Depths", bodyPart: "all", shareKey: "00"},
    {id: "miner", name: "Miner's", bodyPart: "all", shareKey: "06"},
    {id: "mystic", name: "Mystic", bodyPart: "all", shareKey: "11"},
    {id: "ember", name: "Ember", bodyPart: "all", shareKey: "01"},
    {id: "charged", name: "Charged", bodyPart: "all", shareKey: "0"},
    {id: "frostbite", name: "Frostbite", bodyPart: "all", shareKey: "03"},
    {id: "dark", name: "Dark", bodyPart: "all", shareKey: "x"},
    {id: "yiga", name: "Yiga", bodyPart: "all", shareKey: "08"},
    {id: "wild", name: "Wild", bodyPart: "all", shareKey: "e"},
    {id: "zonite", name: "Zonite", bodyPart: "all", shareKey: "08"},
    {id: "salvager", name: "Salvager (Xenoblade)", bodyPart: "all", shareKey: "L"},
    {id: "amber-earings", name: "Amber Earrings", bodyPart: "head", shareKey: "m"},
    {id: "opal-earings", name: "Opal Earrings", bodyPart: "head", shareKey: "q"},
    {id: "topaz-earings", name: "Topaz Earrings", bodyPart: "head", shareKey: "p"},
    {id: "ruby-circlet", name: "Ruby Circlet", bodyPart: "head", shareKey: "n"},
    {id: "sapphire-circlet", name: "Sapphire Circlet", bodyPart: "head", shareKey: "o"},
    {id: "diamond-circlet", name: "Diamond Circlet", bodyPart: "head", shareKey: "s"},
    {id: "bokoblin", name: "Bokoblin Mask", bodyPart: "head", shareKey: "t"},
    {id: "horriblin-mask", name: "Horriblin Mask", bodyPart: "head", shareKey: "05"},
    {id: "moblin", name: "Moblin Mask", bodyPart: "head", shareKey: "u"},
    {id: "lizalfos", name: "Lizalfos Mask", bodyPart: "head", shareKey: "v"},
    {id: "lynel", name: "Lynel Mask", bodyPart: "head", shareKey: "w"},
    {id: "cece-hat", name: "Cece Hat", bodyPart: "head", shareKey: "Y"},
    {id: "thunder-helm", name: "Thunder Helm", bodyPart: "head", shareKey: "r"},
    {id: "warm-doublet", name: "Warm Doublet", bodyPart: "body", shareKey: "l"},
    {id: "warm-greaves", name: "Archaic Warm Greaves", bodyPart: "legs", shareKey: "07"},
    {id: "champion", name: "Champion's Tunic", bodyPart: "body", shareKey: "h"},
    {id: "champions-leathers", name: "Champion's Leathers", bodyPart: "body", shareKey: "Z"},
    {id: "snow-boots", name: "Snow Boots", bodyPart: "legs", shareKey: "j"},
    {id: "sand-boots", name: "Sand Boots", bodyPart: "legs", shareKey: "i"},
    {id: "fierce-deity", name: "Fierce Deity", bodyPart: "all", shareKey: "z"},
    {id: "phantom", name: "Phantom", bodyPart: "all", shareKey: "K"},
    {id: "phantom-ganon", name: "Phantom Ganon", bodyPart: "all", shareKey: "U"},
    {id: "royal-guard", name: "Royal Guard", bodyPart: "all", shareKey: "T"},
    {id: "tingle", name: "Tingle", bodyPart: "all", shareKey: "I"},
    {id: "awakening", name: "Awakening", bodyPart: "all", shareKey: "X"},
    {id: "hero", name: "Hero", bodyPart: "all", shareKey: "E"},
    {id: "sky", name: "Sky", bodyPart: "all", shareKey: "D"},
    {id: "time", name: "Time", bodyPart: "all", shareKey: "A"},
    {id: "twilight", name: "Twilight", bodyPart: "all", shareKey: "C"},
    {id: "wind", name: "Wind", bodyPart: "all", shareKey: "B"},
    {id: "vah-ruta", name: "Vah Ruta Helm", bodyPart: "head", shareKey: "M"},
    {id: "vah-medoh", name: "Vah Medoh Helm", bodyPart: "head", shareKey: "N"},
    {id: "vah-rudania", name: "Vah Rudania Helm", bodyPart: "head", shareKey: "O"},
    {id: "vah-naboris", name: "Vah Naboris Helm", bodyPart: "head", shareKey: "P"},
    {id: "switch-shirt", name: "Nintendo Switch Shirt", bodyPart: "body", shareKey: "y"},
    {id: "island-lobster", name: "Island Lobster", bodyPart: "body", shareKey: "Q"},
    {id: "korok", name: "Korok Mask", bodyPart: "head", shareKey: "G"},
    {id: "majora", name: "Majora's Mask", bodyPart: "head", shareKey: "H"},
    {id: "midna", name: "Midna's Helmet", bodyPart: "head", shareKey: "J"},
    {id: "ravio", name: "Ravio", bodyPart: "head", shareKey: "R"},
    {id: "sheiks-mask", name: "Sheik's Mask", bodyPart: "head", shareKey: "F"},
    {id: "zant", name: "Zant", bodyPart: "head", shareKey: "S"},
    {id: "ancient-hero", name: "Ancient Hero's Aspect", bodyPart: "all", shareKey: "W"},
    {id: "unequipped-b", name: "Unequipped (BOTW)", bodyPart: "all", shareKey: "g"},
    {id: "unequipped-t", name: "Unequipped (TOTK)", bodyPart: "all", shareKey: "09"}
]

//get filtered lists
function getHeadArmor() {
    return armorList.filter(function(armor){
        return armor.bodyPart == "all" || armor.bodyPart == "head";
    });
}

function getBodyArmor() {
    return armorList.filter(function(armor){
        return armor.bodyPart == "all" || armor.bodyPart == "body";
    });
}

function getLegsArmor() {
    return armorList.filter(function(armor){
        return armor.bodyPart == "all" || armor.bodyPart == "legs";
    });
}

function getAllArmor() {
    return armorList.filter(function(armor){
        return armor.bodyPart == "all";
    });
}

//sharing
function getArmorShareKey(id) {
    var armor = armorList.find(function(armor){
        return armor.id === id;
    });

    if(armor) {
        return armor.shareKey;
    }
}

function getArmorIdFromShareKey(shareKey) {
    var armor = armorList.find(function(armor){
        return armor.shareKey === shareKey;
    });

    if(armor) {
        return armor.id;
    }
}
