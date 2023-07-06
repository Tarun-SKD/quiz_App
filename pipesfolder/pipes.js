// question Array start here

var questionArr = [
    {
      q: "Three taps A,B and C can fill a tank in 12,15 and 20 hours respectively. If A is open all the time and B, C are open for one hour each alternatively, the tank will be full in:",
      a: [
        { text: "6 HRS", isCorrect: false },
        { text: "20/3 HRS", isCorrect: false },
        { text: "7 HRS",  isCorrect: true},
        { text: "15/2 HRS", isCorrect: false },
      ],
    },
    {
      q: "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
      a: [
        { text: "5 MIN", isCorrect: false },
        { text: "9 MIN", isCorrect: true },
        { text: "10 MIN", isCorrect: false },
        { text: "15 MIN", isCorrect: false },
      ],
    },
    {
      q: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?",
      a: [
        { text: "15 HRS", isCorrect: false },
        { text: "23 HRS", isCorrect: false },
        { text: "12 HRS", isCorrect: false },
        { text: "14 HRS", isCorrect: true },
      ],
    },
    {
      q: "It takes two pipes A and B, running together, to fill a tank in 6 minutes. It takes A 5 minutes less than B to fill the tank, then what will be the time taken by B alone to fill the tank?",
      a: [
        { text: "10 MIN", isCorrect: false },
        { text: "15 MIN", isCorrect: true },
        { text: "20 MIN", isCorrect: false },
        { text: "25 MIN", isCorrect: false },
      ],
    },
    {
      q: "If two pipes can fill a tank in 24 and 20 minutes respectively and another pipe can empty 3 gallons of water per minute from that tank. When all the three pipes are working together, it takes 15 minutes to fill the tank. What is the capacity of the tank?",
      a: [
        { text: "120 gallons", isCorrect: true },
        { text: "150 gallons", isCorrect: false },
        { text: "125 gallons", isCorrect: false },
        { text: "100 gallons", isCorrect: false },
      ],
    },
    {
      q: "It takes 20 minutes for pipe A to fill the tank completely and it takes 30  minutes for pipe B to fill the tank completely. If both the inlets are opened together, then how much time will be taken to fill the tank completely?",
      a: [
        { text: "15 MIN", isCorrect: false },
        { text: "12 MIN", isCorrect: true },
        { text: "11 MIN", isCorrect: false },
        { text: "22 MIN", isCorrect: false },
      ],
    },
    {
      q: "Pipe A can fill the tank 3 times faster in comparison to pipe B. It takes 36 minutes for pipe A and B to fill the tank together. How much time will pipe B alone take to fill the tank?",
      a: [
        { text: "100 MIN", isCorrect: false },
        { text: "124 MIN", isCorrect: false },
        { text: "134 MIN", isCorrect: false },
        { text: "144 MIN", isCorrect: true },
      ],
    },
    {
      q: "An electric pump can fill a tank in 4 hours. Due to leakage in the tank, it took 4(1/2) hrs to fill the tank. If the tank is full, how much time will the leak take to empty the full tank?",
      a: [
        { text: "8 HRS", isCorrect: false },
        { text: "16 HRS", isCorrect: false },
        { text: "21 HRS", isCorrect: false },
        { text: "36 HRS", isCorrect: true },
      ],
    },
    {
      q: "Two pipes fills a cistern in 15 hrs and 20 hrs respectively. The pipes are opened simultaneously and it is observed that it took 26 min more to fill the cistern because of leakage at the bottom. If the cistern is full, then in what time will the leak empty it?",
      a: [
        { text: "35 HRS", isCorrect: false },
        { text: "70 HRS", isCorrect: false },
        { text: "180 HRS", isCorrect: true },
        { text: "300 HRS", isCorrect: false },
      ],
    },
    {
      q: "If two pipes function simultaneously, the reservoir will be filled in 24 hrs. One pipe fills the reservoir 20 hours faster than the other. How many hours does it take for the second pipe to fill the reservoir?",
      a: [
        { text: "12 HRS", isCorrect: false },
        { text: "30 HRS", isCorrect: false },
        { text: "44 HRS", isCorrect: false },
        { text: "60 HRS", isCorrect: true },
      ],
    },
  ];
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
option1.innerHTML = questionArr[i].a[j].text;
let option2 = document.getElementById('option2');
option2.innerHTML = questionArr[i].a[j+1].text;
let option3 = document.getElementById('option3');
option3.innerHTML = questionArr[i].a[j+2].text;
let option4 = document.getElementById('option4');
option4.innerHTML = questionArr[i].a[j+3].text;

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
      timeinterval = setInterval(updateTimer,1000);
  }
  function updateTimer()
  {
      if(timeleft>0)
      {
          timerElement.textContent=`${timeleft}`;
          timeleft--;
      }
      else{
          clearInterval(timeinterval);
          document.location.href = "../scoreCardfolder/scoreCard.html"; 
      }
  }









