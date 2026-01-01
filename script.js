
//window.location.replace
function changeColor() {
let newColor = prompt("Which color do you want - Red, Orange, Blue, Yellow");

if (newColor === "orange")
document.body.style.background = "orange";

if (newColor === "yellow")
document.body.style.background = "yellow";

if (newColor === "red")
document.body.style.background = "red";

if (newColor === "blue")
document.body.style.background = "blue";

else
{
prompt("That isn't a valid color")
}
}

function start() {
alert("Right now, you are in the main plaza!");
let start = prompt("Where do you wanna go? (North, South, East, West)")

if (start === "North")
alert("You are heading toward an abandoned building ")

if (start === "South")
alert("You are heading toward an abandoned mall")

if (start === "West")
alert("You are heading toward an abandoned airport")

if (start === "East")
alert("You are heading toward a forgotten, deserted city")

alert("Please click the building choice button to progress")
}

function enterbuilding() {
let enterbuilding = prompt("Which building did you end up in? (abandoned building, abandoned mall, abandoned airport, forgotten city)")
if(enterbuilding === "abandoned building")
 {
    alert("You travel a long walk to the abandoned building")
    
}
if(enterbuilding === "abandoned mall") {
alert("It is very eerie and dark, but you continue, even if you lose health?")
updatehealthbar(-5)
}

if(enterbuilding == "abandoned airport"){
alert("You see the outside of the airport covered with with weeds growing and graffiti, and sense an ominous presence, but enter in anyways")
updatehealthbar(-5)
}
if(enterbuilding == "forgotten city"){
alert("You tripped a few times to get there and are bleeding by the time you are in the forgotten city?")
updatehealthbar(-5)

alert("Please click the currently exploring button to progress")
}
}
function exploration()
{
let exploration = prompt("What building have you been exploring? (abandoned mall, abandoned airport, abandoned building, forgotten city)")
if(exploration === "abandoned building") {
alert("You get too deep into the building after an hour and a crackhead starts chasing you")
updatehealthbar(-20)
}
if(exploration === "abandoned mall")
{
alert("You find a backrooms looking area and feel a presence watching you and you start running")
updatehealthbar(-20)

}

if(exploration === "abandoned airport")
{
alert("You slip on some hazardous waste left from the past and get some on your skin")
updatehealthbar(-30)
}

if(exploration === "forgotten city")
{
alert("A bear comes out of the woods and eats you as you try to enter the abandoned store")
updatehealthbar(-50)
}
let message = document.createElement("p");
message.textContent = "You feel a very ominous feeling throughout all these buildings"
document.body.appendChild(message);

alert("Please click the exiting the abandoned places button to progress")
}


function end()
{
alert("You end up exploring all the locations at the end (even if your health goes away)... but something happens")
let messages = [
"It starts to get silent",
"Your body gets weaker",
"Everything turns black"

]

for(let i = 0; i < messages.length; i++)
{
alert(messages[i]);
}

die();
alert("Refresh to restart game")
}


function updatehealthbar(healthNumber) {
    let healthElement = document.querySelector("#health");
    let health = Number(healthElement.value);
    health = health + healthNumber;
    healthElement.value = health;
    if (healthElement.value <= 0 ) {
        die();
    }
}

function die() 
{
alert("You Have Died, GG")
document.body.style.background = "black";
}
