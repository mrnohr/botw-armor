//last share = U
var armorList = [
    {id: "well-worn", name: "Well Worn", bodyPart: "body", shareKey: "f"},
    {id: "well-worn", name: "Well Worn", bodyPart: "legs", shareKey: "f"},
    {id: "champion", name: "Champion", bodyPart: "body", shareKey: "h"},
    {id: "hylian", name: "Hylian", bodyPart: "all", shareKey: "1"},
    {id: "soldier", name: "Soldier", bodyPart: "all", shareKey: "2"},
    {id: "amber-earings", name: "Amber Earings", bodyPart: "head", shareKey: "m"},
    {id: "warm-doublet", name: "Warm Doublet", bodyPart: "body", shareKey: "l"},
    {id: "ruby-circlet", name: "Ruby Circlet", bodyPart: "head", shareKey: "n"},
    {id: "snoquill", name: "Snoquill", bodyPart: "all", shareKey: "3"},
    {id: "sapphire-circlet", name: "Sapphire Circlet", bodyPart: "head", shareKey: "o"},
    {id: "desert-voe", name: "Desert Voe", bodyPart: "all", shareKey: "4"},
    {id: "gerudo", name: "Gerudo", bodyPart: "all", shareKey: "5"},
    {id: "topaz-earings", name: "Topaz Earings", bodyPart: "head", shareKey: "p"},
    {id: "rubber", name: "Rubber", bodyPart: "all", shareKey: "6"},
    {id: "flamebreaker", name: "Flamebreaker", bodyPart: "all", shareKey: "7"},
    {id: "opal-earings", name: "Opal Earings", bodyPart: "head", shareKey: "q"},
    {id: "zora", name: "Zora", bodyPart: "all", shareKey: "8"},
    {id: "stealth", name: "Stealth", bodyPart: "all", shareKey: "9"},
    {id: "sheiks-mask", name: "Sheik's Mask", bodyPart: "head", shareKey: "F"},
    {id: "thunder-helm", name: "Thunder Helm", bodyPart: "head", shareKey: "r"},
    {id: "climber", name: "Climber", bodyPart: "all", shareKey: "a"},
    {id: "barbarian", name: "Barbarian", bodyPart: "all", shareKey: "b"},
    {id: "fierce-deity", name: "Fierce Deity", bodyPart: "all", shareKey: "z"},
    {id: "radiant", name: "Radiant", bodyPart: "all", shareKey: "c"},
    {id: "radiant-night", name: "Radiant (night)", bodyPart: "all", shareKey: "k"},
    {id: "diamond-circlet", name: "Diamond Circlet", bodyPart: "head", shareKey: "s"},
    {id: "ancient", name: "Ancient", bodyPart: "all", shareKey: "d"},
    {id: "snow-boots", name: "Snow Boots", bodyPart: "legs", shareKey: "j"},
    {id: "sand-boots", name: "Sand Boots", bodyPart: "legs", shareKey: "i"},
    {id: "bokoblin", name: "Bokoblin Mask", bodyPart: "head", shareKey: "t"},
    {id: "moblin", name: "Moblin Mask", bodyPart: "head", shareKey: "u"},
    {id: "lizalfos", name: "Lizalfos Mask", bodyPart: "head", shareKey: "v"},
    {id: "lynel", name: "Lynel Mask", bodyPart: "head", shareKey: "w"},
    {id: "dark", name: "Dark", bodyPart: "all", shareKey: "x"},
    {id: "time", name: "Time", bodyPart: "all", shareKey: "A"},
    {id: "wind", name: "Wind", bodyPart: "all", shareKey: "B"},
    {id: "twilight", name: "Twilight", bodyPart: "all", shareKey: "C"},
    {id: "sky", name: "Sky", bodyPart: "all", shareKey: "D"},
    {id: "hero", name: "Hero", bodyPart: "all", shareKey: "E"},
    {id: "wild", name: "Wild", bodyPart: "all", shareKey: "e"},
    {id: "switch-shirt", name: "Nintendo Switch Shirt", bodyPart: "body", shareKey: "y"},
    {id: "korok", name: "Korok Mask", bodyPart: "head", shareKey: "G"},
    {id: "majora", name: "Majora's Mask", bodyPart: "head", shareKey: "H"},
    {id: "tingle", name: "Tingle", bodyPart: "all", shareKey: "I"},
    {id: "midna", name: "Midna's Helmet", bodyPart: "head", shareKey: "J"},
    {id: "phantom", name: "Phantom", bodyPart: "all", shareKey: "K"},
    {id: "island-lobster", name: "Island Lobster", bodyPart: "body", shareKey: "Q"},
    {id: "ravio", name: "Ravio", bodyPart: "head", shareKey: "R"},
    {id: "zant", name: "Zant", bodyPart: "head", shareKey: "S"},
    {id: "royal-guard", name: "Royal Guard", bodyPart: "all", shareKey: "T"},
    {id: "phantom-ganon", name: "Phantom Ganon", bodyPart: "all", shareKey: "U"},
    {id: "vah-ruta", name: "Vah Ruta", bodyPart: "head", shareKey: "M"},
    {id: "vah-medoh", name: "Vah Medoh", bodyPart: "head", shareKey: "N"},
    {id: "vah-rudania", name: "Vah Rudania", bodyPart: "head", shareKey: "O"},
    {id: "vah-naboris", name: "Vah Naboris", bodyPart: "head", shareKey: "P"},
    {id: "salvager", name: "Salvager (Xenoblade)", bodyPart: "all", shareKey: "L"},
    {id: "unequipped", name: "Unequipped", bodyPart: "all", shareKey: "g"}
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
