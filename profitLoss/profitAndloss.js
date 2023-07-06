// question Array start here

let questionArr = [
    {
        q: "An item is bought for $50 and sold for $70. What is the profit percentage?",
        a: [
        {text: "10%", isCorrect: false},
        {text: "20%", isCorrect: false},
        {text: "10%", isCorrect: true},
        {text: "10%", isCorrect: false},
        ]
    },
    {
        q: "A shopkeeper purchased a book for $20 and sold it for $15. What is the loss percentage?",
        a: [
        {text: "10%", isCorrect: false},
        {text: "15%", isCorrect: true},
        {text: "20%", isCorrect: false},
        {text: "25%", isCorrect: false},
        ]
    },
    {
        q: "A company incurred a cost of $500 to produce a product and sold it for $700. What is the profit percentage?",
        a: [
        {text: "10%", isCorrect: false},
        {text: "20%", isCorrect: false},
        {text: "30%", isCorrect: true},
        {text: "40%", isCorrect: false},
        ]
    },
    {
        q: "A store sells a product at a 25% loss. If the cost price is $80, what is the selling price?",
        a: [
        {text: "$60", isCorrect: false},
        {text: "$65", isCorrect: false},
        {text: "$70", isCorrect: false},
        {text: "$75", isCorrect: true},
        ]
    },
    {
        q: "A shirt is sold for $40, resulting in a loss of 20%. What was the cost price of the shirt?",
        a: [
        {text: "$32", isCorrect: true},
        {text: "$40", isCorrect: false},
        {text: "$48", isCorrect: false},
        {text: "$50", isCorrect: false},
        ]
    },
    {
        q: "A company bought 100 units of a product for $500. If they sold each unit for $7, what is the profit or loss percentage?",
        a: [
        {text: "10% profit", isCorrect: true},
        {text: "10% loss", isCorrect: false},
        {text: "20% profit", isCorrect: false},
        {text: "20% loss", isCorrect: false},
        ]
    },
    {
        q: "A laptop was bought for $800 and sold for $960. What is the profit percentage?",
        a: [
        {text: "10%", isCorrect: false},
        {text: "15%", isCorrect: true},
        {text: "20%", isCorrect: false},
        {text: "25%", isCorrect: false},
        ]
    },
    {
        q: "A shopkeeper sells an item at a 30% profit. If the selling price is $260, what is the cost price?",
        a: [
        {text: "$200", isCorrect: true},
        {text: "$220", isCorrect: false},
        {text: "$240", isCorrect: false},
        {text: "$250", isCorrect: false},
        ]
    },
    {
        q: "A product was bought for $120 and sold for $90. What is the loss percentage?",
        a: [
            {text: "10%", isCorrect: false},
            {text: "15%", isCorrect: false},
            {text: "20%", isCorrect: true},
        {text: "25%", isCorrect: false},
    ]
},
{
        q: "A company sold 100 units of a product, resulting in a profit of $500. If the cost price per unit is $10, what is the selling price per unit?",
        a: [
        {text: "$10", isCorrect: false},
        {text: "$20", isCorrect: false},
        {text: "$25", isCorrect: true},
        {text: "$30", isCorrect: false},
    ]
    },
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
  

// js for timer
let timerElement = document.getElementById('timer');

function startTimer(duration){
    timeleft = duration;
    timeinterval = setInterval(updateTimer, 1000);
}

function updateTimer(){
    if(timeleft > 0){
        timerElement.textContent = `${timeleft}`;
        timeleft--;
    }else{
        document.location.href = "../scoreCardfolder/scoreCard.html"
    }
}