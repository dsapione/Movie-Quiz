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
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}
				
				setTimeout(function(e) {					
					questOne.classList.add("hide");
					questTwo.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-two').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questTwo.classList.add("right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					questTwo.classList.add("hide");					
					questThree.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-three').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questThree.classList.add("right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					questThree.classList.add("hide");					
					questFour.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-four').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questFour.classList.add("right");	
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {	
					questFour.classList.add("hide");			
					questFive.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-five').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questFive.classList.add("right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					questFive.classList.add("hide");
					questSix.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-six').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questSix.classList.add("right");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					questSix.classList.add("hide");					
					questSeven.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-seven').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questSeven.classList.add("right");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					questSeven.classList.add("hide");					
					questEight.classList.remove("hide");
				}, (1250));
			});

			document.querySelector('.quest-eight').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questEight.classList.add("right");
					clearInterval(timer);		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					clearInterval(timer);
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function(e) {
					endGame();
				}, (1250));
			});
		}

		else if (timeLeft = 0){
			clearInterval(timer);
			endGame()
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