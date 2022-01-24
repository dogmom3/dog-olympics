// //this code makes js load after html
// document.addEventListener('DOMContentLoaded', function(){

// Game States
// "WIN" - Player dog has out jumped all opponent dogs
//    * Jumps with all opponent dogs
//    * Out jump each opponent dog
// "LOSE" - Player dog's bones are zero or less


var playerBones = 100;
var playerJump = 10;
var playerMoney = 10;

var opponentNames = ["Waldo", "Arlene", "Violet"];
var opponentBones = 50;
var opponentJump = 12;

//alert players that they are starting the round
window.alert("Welcome to Dog Olympics!");
var playerName = window.prompt("What is your dog's name?");

//jump function
var jump = function (opponentName) {
    //jump function statements
    // repeat and execute as long as the opponent-dog still has bones
    while (playerBones > 0 && opponentBones > 0) {
        //ask player if they'd like to jump or run
        var promptJump = window.prompt("Would you like to JUMP or SKIP this round? Enter 'JUMP' or 'SKIP' to choose.");
        
        //if player picks "skip" confirm and then stop the loop
        if (promptJump === "skip" || promptJump === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave game
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this round. Arf! Arf!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

            //remove opponents bones by subtracting the amount set in the playerJump variable
            opponentBones = opponentBones - playerJump;
            console.log(
                playerName + " jumped higher than " + opponentName + ". " + opponentName + " now has " + opponentBones + " bones remaining."
            );

            //count opponents bones
            if (opponentBones <= 0) {
                window.alert(opponentName + " has lost!");

                //award player money for wining
                playerMoney = playerMoney + 20;

                //leave while() loop since opponent has lost
                break;
            } else {
                window.alert(opponentName + " still has " + opponentBones + " bones left.");
            }

            //remove players bones by subtracting the amount set in opponentJump variable
            playerBones = playerBones - opponentJump;
            console.log(
                opponentName + " jumped " + playerName + ". " + playerName + " now has " + playerBones + " bones remaining."
            );

            //count players bones
            if (playerBones <= 0) {
                window.alert(playerName + " has lost!");
                //leave while() loop if player has lost
                break;
            } else {
                window.alert(playerName + " still has " + playerBones + " bones left.");
            }
        }
    };

//             //if no (false), ask question again by running jump () again
//          else jump();
//     }

//     //if player did not choose 1 or 2 in prompt
// } else {
//     window.alert("You need to pick a valid option. Try again.");
//         }
//     }
// };

//for loop
for (var i = 0; i < opponentNames.length; i++) {
    var pickedOpponentName = opponentNames[i];
    opponentBones = 50;
    //call function with opponent dog
    jump(pickedOpponentName[i]);
}
