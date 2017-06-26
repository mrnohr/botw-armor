var colorList = [
    {id: "blue", name: "Blue", shareKey: "1"},
    {id: "red", name: "Red", shareKey: "2"},
    {id: "yellow", name: "Yellow", shareKey: "3"},
    {id: "white", name: "White", shareKey: "4"},
    {id: "black", name: "Black", shareKey: "5"},
    {id: "purple", name: "Purple", shareKey: "6"},
    {id: "green", name: "Green", shareKey: "7"},
    {id: "light-blue", name: "Light Blue", shareKey: "8"},
    {id: "navy", name: "Navy", shareKey: "9"},
    {id: "orange", name: "Orange", shareKey: "a"},
    {id: "peach", name: "Peach", shareKey: "b"},
    {id: "crimson", name: "Crimson", shareKey: "c"},
    {id: "light-yellow", name: "Light Yellow", shareKey: "d"},
    {id: "brown", name: "Brown", shareKey: "e"},
    {id: "gray", name: "Gray", shareKey: "f"},
    {id: "undyed", name: "Original", shareKey: "g"}
]

function getColors() {
    return colorList;
}

//sharing
function getColorShareKey(id) {
    var color = colorList.find(function(color){
        return color.id === id;
    });

    if(color) {
        return color.shareKey;
    }
}

function getColorIdFromShareKey(shareKey) {
    var color = colorList.find(function(color){
        return color.shareKey === shareKey;
    });

    if(color) {
        return color.id;
    }
}
