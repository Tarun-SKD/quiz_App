// JS to show name in score card
let name = document.getElementById('name').innerHTML = localStorage.getItem('storedName');

// JS to show percentage in score card
let percentage = document.getElementById('percentage').innerHTML = localStorage.getItem('percentage')

// JS to show time taken in score card
let time= document.getElementById('seconds').innerHTML = localStorage.getItem('timeTaken');

let correctAns = localStorage.getItem('correct');
document.getElementById('percentage').innerHTML = correctAns*10;

// JS to show wrong and right answer in score card
document.getElementById('correct').innerHTML = correctAns;
document.getElementById('wrong').innerHTML = 10-correctAns;


// js for go to home button start here
let btnTohome = document.getElementById('btnTohome');

btnTohome.addEventListener('click', function(){
    document.location.href = "../index.html"
})
// js for go to home button start here

// js for start again button start here
btnToRestart = document.getElementById('btnToRestart');

btnToRestart.addEventListener('click', function(){
    console.log('Hello1')

    let categery1 = localStorage.getItem('categery1')
    console.log(categery1);
    
    
    if(categery1 == 'pipesAndcistern'){
        document.location.href = "../pipesfolder/pipes.html";
        console.log('hello3');
    }else if(categery1 == 'probaility'){
        document.location.href = "../pbltFolder/probaility.html";
    }
    else if(categery1 == 'ages'){
        
        document.location.href = "../agesfolder/ages.html";
    }
    else if(categery1 == 'pAndl'){
        document.location.href = "../profitLoss/pAndl.html"
    }
    

})
// js for start again button end here
