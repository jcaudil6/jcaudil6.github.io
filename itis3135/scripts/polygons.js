const thisFunction = () => {
    var shapeSides = getNumber();
    var i = 0;
    while (i == 0) {
        if (valid(shapeSides)) {
            var shape = getShape(shapeSides);
            alert(shape);
            i = 1;
        }
        else {
            shapeSides = getError();
        }
    }
}
function getNumber() {
    var polygonNumber = parseFloat(prompt("Pleas enter a number between 1 and 10 and we'll tell you what type of polygon you have"));
    return polygonNumber;
}
function getError() {
    var polygonNumber = parseFloat(prompt("Sorry, but you need to enter a number between 1 and 10.  Try Again!"));
    return polygonNumber;
}

function getShape(sides) {
    sides = Math.round(Math.abs(sides));

    if (sides == 0) {
        sides = "You can't have a polygon with no sides";

    }
    else if (sides == 1) {
        sides = "You've chosen a Henagon";
    }

    else if (sides == 2) {
        sides = "You've chosen a Digon";

    }

    else if (sides == 3) {
        sides = "You've chosen a Trigon";

    }

    else if (sides == 4) {
        sides = "You've chosen a Tetragon";

    }

    else if (sides == 5) {
        sides = "You've chosen a Pentagon";

    }
    else if (sides == 6) {
        sides = "You've chosen a Hexagon";

    }
    else if (sides == 7) {
        sides = "You've chosen a Heptagon";

    }

    else if (sides == 8) {
        sides = "You've chosen a Octagon";

    }
    else if (sides == 9) {
        sides = "You've chosen a Nonagon";

    }

    else if (sides == 10) {
        sides = "You've chosen a Decagon";


    }
    return sides;
}

function valid(sides) {
    if (sides == 'number') {
        if (sides >= -10 && sides <= 10) {
            return (sides == sides);
        }
    }
}

