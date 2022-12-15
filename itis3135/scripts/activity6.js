var entryNumber = prompt("pick a number");

var selected = parseFloat(entryNumber);
var invalid = nonPolygon(entryNumber);

while( (invalid) || (isNaN(selected))) {
    if (isNaN(selected)) 
    {
        entryNumber = prompt("Please put in a number."); 
    } 
    
    else if (selected <= -12.5) 
    {
        entryNumber = prompt("Sorry, but your number is less than -12.5  Try Again."); 
    }
    else if (selected >= 12.5)
    {
        entryNumber = prompt("Sorry, but I believe your number is greater than 12.5.  Try Again "); 
        
    } 
    
    selected = parseFloat(entryNumber);
    invalid = nonPolygon(selected);
    
}

    


if (selected > 0 ){
    alert("You choose " + selected + " and your polygon is a " + isPolygon(Math.round(selected)));
    document.write("Your number is " + selected + " and your polygon is a " +isPolygon(Math.round(selected)));
}
else {
    alert("Your number is " + selected + " and your polygon is a " + isPolygon(Math.round(selected*-1)));
    document.write("Your number is " + selected + " and your polygon is a " + isPolygon(Math.round(selected*-1)));
}



function nonPolygon( entryNumber) 
{
    if(isNaN(entryNumber))
    {
        return true;

    }
    else if (entryNumber > -12.5 && entryNumber < 12.5 ) 
    {

        return false;
    }
    else {
        return true;
    }
}


function isPolygon ( polygon) 
{
    var polygonName = [ "non-exsistentgon", "monogon", "bigon", "trigon", "tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon",
    "Nonagon", "Decagon", "Hendecagon", "Dodecagod" ];
    return polygonName[polygon];
}