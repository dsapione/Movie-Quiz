var startBtn = document.querySelector(".start-btn");
var startEl = document.querySelector(".start");
var quiz = document.querySelector(".quiz")
var questOne = document.querySelector("#one");
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
var initialsArray = ''
var scoreArray = JSON.parse(localStorage.getItem("highscore")) || []


function startGame() {
	startEl.classList.add("hide");
	questOne.classList.remove("hide");

	playGame();
}

function playGame() {
	var timeLeft = 60;

	var timer = setInterval(function () {
		if (timeLeft > -1){
			timerEl.textContent = timeLeft + ' seconds remaining';
			timeLeft--;
		
			document.querySelector('.quest-one').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}
				
				setTimeout(function() {					
					questOne.classList.add("hide");
					questTwo.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-two').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {
					questTwo.classList.add("hide");					
					questThree.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-three').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {
					questThree.classList.add("hide");					
					questFour.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-four').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {	
					questFour.classList.add("hide");			
					questFive.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-five').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");			
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {
					questFive.classList.add("hide");
					questSix.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-six').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {
					questSix.classList.add("hide");					
					questSeven.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-seven').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");					
					timeLeft = timeLeft - 10;
				}	

				setTimeout(function() {
					questSeven.classList.add("hide");					
					questEight.classList.remove("hide");
				}, (0500));
			});

			document.querySelector('.quest-eight').addEventListener("click", function(e) {
				var target = e.target;
				var targetId = e.target.id;
				
				if (targetId === "correct"){
					target.setAttribute("id", "right");
					clearInterval(timer);					
					timeLeftArray.push(timeLeft);
					endGame();					 		
				}
				else if (targetId === "") {
					target.setAttribute("id", "wrong");
					timeLeft = timeLeft - 10;
					if (timeLeft < 0) {
						timeLeft = 0
					}
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

		else if (timeLeft <= 0) {
			quiz.classList.add("hide");
			highScore.classList.remove("hide");
			timerEl.classList.add("hide");			
			clearInterval(timer);
			timeLeftArray.push(0);
			endGame();					
		}		

	}, 1000);	
}

function endGame(results) {
	var initialsArray = (window.prompt('What are your initials?'));
	if (initialsArray === "") {
		var initialsArray = 'abc'
	}
	var results = {
		initials: initialsArray,
		score: timeLeftArray
	}	
	 scoreArray.push(results);
	 localStorage.setItem("highscore", JSON.stringify(scoreArray));
	 printScores();
}

function printScores() {
	scoreArray.forEach(results => {
		var li = document.createElement("li");
		li.textContent = results.initials + " " + results.score;
		scoreEl.appendChild(li);
	});
}

startBtn.addEventListener("click", startGame);