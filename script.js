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
  document.getElementById("timer").textContent = totalTime;
  document.getElementById("questions").textContent =
    questionsArray[questionIndex].title;

  if (totalTime % 15 === 0) {
    questionIndex++;
  } else if (totalTime === 0) {
    clearInterval(setIntervalID);
  }
}

// Click button and change visability
document.getElementById("start-btn").addEventListener("click", function () {
  startQuiz();
});

function startQuiz() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("begin").classList.remove("hidden");
  setIntervalID = setInterval(countdown, 1000);
}
