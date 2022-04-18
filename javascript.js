let compChoice;
let playerOutput = "";
let computerOutput = "";
let playerSelection = "";
let computerSelection  = "";
let pWins = 0;
let cWins = 0;
let isGameActive = true;

const selection = document.getElementsByClassName("selection-button");
var rock = document.getElementById("player-selection-rock");
var paper = document.getElementById("player-selection-paper");
var scissors = document.getElementById("player-selection-scissors");
var resultText = document.getElementById("result-text");
var playerResult = document.getElementById("player-result");
var computerResult = document.getElementById("computer-result");
var playerWins = document.getElementById("player-score");
var computerWins = document.getElementById("computer-score");
var finalResultText = document.getElementById("final-result-text");

var playerChoiceRock = document.getElementById("player-choice-rock");
var playerChoicePaper = document.getElementById("player-choice-paper");
var playerChoiceScissors = document.getElementById("player-choice-scissors");
var computerChoiceRock = document.getElementById("computer-choice-rock");
var computerChoicePaper = document.getElementById("computer-choice-paper");
var computerChoiceScissors = document.getElementById("computer-choice-scissors");

const selectedChoices = 
[playerChoiceRock, playerChoicePaper, playerChoiceScissors, 
computerChoiceRock, computerChoicePaper, computerChoiceScissors
];

/////////////////////////////////////////////////////////////////////////

function start(){
	playerWins.innerHTML = 0;
	computerWins.innerHTML = 0;
}

function reset(){
for(var i = 0, length = selectedChoices.length; i < length; i++){
	selectedChoices[i].style.backgroundColor = 'grey';
	selectedChoices[i].style.opacity = "0.5";
	}
	console.log('RESET');
}

function computerPlay(max){
	let temp = Math.floor(Math.random()*max);
	if(temp == 0){
		computerOutput = "Rock";
		computerChoiceRock.style.backgroundColor = 'yellow';
		computerChoiceRock.style.opacity = '1'

	}
	if(temp == 1){
		computerOutput = "Paper"
		computerChoicePaper.style.backgroundColor = 'yellow';
		computerChoicePaper.style.opacity = '1'	
	}
	if(temp == 2){
		computerOutput = "Scissors"
		computerChoiceScissors.style.backgroundColor = 'yellow';
		computerChoiceScissors.style.opacity = '1'
	}

return computerOutput;
}



function playerPlay(max){
	let temp = Math.floor(Math.random()*max);
	if(temp == 0){
		playerOutput = "Rock"
		playerChoiceRock.style.backgroundColor = 'yellow';
	}
	if(temp == 1){
		playerOutput = "Paper"
		playerChoicePaper.style.backgroundColor = 'yellow';
	}
	if(temp == 2){
		playerOutput = "Scissors"
		playerChoiceScissors.style.backgroundColor = 'yellow';
		
	}
	return playerOutput;
}


function scoreCheck()
{
	if(cWins == 5)
	{
		finalResultText.innerHTML = "Bear Wins. Refresh page to play again!";
		isGameActive = false;
		console.log('computer wins');

	}
	if(pWins == 5) 
	{
		finalResultText.innerHTML = "Cage Wins. Refresh page to play again";
		isGameActive = false;
		console.log("player wins");
	}
}

//checks the player and AI selection
function playRound(playerSelection, computerSelection){
	//reset();

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
			scoreCheck();
			playerWins.textContent = pWins;
			return "Win";
		}
		else
		{
			cWins+=1;
			scoreCheck();
			computerWins.textContent = cWins;
			return "Lose";
		} 
	}

}


start();
/////////////BUTTONS///////////////////////////

rock.onclick = function(){
	if(isGameActive == true){
		reset();
		playerOutput = "Rock"
		playerChoiceRock.style.backgroundColor = 'yellow';
		playerChoiceRock.style.opacity = '1'
		let temp = computerPlay(3);
		console.log("Player chose: "+ playerOutput+ " Bear chose: " + temp);
		resultText.innerHTML = playRound(playerOutput,temp);
	}
};

paper.onclick = function(){
	if(isGameActive == true){
		reset();
		playerOutput = "Paper"
		playerChoicePaper.style.backgroundColor = 'yellow';
		playerChoicePaper.style.opacity = '1'		
		let temp = computerPlay(3);
		console.log("Player chose: "+ playerOutput+ " Bear chose: " + temp);
		resultText.innerHTML = playRound(playerOutput,temp);

	}
};

scissors.onclick = function(){
	if(isGameActive == true){
		reset();
		playerOutput = "Scissors"
		playerChoiceScissors.style.backgroundColor = 'yellow';
		playerChoiceScissors.style.opacity = '1'
		let temp = computerPlay(3);
		console.log("Player chose: "+ playerOutput+ " Bear chose: " + temp);
		resultText.innerHTML = playRound(playerOutput,temp);
	}
};


///////////////////////////////////////////////////