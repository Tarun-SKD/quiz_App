// question Array start here

const questionArr = [
    {
    q: "What is the probability of rolling a fair six-sided die and getting an even number?",
    a: [
        {text: "1/2", isCorrect: false},
        {text: "1/3", isCorrect: false},
        {text: "2/3", isCorrect: false},
        {text: "1/6", isCorrect: true},
    ],
},

{
    q: "A bag contains 5 red balls and 3 blue balls. If one ball is drawn at random, what is the probability of getting a blue ball?",
    a: [
        {text: "3/8", isCorrect: true},
        {text: "5/8", isCorrect: false},
        {text: "1/3", isCorrect: false},
        {text: "2/5", isCorrect: false},
    ]
},

{
    q: "In a deck of 52 playing cards, what is the probability of drawing a heart or a diamond?",
    a: [
        {text: "1/2", isCorrect: false},
        {text: "1/4", isCorrect: false},
        {text: "1/3", isCorrect: true},
        {text: "1/13", isCorrect: false},
    ]
},
{
    q: "A jar contains 10 red marbles, 8 blue marbles, and 6 green marbles. If one marble is randomly chosen, what is the probability of getting a blue marble?",
    a: [
        {text: "4/9", isCorrect: false},
        {text: "8/24", isCorrect: true},
        {text: "2/9", isCorrect: false},
        {text: "8/10", isCorrect: false},
    ]
},
{
    q: "A spinner is divided into 6 equal sections numbered 1 to 6. If the spinner is spun once, what is the probability of landing on an even number?",
    a: [
        {text: "1/3", isCorrect: false},
        {text: "1/6", isCorrect: false},
        {text: "1/2", isCorrect: true},
        {text: "2/3", isCorrect: false},
    ]
},
{
    q: "A bag contains 4 red balls, 3 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability of getting a red or a green ball?",
    a: [
        {text: "3/12", isCorrect: false},
        {text: "4/12", isCorrect: false},
        {text: "9/12", isCorrect: false},
        {text: "7/12", isCorrect: true},
    ]
},
{
    q: "A box contains 8 black pens and 4 blue pens. If two pens are drawn at random without replacement, what is the probability of getting two blue pens?",
    a: [
        {text: "1/12", isCorrect: true},
        {text: "3/11", isCorrect: false},
        {text: "1/4", isCorrect: false},
        {text: "4/33", isCorrect: false},
    ]
},
{
    q: "A fair coin is flipped three times. What is the probability of getting exactly two heads?",
    a: [
        {text: "1/4", isCorrect: false},
        {text: "1/2", isCorrect: false},
        {text: "3/8", isCorrect: true},
        {text: "3/4", isCorrect: false},
    ]
},
{
    q: "A standard deck of cards is shuffled well and one card is drawn. What is the probability of drawing a face card (jack, queen, or king)?",
    a: [
        {text: "1/4", isCorrect: false},
        {text: "1/13", isCorrect: false},
        {text: "3/52", isCorrect: false},
        {text: "12/52", isCorrect: true},
    ]
},
{
    q: "A bag contains 6 red marbles, 4 blue marbles, and 2 green marbles. If two marbles are drawn at random without replacement, what is the probability of getting one red and one blue marble?",
    a: [
        {text: "3/11", isCorrect: false},
        {text: "2/11", isCorrect: true},
        {text: "6/11", isCorrect: false},
        {text: "12/11", isCorrect: false},
    ]
}
]
// question Array end here

// JS to get question and options using id and putting content to them
let timeleft;
let timeinterval;
startTimer(300);

// JS to get question and options using id and putting content to them
let i = 0;
let j = 0;
let questionNum;
questionNum = i+1;

let question = document.getElementById('questions');
question.innerHTML = questionNum+". "+questionArr[i].q;

let option1 = document.getElementById('option1');
option1.innerHTML = questionArr[i].a[0].text;

let option2 = document.getElementById('option2');
option2.innerHTML = questionArr[i].a[1].text;
let option3 = document.getElementById('option3');
option3.innerHTML = questionArr[i].a[2].text;
let option4 = document.getElementById('option4');
option4.innerHTML = questionArr[i].a[3].text;



