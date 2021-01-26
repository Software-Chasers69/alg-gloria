let x= 0;
let movePlayer;

function rollDice() {
    let x = 0;
    x = Math.floor( Math.random()*6 + 1)
    console.log(x);
    document.getElementById("teste").innerHTML = x;
    return x;
 };

 var player1;
 var player2;
 var currentPlayer=player1;

 if (currentPlayer == player1) {
    
  } else {
    player2Score++;
  }

  console.log(currentPlayer);
 
