var startBtn = document.querySelector(".start-btn");
var startEl = document.querySelector(".start");
var questOne = document.querySelector("#one")
var questTwo = document.querySelector("#two");
var questThree = document.querySelector("#three");	
var questFour = document.querySelector("#four");
var questFive = document.querySelector("#five");
var questSix = document.querySelector("#six");
var questSeven = document.querySelector("#seven");
var questEight = document.querySelector("#eight");

var timerEl = document.getElementById('countdown');

// var scoreArray = JSON.parse(localStorage.getItem("highscore")) || []
// var score = 0

function startGame() {
	startEl.classList.add("hide");
	questOne.classList.remove("hide");

	playGame();
}

function playGame() {
	var timeLeft = 120;

	var timer = setInterval(function () {
		if (timeLeft >= 0){
			timerEl.textContent = timeLeft + ' seconds remaining';
			timeLeft--;
		
			document.querySelector('.quest-one').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questOne.classList.add("right");
					questTwo.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questTwo.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-two').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questTwo.classList.add("right");
					questThree.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questThree.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-three').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questThree.classList.add("right");
					questFour.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questFour.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-four').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questFour.classList.add("right");
					questFive.classList.remove("hide");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questFive.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-five').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questFive.classList.add("right");
					questSix.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questSix.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-six').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questSix.classList.add("right");
					questSeven.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questSeven.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-seven').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questSeven.classList.add("right");
					questEight.classList.remove("hide");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					questEight.classList.remove("hide");
					timeLeft = timeLeft - 10;
				}	
			});

			document.querySelector('.quest-eight').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questEight.classList.add("right");
					endGame();			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
					endGame();
				}	
			});
		}
	}, 1000);
}

// function endGame() {

// 	var score = {
// 		initials: 'abc',
// 		score: 150
// 	}
// 	 scoreArray.push(score);
// 	 localStorage.setItem("highscore", JSON.stringify(scoreArray));
// 	 printScores();
// 	 return score;
// }

// function printScores() {
// 	var scoreList = document.querySelector(".score-list")
// 	scoreArray.forEach(score => {
// 		var li = document.createElement("li");
// 		li.textContent = score.initials + " " + score.score;
// 			scoreList.appendChild(li);
// 	});
// }

startBtn.addEventListener("click", startGame);