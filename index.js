let rock_div = document.querySelector('.rock')
let paper_div = document.querySelector('.paper')
let scissor_div = document.querySelector('.scissor')
let playerScore_div = document.querySelector('.playerScore')
let compScore_div = document.querySelector('.compScore')
let playerVal = ''
let compVal = ''
let userScore = 0
let compScore = 0

// for displaying result
let winner = document.querySelector('.winner')
let thief = document.querySelector('.theif')

// for pop up
let displayer = document.querySelector('.displayer')

// for audios
let click = new Audio('CursorSelect.wav');
let jeetGaya = new Audio('successtrumpet.mp3');
let lost = new Audio('TRUMP.wav');

function compSelection(){
    let num = Math.floor(Math.random()*4)

    if (num == 1 || num == 0) {
        compVal = "rock"
    }

    else if(num == 2){
        compVal = "paper"
    }

     else if(num == 3 || num == 4){
        compVal = "scissor"
     } 
}

rock_div.addEventListener('click',()=>{
    game('rock')
    compSelection()
    click.play()
 })

 paper_div.addEventListener('click',()=>{
    game('paper')
    click.play()
    compSelection()
 })

 scissor_div.addEventListener('click',()=>{
    game('scissor')
    click.play()
    compSelection()
 })

 function game(playerVal){
    if(playerVal == compVal){
        winner.innerHTML = "Match Tied"
        document.querySelector('.thief').innerHTML = '--';
        document.querySelector('.king').innerHTML = '--'
    }

    else if(playerVal =='rock' && compVal =='scissor' || playerVal == 'paper' && compVal == 'rock' || playerVal == 'scissor' && compVal == 'paper'){
         win()
         document.querySelector('.thief').innerHTML = compVal;
         document.querySelector('.king').innerHTML = playerVal;
    }

    else if(playerVal =='scissor' && compVal =='rock'|| playerVal == 'rock'  && compVal == 'paper'|| playerVal == 'paper' && compVal == 'scissor'){
        lose()
       
        if (playerVal =='scissor' && compVal =='rock') {
            document.querySelector('.thief').innerHTML =  'scissor';
            document.querySelector('.king').innerHTML ='rock';
        } 
        
        else if(playerVal == 'rock'  && compVal == 'paper'){
            document.querySelector('.thief').innerHTML =  'rock';
            document.querySelector('.king').innerHTML ='paper'
        }
        
        else if(playerVal == 'paper'  && compVal == 'scissor'){
            document.querySelector('.thief').innerHTML =  'paper';
            document.querySelector('.king').innerHTML ='scissor'
        }
    }
}

function win(){
    console.log('player won')
    winner.innerHTML = "Player won"
    userScore++;
    console.log(userScore)
    playerScore_div.innerHTML = userScore;
    if(userScore == 5 || compScore == 5){
        jeetGaya.play()
        document.querySelector('.matchWinner').innerHTML = "Player Won"
        displayer.style.transform = ' translate(-50%,-50%) scale(1)'
    }
}

function lose(){
    console.log('comp won')
    winner.innerHTML = "Comp won"
    compScore++;
    console.log(compScore)
    compScore_div.innerHTML = compScore;  
    if(compScore == 5 || userScore == 5){
        lost.play()
        document.querySelector('.matchWinner').innerHTML = "You lost,Comp Won"
        displayer.style.transform = ' translate(-50%,-50%) scale(1)'
    }
}

function reset(){
    click.play()
    window.location.reload();
    displayer.style.transform = ' translate(-50%,-50%) scale(0)';
}



