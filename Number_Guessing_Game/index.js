// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

const prompt = require('prompt-sync')({sigint: true});
  
  

let User = {
username,
points
}
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function guessingMachine(stage){
    guess = prompt(`Hi ${userName}, guess a number between 1 and ${maxLimit}`);
    
        num =  randomNumber(1, stage);
        if (num == Number(guess)) {
            return true;
        }
return false;
}



function guessingGame(){
    newUser = User();

    let userName = prompt('Enter your username: ');
    
    newUser.username = userName,
    newUser.points = 0
    maxLimit =2;
}


function playgame(user, maxLimit){
    result = false;
    while(! result){
        result  = guessingMachine(maxLimit)
    }
    user.points = user.points+1;

}