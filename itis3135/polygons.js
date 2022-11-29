// list of polygons from 1-10, source https://en.wikipedia.org/wiki/List_of_polygons

const polygons = {
    "1": "Monogon",
    "2": "Bigon",
    "3": "Triangle",
    "4": "Tetragon",
    "5": "Pentagon",
    "6": "Hexagon",
    "7": "Septagon",
    "8": "Octagon",
    "9": "Nonagon",
    "10": "Decagon"
}


var polygonsMin = 1; 
var polygonsMax = Object.keys(polygons).length;

console.log(polygonsMin);
console.log(polygonsMax);


console.log(polygons);


console.log(polygons[1]);


console.log(polygons[9]);


console.log(Object.keys(polygons).length);