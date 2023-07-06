// question Array start here

const questionArr = [
    {
        q: "John is 25 years old. His sister Mary is half his age. How old is Mary?",
        a: [
            {text: "10", isCorrect: false},
            {text: "12", isCorrect: true},
            {text: "15", isCorrect: false},
            {text: "20", isCorrect: false},
        ],
    },
    {
        q: "Sarah is 16 years old. Her brother David is three years younger than her. How old is David?",
        a: [
            {text: "10", isCorrect: false},
            {text: "12", isCorrect: false},
            {text: "13", isCorrect: false},
            {text: "14", isCorrect: true},
        ]
    },
    {
        q: "Tom is twice as old as Lisa. If Tom is 30 years old, how old is Lisa?",
        a: [
            {text: "10", isCorrect: false},
            {text: "15", isCorrect: false},
            {text: "20", isCorrect: true},
            {text: "30", isCorrect: false},
        ]
    },
    {
        q: "Emily is 40 years old. Her son Jack is one-fourth her age. How old is Jack?",
        a: [
            {text: "8", isCorrect: true},
            {text: "10", isCorrect: false},
            {text: "12", isCorrect: false},
            {text: "16", isCorrect: false},
        ]
    },
    {
        q: "Jane is 18 years old. Her cousin Mark is seven years older than her. How old is Mark?",
        a: [
            {text: "21", isCorrect: true},
            {text: "25", isCorrect: false},
            {text: "27", isCorrect: false},
            {text: "30", isCorrect: false},
        ]
    },
    {
        q: "JMike is three times older than his son Alex. If Alex is 10 years old, how old is Mike?",
        a: [
            {text: "20", isCorrect: false},
            {text: "25", isCorrect: false},
            {text: "30", isCorrect: true},
            {text: "35", isCorrect: false},
        ]
    },
    {
        q: "Amanda is 15 years younger than her mother, who is 45 years old. How old is Amanda?",
        a: [
            {text: "15", isCorrect: false},
            {text: "20", isCorrect: true},
            {text: "25", isCorrect: false},
            {text: "30", isCorrect: false},
        ]
    },
    {
        q: "James is 40 years old. His daughter Lily is one-third his age. How old is Lily?",
        a: [
            {text: "10", isCorrect: false},
            {text: "12", isCorrect: false},
            {text: "13", isCorrect: true},
            {text: "15", isCorrect: false},
        ]
    },
    {
        q: "Sam is four years older than his sister Ella. If Ella is 20 years old, how old is Sam?",
        a: [
            {text: "16", isCorrect: false},
            {text: "20", isCorrect: false},
            {text: "24", isCorrect: true},
            {text: "26", isCorrect: false},
        ]
    },
    {
        q: "Jennifer is twice as old as her brother Eric. If Jennifer is 24 years old, how old is Eric?",
        a: [
            {text: "8", isCorrect: false},
            {text: "10", isCorrect: true},
            {text: "12", isCorrect: false},
            {text: "14", isCorrect: false},
        ]
    },
]
// question Array end here


// Declared variable for timer
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
//Declared variable for for checking correct answer
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

// code for checking correct answer end here 


// code for hidding next button start here
let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;

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
    
    // js to show score card after all question
    if(i>=9)
    {
        document.location.href = "../scoreCardfolder/scoreCard.html";  
    }
    if(i== questionArr.length-1){
        localStorage.setItem("timeTaken", 300-timeleft)
    }
})


// javaScript for timer
let timerElement = document.getElementById('timer');


function startTimer(duration){
    timeleft = duration;
    timeinterval = setInterval(updateTimer, 1000);
}
function updateTimer(){
    if(timeleft>0){
        timerElement.textContent = `${timeleft}`
        timeleft--;
    }else{
        document.location.href = '../scoreCardfolder/scoreCard.html'
    }
}