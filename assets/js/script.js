var buttonEl = document.querySelector('#start-btn')
// answer lists
var answerBtnEl = document.querySelector(".answer-list")
var answerBtn2El = document.querySelector(".answer-list2")
var answerBtn3El = document.querySelector(".answer-list3")
var answerBtn4El = document.querySelector(".answer-list4")
var answerBtn5El = document.querySelector(".answer-list5")
// start menu and all question boxes
var startQuizEl = document.querySelector('#start-menu')
var quizScreenEl = document.querySelector('#quiz-box')
var quizScreen2El = document.querySelector('#quiz-box2')
var quizScreen3El = document.querySelector('#quiz-box3')
var quizScreen4El = document.querySelector('#quiz-box4')
var quizScreen5El = document.querySelector('#quiz-box5')
// highscore page with buttons
var resultScreenEl = document.querySelector('#enterHS')
var restartBtnEl = document.querySelector('#restart-btn')
var continueBtnEl = document.querySelector('#continue-btn')


function startQuiz () {
    startQuizEl.style.display = 'none'
    resultScreenEl.style.display = 'none';
    quizScreenEl.style.display = 'block'
    // quiz start confirmation
    console.log('step one complete')

    answerBtnEl.addEventListener('click', quesTwo);
}



function quesTwo (){
    quizScreenEl.style.display = 'none'
    quizScreen2El.style.display = 'block'
    // step 2 confirmation
    console.log('step two complete')
    
    answerBtn2El.addEventListener('click', quesThree);
   
}

function quesThree () {
    quizScreen2El.style.display = 'none';
    quizScreen3El.style.display = 'block';
    // step 3 confirmation
    console.log('step three complete')

    answerBtn3El.addEventListener('click', quesFour);

}

function quesFour () {
    quizScreen3El.style.display = 'none';
    quizScreen4El.style.display = 'block';
    // step 4 confirmation
    console.log('step four complete')

    answerBtn4El.addEventListener('click', quesFive);

}

function quesFive () {
    quizScreen4El.style.display = 'none';
    quizScreen5El.style.display = 'block';
    // step 5 confirmation
    console.log('step five complete')

    answerBtn5El.addEventListener('click', resultPage);

}

function resultPage () {
    quizScreen5El.style.display = 'none';
    resultScreenEl.style.display = 'block';

    restartBtnEl.addEventListener('click', startQuiz);
}


buttonEl.addEventListener('click', startQuiz);
