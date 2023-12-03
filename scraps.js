let verificationHappened = false;
let verification;

function verifyRound(verification) {
    /*verify if the input is valid
    if its not valid repeat input UNTIL valid*/

    if (playerInput !== 'rock' || playerInput !== 'paper' || playerInput !== 'rock') {
        console.log('verification started');
        while (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'rock') {
            console.log('player input not valid');
            playerInput = prompt("the input you submitted is not a valid one please choose between rock, paper or scissors");
            playerChoice = playerInput.toLowerCase();
            console.log('new player input is ' + playerInput);
        }
        console.log('verification was succesful');
    }
    verificationHappened = true;
    return verificationHappened;
}

if (verificationHappened == true) {
    console.log('verification is ' + verification);
    console.log('verification was succesful');


    verificationHappened = false;

}

if (roundFiveHappened == true) {
    console.log('Revancha\'s veredict is' + veredict);
    if (veredict == 'tie') {
        console.log('we have to repeat the revancha');
    }
} else {
    console.log('Round ' + i + "\'s veredict is " + veredict);
}









let veredictFive;
let roundFiveHappened;

if (i == 5) {
    roundFiveHappened = true;
};

if (i == 6 && playerVictories === computerVictories) {
    i--;
};


        /*ignore this*/

        /*
    
            let playerChoice = "scissors";
            let computerChoice = "paper";
    
            function playRound(playerChoice, computerChoice) {
                if (playerChoice === "rock") {
                    if (computerChoice === "rock") {
                        console.log("it's a tie!!! rock stares at rock :/");
                    } else if (computerChoice === "paper") {
                        console.log("player loses, paper eats rock... yum!");
                    } else if (computerChoice === "scissors") {
                        console.log("player wins! rock beats the shit out of scissors!");
                    }
                } else if (playerChoice === "paper") {
                    if (computerChoice === "rock") {
                        console.log("player wins! paper eats rock... yum!");
                    } else if (computerChoice === "paper") {
                        console.log("it's a tie!!! paper stares at paper :/");
                    } else if (computerChoice === "scissors") {
                        console.log("player loses, scissors obliterates paper!");
                    }
                } else if (playerChoice === "scissors"){
                    if (computerChoice === "rock") {
                        console.log("player loses! rock beats the shit out of scissors!");
                    } else if (computerChoice === "paper") {
                        console.log("player wins! scissors obliterates paper!");
                    } else if (computerChoice === "scissors") {
                        console.log("it's a tie!!! scissors stares at scissors :/");
                    }
                }
            }
    
            playRound();
    */