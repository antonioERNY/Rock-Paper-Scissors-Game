const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const reset = document.querySelector('.reset');
const results = document.querySelector('.results');
const inresults = document.querySelector('.inresults')
const wins = document.querySelector('.wins');
const loses = document.querySelector('.loses');
const ties = document.querySelector('.ties');

// this here is a way of setting back the score to it's default way: so we saying if the score is not set or is null, then we wanna use the default way, which in this case is the right side of the or{default}operator
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
}

// if the code says that the certain variable is undefined then you should make that variable outside or just make it a parameter, but do your best to keep it inside the scope
// computer move

function computerMoveCondition(computerMove){
    const randomNumber = Math.trunc(Math.random() * 3 + 1); 
    if(randomNumber === 1){
        computerMove = 'Rock'
    } 
    else if(randomNumber === 2){
        computerMove = 'Paper'
    }
    else if(randomNumber === 3){
        computerMove = 'Scissors'
    }
    return computerMove;
}
// whenever you find yourself rewriting code just know that you can create it outside and use it in those places where you repeated it;
function yourMoveCondition(move){
    const computerMove = computerMoveCondition();
    let innresults = '';
    // ROCK
    if(move === 'Rock'){
        if(computerMove === 'Rock'){
            results.textContent = 'IT\'S A TIE!';
        }else if(computerMove === 'Paper'){
            results.textContent = 'YOU LOST!';
        }else if(computerMove === 'Scissors'){
            results.textContent = 'YOU WON!'
        }
    }
    // PAPER
        if(move === 'Paper'){
        if(computerMove === 'Rock'){
            results.textContent = 'YOU WON!';
        }else if(computerMove === 'Paper'){
            results.textContent = 'IT\'S A TIE!';
        }else if(computerMove === 'Scissors'){
            results.textContent = 'YOU LOST!';
        }
        }
        // SCISSORS
        if(move === 'Scissors'){
            if(computerMove === 'Rock'){
                results.textContent = 'YOU LOST!';
            }else if(computerMove === 'Paper'){
                results.textContent = 'YOU WON!';;
            }else if(computerMove === 'Scissors'){
                results.textContent = 'IT\'S A TIE!';
            }
        }

        // results
        innresults = `YOU
        <img src="img/img-${move}.jpeg" alt="" class="img-size">
        <img src="img/img-${computerMove}.jpeg" alt="" class="img-size">
        COMPUTER`
        inresults.innerHTML = innresults;

        // score condition
        if(results.textContent === 'YOU WON!'){
            score.wins += 1;
            wins.textContent = `WINS: ${score.wins}`
        }else if(results.textContent === 'YOU LOST!'){
            score.loses += 1;
            loses.textContent = `LOSSES: ${score.loses}`
        }else if(results.textContent === 'IT\'S A TIE!'){
            score.ties += 1;
            ties.textContent = `TIES: ${score.ties}`
        }
        
        localStorage.setItem('score', JSON.stringify(score))

        // reset
        reset.addEventListener('click', function(){
            score.wins = 0;
            wins.textContent = `WINS: ${score.wins}`;
            score.loses = 0;
            loses.textContent = `LOSSES: ${score.loses}`;
            score.ties = 0;
            ties.textContent = `TIES: ${score.ties}`;
            localStorage.removeItem('score');
            results.textContent = 'Game has been restarted';
            inresults.textContent =  'Waiting for you to pick a move'
        })
// when comparing objects, we are actually comparing references not the values inside them
}

// ROCK CONDITION
rock.addEventListener('click', function(){
    yourMoveCondition('Rock')
})
// PAPER CONDITION
paper.addEventListener('click', function(){
    yourMoveCondition('Paper')
})
// SCISSORS CONDITION
scissors.addEventListener('click', function(){
    yourMoveCondition('Scissors')
})