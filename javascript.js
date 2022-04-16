let compChoice;
let playerOutput = "";
let computerOutput = "";
let playerSelection = "";
let computerSelection  = "";
let pWins = 0;
let cWins = 0;

const selection = document.getElementsByClassName("selection-button");
var rock = document.getElementById("selection-rock");
var paper = document.getElementById("selection-paper");
var scissors = document.getElementById("selection-scissors");
var resultText = document.getElementById("result-text");
var playerResult = document.getElementById("player-result");
var computerResult = document.getElementById("computer-result");
var playerWins = document.getElementById("player-score");
var computerWins = document.getElementById("computer-score");


function start(){
	playerWins.innerHTML = 0;
	computerWins.innerHTML = 0;
}

start();

function computerPlay(max){
let temp = Math.floor(Math.random()*max);
if(temp == 0){
computerOutput = "Rock"
}
if(temp == 1){
computerOutput = "Paper"
}
if(temp == 2){
computerOutput = "Scissors"
}

//console.log(output);
return computerOutput;
}



function playerPlay(max){
let temp = Math.floor(Math.random()*max);
if(temp == 0){
playerOutput = "Rock"
}
if(temp == 1){
playerOutput = "Paper"
}
if(temp == 2){
playerOutput = "Scissors"
}
return playerOutput;
}


//checks the player and AI selection
function playRound(playerSelection, computerSelection){
	if(playerSelection == computerSelection)
	{
		return "Draw";
	}

	if(playerSelection != computerSelection)
	{
	
	if(playerSelection === "Rock" && computerSelection === "Scissors" 
		|| playerSelection === "Paper" && computerSelection === "Rock"
		|| playerSelection === "Scissors" && computerSelection === "Paper")
	{
		pWins+=1;
		playerWins.textContent = pWins;
		return "Win";
	}
	else
	{
		cWins+=1;
		computerWins.textContent = cWins;
		return "Lose";
	}

}
	
	if(computerWins == 5)
	{
		//Game Over

	}
	if(playerWins == 5)
	{
		//Victory Royale
	}
}




rock.onclick = function(){
	playerOutput = "Rock"
	let temp = computerPlay(3);
	console.log("Player chose: "+ playerOutput+ " Computer chose: " + temp);
	resultText.innerHTML = playRound(playerOutput,temp);
	playerResult.innerHTML =  playerOutput;
	computerResult.innerHTML = temp;
};

paper.onclick = function(){
	playerOutput = "Paper"
	let temp = computerPlay(3);
    console.log("Player chose: "+ playerOutput+ " Computer chose: " + temp);
	resultText.innerHTML = playRound(playerOutput,temp);
	playerResult.innerHTML = playerOutput;
	computerResult.innerHTML =  temp;

};

scissors.onclick = function(){
	playerOutput = "Scissors"
	let temp = computerPlay(3);
	console.log("Player chose: "+ playerOutput+ " Computer chose: " + temp);
    resultText.innerHTML = playRound(playerOutput,temp);
    playerResult.innerHTML = playerOutput;
	computerResult.innerHTML = temp;
};