let score = document.getElementById('score');
let k = 1;
let correctAns = 0;

// code for checking correct answer start here 
option1.addEventListener('click', () => {
    if(questionArr[i].a[0].isCorrect === true){
        correctAns++;
        localStorage.setItem('correct', correctAns)
        score.innerHTML = k++;
        option1.style.backgroundColor = 'dodgerblue';
        option1.style.color = '#fff'
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
    }else{
       
        option1.style.backgroundColor = 'red';
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
    }
})

option2.addEventListener('click', () => {
    if(questionArr[i].a[1].isCorrect === true){
        correctAns++;
        localStorage.setItem('correct', correctAns)
        score.innerHTML = k++;
        option2.style.backgroundColor = 'dodgerblue';
        option2.style.color = '#fff'
        option1.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
    }else{
        option2.style.backgroundColor = 'red';
        option1.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
    }
})
option3.addEventListener('click', () => {
    if(questionArr[i].a[2].isCorrect === true){
        correctAns++;
        localStorage.setItem('correct', correctAns)
        score.innerHTML = k++;
        option3.style.backgroundColor = 'dodgerblue';
        option3.style.color = '#fff'
        option3.disabled = true;
        option1.disabled = true;
        option2.disabled = true;
        option4.disabled = true;
    }else{
        option3.style.backgroundColor = 'red';
        option1.disabled = true;
        option2.disabled = true;
        option4.disabled = true;
    }
})
option4.addEventListener('click', () => {
    if(questionArr[i].a[3].isCorrect === true){
        correctAns++;
        localStorage.setItem('correct', correctAns);
        score.innerHTML = k++;
        option4.style.backgroundColor = 'dodgerblue';
        option4.style.color = '#fff'
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
    }else{
        option4.style.backgroundColor = 'red';
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
    }
})


let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;
// code for checking correct answer end here 


// code for hidding next button start here

option1.addEventListener('click', () => {
    click1 = true;
    nextBtn.style.display = 'block';
})
option2.addEventListener('click', () => {
    click2 = true;
    nextBtn.style.display = 'block';
})
option3.addEventListener('click', () => {
    click3 = true;
    nextBtn.style.display = 'block';
})
option4.addEventListener('click', () => {
    click4 = true;
    nextBtn.style.display = 'block';
})

let nextBtn = document.getElementById('next_btn');

if((click1 && click2 && click3 && click4) == false){
    nextBtn.style.display = 'none';
}
// code for hidding next button end here

// Event listener for changing questions and options
nextBtn.addEventListener('click', () => {
nextBtn.style.display = 'none';
i++;
j++;
questionNum++;
question.innerHTML = questionNum+". "+questionArr[i].q;
option1.innerHTML =questionArr[i].a[0].text;
option2.innerHTML =questionArr[i].a[1].text;
option3.innerHTML =questionArr[i].a[2].text;
option4.innerHTML =questionArr[i].a[3].text;

option1.style.backgroundColor = 'azure'
option2.style.backgroundColor = 'azure'
option3.style.backgroundColor = 'azure'
option4.style.backgroundColor = 'azure'
option1.style.color = 'dodgerblue'
option2.style.color = 'dodgerblue'
option3.style.color = 'dodgerblue'
option4.style.color = 'dodgerblue'

    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;

// js to show score card agfter all question
if(i>=9)
{
    document.location.href = "../scoreCardfolder/scoreCard.html";  
}

if(i== questionArr.length-1){
    localStorage.setItem("timeTaken", 300-timeleft)
}
})


// js for timer
  let timerElement = document.getElementById('timer');


  function startTimer(duration){
        timeleft = duration;
        timeinterval = setInterval(updateTimer, 1000);
  }

  function updateTimer(){
    if(timeleft>0){
    timerElement.textContent = `${timeleft}`;
    timeleft--;
    }else{
        document.location.href = '../scoreCardfolder/scoreCard.html';
    }
  }
  
