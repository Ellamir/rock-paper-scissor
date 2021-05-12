const choices = ['piedra','papel','tijera'];

function startGame(){
    const playerChoice = prompt('Por favor ingrese piedra, papel o tijera')
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    let ganadas = 0;
    if (winner === 'player') {
        result = 'ganas';
        let ganadas++;
    }else if (winner === 'computer') {
        result = 'pierdes';
    } else {
        
    }
    document.write = (`Estas escogiendo ${playerChoice} contra ${computerChoice} </strong>`);
    document.write = (`Ganaste <strong>${ganadas}</strong> veces.`;
}
function getComputerChoice(){
const computerChoice = parseInt(Math.random() * 3);
return choices[computerChoice];
}
function getWinner(playerChoice,computerChoice) {
if (playerChoice === computerChoice) {
return null
}
if (playerChoice === 'piedra') {
    if (computerChoice==='papel') {
    return 'computer';
    }else{
    return 'player';
    }
} else if (playerChoice === 'papel') {
    if (computerChoice==='piedra') {
    return 'player';
    }else{
    return 'computer';
    }
} else {
    if (computerChoice==='papel') {
    return 'player';
    }else{
    return 'computer';
    }
}
}
