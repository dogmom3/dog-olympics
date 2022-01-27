//makes html load before js
document.addEventListener("DOMContentLoaded", function (event) {

    // function to generate a random numeric value
    var randomNumber = function (min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };
    //Greeting
    window.alert("ARF! ARF!");

    //jump function
    var jump = function (opponent) {
        //jump function statements
        // repeat and execute as long as the opponent-dog still has bones
        while (playerInfo.bones > 0 && opponent.bones > 0) {
            //ask player if they'd like to jump or run
            var promptJump = window.prompt("Would you like to JUMP or SKIP this round? Enter 'JUMP' or 'SKIP' to choose.");

            //if player picks "skip" confirm and then stop the loop
            if (promptJump === "skip" || promptJump === "SKIP") {
                //confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                //if yes (true), leave game
                if (confirmSkip) {
                    window.alert(playerInfo.name + " has decided to skip this round. Arf! Arf!");
                    //subtract money from playerInfo.money for skipping
                    playerInfo.money = Math.max(0, playerInfo.money - 10);
                    console.log("playerInfo.money", playerInfo.money);
                    break;
                }
            }

            // generate random damage value based on player's jump power
            var damage = randomNumber(playerInfo.jump - 3, playerInfo.jump);
            opponent.bones = Math.max(0, opponent.bones - damage);
            console.log(
                playerInfo.name + " jumped higher than " + opponent.name + ". " + opponent.name + " now has " + opponent.bones + " bones remaining."
            );

            //count opponents bones
            if (opponent.bones <= 0) {
                window.alert(opponent.name + " has lost!");

                //award player money for wining
                playerInfo.money = playerInfo.money + 20;

                //leave while() loop since opponent has lost
                break;
            } else {
                window.alert(opponent.name + " still has " + opponent.bones + " bones left.");
            }

            // generate random damage value based on opponent's jump power
            var damage = randomNumber(opponent.jump - 3, opponent.jump);

            playerInfo.bones = Math.max(0, playerInfo.bones - damage);

            console.log(
                opponent.name + " jumped " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.bones + " bones remaining."
            );

            //count players bones
            if (playerInfo.bones <= 0) {
                window.alert(playerInfo.name + " has lost!");
                //leave while() loop if player has lost
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.bones + " bones left.");
            }
        }
    };
    //function to start a new game
    var startGame = function () {
        //reset player stats
        playerInfo.reset();
        //for loop
        for (var i = 0; i < opponentInfo.length; i++) {
            //if player still has bones, keep jumping
            if (playerInfo.bones > 0) {
                //let player know what round the are in, arrays start at 0, so it needs to have a 1 added to it.
                window.alert("Welcome to Dog Olympics! Round " + (i + 1));

                //pick new opponent to jump based on the index of the opponent.names array
                var pickedOpponentObj = opponentInfo[i];

                //reset opponent.bones before starting new jump
                pickedOpponentObj = randomNumber(40, 60);

                //pass the pickedopponent.name variable's value into the fight function, where it will assume the value of the opponent.name parameter
                jump(pickedOpponentObj);

                //if player is still participating, and we're not at the last opponent in the array
                if (playerInfo.bones > 0 && i < opponentInfo.length - 1) {
                    //ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The game is over, visit the store before the next round?");
                    //if yes, take them to the store() function
                    if (storeConfirm) {
                        shop();
                    }
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
        window.alert("The game has now ended. Let's see how you did!");
        //if player still has bones, player wins
        if (playerInfo.bones > 0) {
            window.alert("Great job, you've won the game! You now have a score of " + playerInfo.money + ".");
        }
        else {
            window.alert("You've lost the game. Jump higher next time!");
        }
        //ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            //restart the game
            startGame();
        } else {
            window.alert("Thank you for participating in Dog Olympics! Come back soon!");
        }
    };

    var shop = function () {
        //ask player what they'd like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your bones, UPGRADE your jump, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": // new case
            case "refill":
                playerInfo.refillBones();
                break;
            case "UPGRADE":
            case "upgrade":
                playerInfo.upgradeJump();
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
    //player info
    var playerInfo = {
        name: window.prompt("What is your dog's name?"),
        bones: 100,
        jump: 10,
        money: 10,
        reset: function () {
            this.bones = 100;
            this.money = 10;
            this.jump = 10;
        }, //coma!
        refillBones: function () {
            if (this.money >= 7) {
                window.alert("Refilling player's bones by 2 for 7 dollars.");
                this.bones += 20;
                this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        }, //coma!
        upgradeJump: function () {
            if (this.money >= 7) {
                window.alert("Upgrading player's jump by 6 for 7 dollars.");
                this.jump + - 6;
                this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        }
    };
//opponent info
    var opponentInfo = [
        {
            name: "Waldo",
            jump: randomNumber(10, 14)
        },
        {
            name: "Arlene",
            jump: randomNumber(10, 14)
        },
        {
            name: "Violet",
            jump: randomNumber(10, 14)
        }
    ];

    //start the game when the page loads
    startGame();

    //end of code to make html load before js
});