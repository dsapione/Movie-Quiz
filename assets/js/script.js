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
var timerEl = document.querySelector('.countdown');
var highScore = document.querySelector(".highscore");
var scoreEl = document.querySelector("#score-list");
var timeLeftArray = []
var scoreArray = JSON.parse(localStorage.getItem("highscore")) || []
// var score = 0
console.log(timeLeftArray)

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
				}, (0500));
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
				}, (0500));
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
				}, (0500));
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
				}, (0500));
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
				}, (0500));
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
				}, (0500));
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
				}, (0500));
			});

			document.querySelector('.quest-eight').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					questEight.classList.add("right");
					clearInterval(timer);
					timeLeftArray.push(timeLeft);
					endGame();					 		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;	
					clearInterval(timer);
					timeLeftArray.push(timeLeft);
					endGame();										
				}	

				setTimeout(function() {
					highScore.classList.remove("hide");
					timerEl.classList.add("hide");				
					questEight.classList.add("hide");											
				}, (0500));
			});
		}

		else if (timeLeft = 0){
			timeLeftArray.push(timeLeft);
			clearInterval(timer);
			endGame();					
		}		
	}, 1000);	
}

function endGame(results) {
	// debugger	
	var results = {
		score: timeLeftArray
	}
	 scoreArray.push(results);
	 localStorage.setItem("highscore", JSON.stringify(scoreArray));
	 printScores();
	 return results;
}

function printScores() {
	scoreArray.forEach(results => {
		var li = document.createElement("li");
		li.textContent = results.score;
		scoreEl.appendChild(li);
	});
}

startBtn.addEventListener("click", startGame);