// ENCONTRAR ID DOS TD'S
var tdId
var move = function(td) {
 
  tdId = td.id; 
  console.log(tdId);
}

let x= 0;
//player1
var img1 = document.createElement("img");
img1.src="img/1.png";
img1.style.maxWidth="50px"
var src = document.getElementById(0);
src.appendChild(img1);
/*player2
var img2 = document.createElement("img");
img2.src="img/2.png";
img2.style.maxWidth="50px"
var src = document.getElementById(0);
src.appendChild(img2);*/



function rollDice() {
    x = Math.floor( Math.random()*6 + 1)
    console.log(x);
    document.getElementById("teste").innerHTML = x;
    
 };




 /*
 var player1;
 var player2;
 var currentPlayer=player1;

 if (currentPlayer == player1) {
    player1 = true;
        
} else {
  player2;
}*/
 
