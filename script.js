var playerName = window.prompt("What is your dog's name?");
var playerBones = 100;
var playerJump = 10;
var playerMoney = 10;

var opponentNames = ["Waldo", "Arlene", "Violet"];
var opponentBones = 50;
var opponentJump = 12;

//alert players that they are starting the round
window.alert("Welcome to Dog Olympics!");


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
//function to start a new game
var startGame = function () {
    //reset player stats
    playerBones = 100;
    playerJump = 10;
    playerMoney = 10;

    //for loop
    for (var i = 0; i < opponentNames.length; i++) {
        //if player still has bones, keep jumping
        if (playerBones > 0) {
            //let player know what round the are in, arrays start at 0, so it needs to have a 1 added to it.
            window.alert("Welcome to Dog Olympics! Round " + (i + 1));

            //pick new opponent to jump based on the index of the opponentNames array
            var pickedOpponentName = opponentNames[i];

            //reset opponentBones before starting new jump
            opponentBones = 50;

            //use debugger to pause script from running and check whats going on at that moment in the code
            //debugger;

            //pass the pickedOpponentName variable's value into the fight function, where it will assume the value of the opponentName parameter
            jump(pickedOpponentName);
        }
        jump(pickedOpponentName);
        //if player is still participating, and we're not at the last opponent in the array
        if (playerBones > 0 && i < opponentNames.length - 1) {
            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The game is over, visit the store before the next round?");
            //if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
        }
        //if the player is out of bones, stop the game
        else {
            window.alert("You have been defeated! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of bones or opponents to jump, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function () {
    //if player still has bones, player wins
    if (playerBones > 0) {
        window.alert("Great job, you've won the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost the game. Jump higher next time!");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for participating in Dog Olympics! Come back soon!");
    }
}

var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your bones, UPGRADE your jump, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >=7) {
            window.alert("Refilling player's bones by 20 for 7 dollars.");

            // increase health and decrease money
            playerBones = playerBones + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7){
            window.alert("Upgrading player's jump by 6 for 7 dollars.");

            // increase jump and decrease money
            playerJump = playerJump + 6;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
//start the game when the page loads
startGame();