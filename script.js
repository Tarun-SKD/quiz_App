//js code for redirecting on pipes and cistern page

let pipes = document.getElementById('box1');

pipes.addEventListener('click', function(){
  document.location.href = "../pipesfolder/pipes.html";
  // localStorage.setItem("categery1", 'pipesAndcistern');
  localStorage.setItem("categery1", 'pipesAndcistern');
})

//js code for redirecting on probaility page
let probaility = document.getElementById('box2');

probaility.addEventListener('click', function(){
  document.location.href = "../pbltFolder/probaility.html";
  localStorage.setItem('categery2', 'probaility');
})

//js code for redirecting on problems on ages page
let ages = document.getElementById('box3');

ages.addEventListener('click', function(){
  document.location.href = "../agesfolder/ages.html";
  localStorage.setItem('categery3', 'ages');
})


//js code for redirecting on profit and loss page
let profitAndloss = document.getElementById('box4');

profitAndloss.addEventListener('click', function(){
  document.location.href = "../profitLoss/pAndl.html"
  localStorage.setItem('categery4', 'pAndl');
})

//js code for sotre name to local storage page
var storedName = localStorage.getItem("storedName");


function myFunction() {
  var textbox = document.getElementById('textbox').value;

  localStorage.setItem("storedName", textbox);
}


if(localStorage.length){
  document.getElementById('name_greeting').innerHTML = localStorage.getItem('storedName');
}

