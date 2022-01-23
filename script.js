//this code makes js load after html
document.addEventListener('DOMContentLoaded', function(){

// Game States
// "WIN" - Player dog has out jumped all opponent dogs
//    * Jumps with all opponent dogs
//    * Out jump each opponent dog
// "LOSE" - Player dog's bones are zero or less

var playerName = window.prompt("What is your dog's name?");
var playerBones = 100;
var playerJump = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerBones, playerJump, playerMoney);

var opponentNames = ["Waldo", "Arlene", "Violet"];
console.log(opponentNames[0]);
console.log(opponentNames[1]);
console.log(opponentNames[2]);
console.log(opponentNames.length);
// var opponentName = "Waldo";
// var opponentName = "Arlene";
// var opponentName = "Violet";
var opponentBones = 50;
var opponentJump = 12;

//jump function
var jump = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Dog Olympics!");

//ask player if they'd like to jump or run
var promptJump = window.prompt("Would you like to JUMP or SKIP this round? Enter 'JUMP' or 'SKIP' to choose.");

// if player chooses to jump, then jump
if (promptJump === "jump" || promptJump === "JUMP") {
//remove opponents bones by subtracting the amount set in the playerJump variable
opponentBones = opponentBones - playerJump;
console.log(
    playerName + " jumped higher than " + opponentName + ". " + opponentName + " now has " + opponentBones + " bones remaining."
);

//count opponents bones
if (opponentBones <=0) {
    window.alert(opponentName + " has lost!");
} else {
    window.alert(opponentName + " still has " + opponentBones + " bones left.");
};

//remove players bones by subtracting the amount set in opponentJump variable
playerBones = playerBones - opponentJump;
console.log(
    opponentName + " jumped " + playerName + ". " + playerName + " now has " + playerBones + " bones remaining."
);

//count players bones
if (playerBones <= 0) {
    window.alert(playerName + " has lost!");
} else {
     window.alert(playerName + " still has " + playerBones + " bones left.");
}
    
//if player chooses to skip
} else if (promptJump === "skip" || promptJump === "SKIP"){
//confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//if yes (true), leave game
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this round. Arf! Arf!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
}
//if no (false), ask question again by running jump () again
else {
    jump();
}

//if player did not choose 1 or 2 in prompt
} else {
    window.alert("You need to pick a valid option. Try again.");
}
};

//run jump function to start game
// jump ();




//     //subtract the value of 'playerJump' from the value of 'opponentBones' and use that result to update tehe value in the 'opponentBones' variable
// opponentBones = opponentBones - playerJump;

//     //log a resulting message to the console so we know that it worked.
// console.log( 
//     playerName + " jumped higher than " + opponentName + ". " + opponentName + " now has " + opponentBones + " bones remaining."
// );

// //count opponent's bones
// if (opponentBones <= 0) {
//     window.alert(opponentName + " lost!");
// }
// else {
//     window.alert(opponentName + " still has "+ opponentBones + " bones left.");
// }

//     //subtract the value of 'opponentJump' from the value of 'playerBones' and use that result to update the value in the 'playerBones' variable.
// playerBones = playerBones - opponentJump;
//     //log a resultng message to the console so we know that it worked.
//     console.log(
//         opponentName + " jumped higher than " + playerName + ". " + playerName + " now has " + playerBones + " bones remaining."
//     );

//     //count player's bones
//     if (playerBones <= 0) {
//         window.alert(playerName + " has lost!");
//     }
//     else {
//         window.alert(playerName + " still has " + playerBones + " bones left.");
//     }


//     jump();



//this ends the code that makes js load after html
}, false);