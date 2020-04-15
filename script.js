/* 1.  Start button 
 2. high score list 
3. timer 
4. Questions 
5. If correct, move to next question
6. If incorrect, 15 seconds are decucted 
7. Starts from 75 seconds
8. each question gets 15 seconds
9. When time runs out/ or all questions are answered, user is prompted to enter their initials. 
10. Score and initials are stored in Local Storage 
*/
var questionsArray = questions;
var totalTime = questionsArray.length * 15;
var questionIndex = 0;
var setIntervalId;

function countdown() {
  totalTime = totalTime - 1;

  if (totalTime >= 0) {
    document.getElementById("timer").textContent = totalTime;
  }

  if (questionsArray[questionIndex] != undefined) {
    document.getElementById("questions").textContent =
      questionsArray[questionIndex].title;
    var ul = document.createElement("ul");
    ul.classList.add("list-group");
    document.getElementById("choices").textContent = "";
    for (var i = 0; i < questionsArray[questionIndex].choices.length; i++) {
      var li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = questionsArray[questionIndex].choices[i];

      li.addEventListener("click", function () {
        var choice = this.textContent;
        // alert(choice);
      });
      ul.appendChild(li);
    }
    document.getElementById("choices").appendChild(ul);
  }

 

  if (totalTime % 15 === 0) {
    questionIndex++;
  } else if (totalTime <= 0) {
    clearInterval(setIntervalId);
       document.getElementById("begin").classList.add("hidden")
       document.getElementById("highscore").classList.remove("hidden")
       document.getElementById("initials").classList.remove("hidden")
  }
}
document.getElementById("add-initial").addEventListener("click", function(){
    document.getElementById("initials").classList.add("hidden")
    document.getElementById("score").classList.remove("hidden")

})
// Click button and change visability
document.getElementById("start-btn").addEventListener("click", function () {
  startQuiz();
});

function startQuiz() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("begin").classList.remove("hidden");
  setIntervalId = setInterval(countdown, 1000);
}

document.getElementById("clear-score").addEventListener("click", function(){
    const highScore = localStorage.getItem("highScore")
    if (highScore != undefined) {
        localStorage.setItem("highScore", "0")
    }
})

document.getElementById("go-back").addEventListener("click", function(){
    totalTime = questionsArray.length * 15;
    questionIndex = 0 
    document.getElementById("start").classList.remove("hidden")
    document.getElementById("score").classList.add("hidden")
})