var name = prompt("What's your name? ");
var feeling = prompt("How's your day been so far?");
var our_family = "Caudill Bakery";

var date = new Date();
var months = ["January ", "Febuary ", "March ", "April ", "May ", "June ", "July", "August ", "September ", "October ", "November ", "December "];

var Today = ("Todays date: " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + ". It is: " + date.getHours() + ":" + date.getMinutes()+ ". " );
var greeting= ("The " + our_family + " is happy you're hear, " + name + "! ");
var salutation = ("I hope your day is going great" + name + "!");


document.write(intro1);
document.write(intro2);
document.write(intro3);


function pick_Random_Doughnut() {
    var Doughnuts = ["Butterfly, Cinnamin Twist, Boston Cream, Chocolate Sprinkle, Maple Bar"];
    var randomNumber = Math.floor(Math.random()* Doughnuts.length);

    alert("The Doughnut you'll have is "+ Doughnuts[randomNumber] + ". ");

    
}
function pick_Random_Cake() {
    var Cake = ["Carrot, Red Velvet, Turtle, Lemon Poppy"]; 
    var randomNumber = Math.floor(Math.random()*Cake.length);

    alert("The Cake you'll have is " + Cake[randomNumber] + ". ");

}
function pick_Random_Bread() {
    var Bread = ["Banana, Baguette, Breadstick, Brioche, Challah, Ciabatta"];
    var randomNumber = Math.floor(Math.random()*Bread.length);
    alert("Your random Non-caffinated Drink is  " + Bread[randomNumber] + ". ");

}
function email_Discounts() {
    var email = prompt("Please enter your email ");
    alert("Thank you! " + email + " you'll now recieve emails about any discounts and upcoming sales.");

}
function text_Discounts() {
    var phone = prompt("Please enter your phone number below ");
    alert("Thank you! " + phone + " you'll now recieve text about discounts and upcoming sales.");
}