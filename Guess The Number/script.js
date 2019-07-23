let wrongGuessCount;
let randomNumber;
function resetGame() {
    randomNumber = parseInt(Math.random() * 101);
    wrongGuessCount = 0;
}

resetGame();

function guessTheNumber(){
    let userInput=parseInt(document.querySelector("input").value);

    if(userInput > ramdomNumber){
        alert("To Big");
        count++;
    } else if(userInput < randomNumber){
        alert("To Small");
        count++;
    }else{
        alert("Congratulation!! You have won! your wrong guess" + wrongGuessCount);
        resetGame()
    }
}
