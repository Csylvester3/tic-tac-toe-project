
let GameValue = Array(9).fill(null);
// let GameValue = ['x', '0', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
//et GameValue =  [ 0 , 1 , 2 , 3 , 4,  5 , 6 , 7 , 8 , 9 ];
const FirstPlayer = 'X';
const SecondPlayer = 'O';
let currentPlayer;
let AllTilesPlayed
let GameIsOver = false

function FindH2(){
    const H2Found = document.getElementById('h2')
    return H2Found
}
const load = () => {

    // CheckToSeeWhoWon();
    init()

};
function init() {
    currentPlayer = FirstPlayer

}
function CanIWriteToGameTile(TilesPlayed){
    const CurrentTile = GameValue[TilesPlayed]  

    if (CurrentTile !== null) {
        return false;
    }
    GameValue[TilesPlayed] = currentPlayer;
    return true;
}
function ChangeCurrentPlayer() {
    // this will rotate Player one and two 
    if (currentPlayer === FirstPlayer) {
        currentPlayer = SecondPlayer
    } else {
        currentPlayer = FirstPlayer
    }

}
function setGameValue(myArray) {

    GameValue = myArray;
}
function CheckToSeeWhoWon() {
    const answerForRowOne = isFirstRowAWin();
    console.log('answerForRowOne', answerForRowOne);

    if (answerForRowOne) {
        GameIsOver = true;
        return true;
    }
    const answerForRowTwo = isSecondRowAWin();
    console.log('answerForRowTwo', answerForRowTwo);
    if (answerForRowTwo) {
        GameIsOver = true;
        return true
    }
    const answerForThirdRow = isThirdRowAWin();
    console.log('answerForThirdRow', answerForThirdRow)
    if (answerForThirdRow) {
        GameIsOver = true;
        return true
    }
    const AnswerForFirstColumn = isFirstColumnAWin()
    console.log('AnswerForFirstColumn', AnswerForFirstColumn)
    if (AnswerForFirstColumn) {
        GameIsOver = true;
        return true
    }
    const AnswerForSecondColumn = isSecondColumnAWin()
    console.log('AnswerForSecondColumn', AnswerForSecondColumn)
    if (AnswerForSecondColumn) {
        GameIsOver = true;
        return true
    }
    const AnswerForThirdColumn = isThirdColumnAWin()
    console.log('AnswerForThirdColumn', AnswerForThirdColumn)
    if (AnswerForThirdColumn) {
        GameIsOver = true;
        return true
    }
    const AnswerForDiagonalLineOne = isDiagonalLineOneAWin()
    console.log('AnswerForDiagonalLineOne', AnswerForDiagonalLineOne)
    if (AnswerForDiagonalLineOne) {
        GameIsOver = true;
        return true
    }
    const AnswerForDiagonalLineTwo = isDiagonalLineTwoAWin()
    console.log('AnswerForDiagonalLineTwo', AnswerForDiagonalLineTwo)
    if (AnswerForDiagonalLineTwo) {
        GameIsOver = true;
        return true
    }
}

function isFirstRowAWin() {
    const playersLetter = currentPlayer;
    // Checking to see if 1,2,3 are a match  
    const firstValue = GameValue[0]; /// z
    const secondValue = GameValue[1]; /// y
    const thirdValue = GameValue[2]; // x

    // const [firstValue, secondValue, thirdValue ] = GameValue;
    if (firstValue === null || secondValue === null || thirdValue === null) {
        return;
        
    }
    if (firstValue === playersLetter && secondValue === playersLetter && thirdValue === playersLetter) {
        console.log('they are all equal');
        return true;
    } else {
        console.log('they are not equal');
        return false;
    }

    console.log(`firstVale: ${firstValue}\n secondValue: ${secondValue} \n thirdValue: ${thirdValue}`);

}
function isSecondRowAWin() {
    const playersLetter = currentPlayer;
    const FourthValue = GameValue[3]
    const FithValue = GameValue[4]
    const SixthValue = GameValue[5]

    if (FourthValue === null || FithValue === null || SixthValue === null) {
        return;
    }
    if (FourthValue === playersLetter && FithValue === playersLetter && SixthValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        return false
        console.log('they not equal')
    }
}

function isThirdRowAWin() {
    const playersLetter = currentPlayer;
    seventhValue = GameValue[6]
    eightValue = GameValue[7]
    NinthValue = GameValue[8]
    
    if (seventhValue === null || eightValue === null || NinthValue === null) {
        return;
    }
    {
        if (seventhValue === playersLetter && eightValue === playersLetter && NinthValue === playersLetter) {
            console.log('they are equal')
            return true
        }
        else {
            return false
            console.log('they not equal')
        }
    }
}
function isFirstColumnAWin() {
    const playersLetter = currentPlayer;
    const [firstValue, , , FourthValue, , , SixthValue] = GameValue
   
    if (firstValue === null || FourthValue === null ||  SixthValue === null) {
        return;
        
    }
    if (firstValue === playersLetter && FourthValue === playersLetter && SixthValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isSecondColumnAWin() {
    const playersLetter = currentPlayer;
    secondValue = GameValue[1]
    FithValue = GameValue[4]
    eightValue = GameValue[7]

    if (secondValue === null ||  FithValue === null ||  eightValue === null) {
        return;
        
    }
    if (secondValue === playersLetter && FithValue === playersLetter && eightValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }

}
function isThirdColumnAWin() {
    const playersLetter = currentPlayer;
    thirdValue = GameValue[2]
    SixthValue = GameValue[5]
    NinthValue = GameValue[8]
    
    if (thirdValue === null ||  SixthValue === null ||  NinthValue === null) {
        return;
        
    }
    if (thirdValue === playersLetter && SixthValue === playersLetter && NinthValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isDiagonalLineOneAWin() {
    const playersLetter = currentPlayer;
    const [firstVale, , , , FithValue, , , , NinthValue] = GameValue
   
    if (firstVale === null ||  FithValue === null ||  NinthValue === null) {
        return;
        
    }
    if (firstVale === playersLetter && FithValue === playersLetter && NinthValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isDiagonalLineTwoAWin() {
    const playersLetter = currentPlayer;
    const [, , thirdValue, , FithValue, , seventhValue] = GameValue
   
    if (thirdValue === null ||  FithValue === null ||  seventhValue === null) {
        return;
        
    }
    if (thirdValue === playersLetter && FithValue === playersLetter && seventhValue === playersLetter) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function findAllElemnts() {
    const Tile0 = document.getElementById('Tile-0');
    const Tile1 = document.getElementById('Tile-1');
    const Tile2 = document.getElementById('Tile-2');
    const Tile3 = document.getElementById('Tile-3');
    const Tile4 = document.getElementById('Tile-4');
    const Tile5 = document.getElementById('Tile-5');
    const Tile6 = document.getElementById('Tile-6');
    const Tile7 = document.getElementById('Tile-7');
    const Tile8 = document.getElementById('Tile-8');
    return [Tile0, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, Tile7, Tile8]
}
function ShowXorO() {


}
function OnTileClicked(NumberedTiles) {

    if (GameIsOver === true) {
        return;
    }
    const AllElemnts = findAllElemnts();

    const ActiveTile = AllElemnts[NumberedTiles];

  const CanWriteToTile = CanIWriteToGameTile(NumberedTiles) 
  
    if (CanWriteToTile === false) {
        
        return;
    }

    WriteValueToTile(ActiveTile);

    ChangePlayerColor(ActiveTile);

    const isThereAWinner = CheckIfXWinsOrO()
   
    if(isThereAWinner){
        ShowWinnerPlayerOneOrTwo()
        return;
    }
    

    ChangeCurrentPlayer();
    
    SeeWhoIsTheWinner()

}
window.onload = load;


function ChangePlayerColor(activeTile) {
    
    if (currentPlayer === FirstPlayer) {
        activeTile.className = ['tile player-one-color'];
        return
    }
    if (currentPlayer === SecondPlayer) {
        activeTile.className = ['tile player-two-color'];
    }
}
function WriteValueToTile(activeTile) {
    activeTile.innerHTML = currentPlayer;
}

function CheckIfXWinsOrO (){
    
    const isThereAWinner = CheckToSeeWhoWon(currentPlayer);

    if (isThereAWinner) {
       return true;
    }
    
}
function SeeWhoIsTheWinner(CheckToSeeWhoWon) {
console.log(GameValue)
    if (CheckToSeeWhoWon) {
        console.log('someone won')
}
    
}
function resetGame() {
    ActiveTile = '';
    
}
function ShowWinnerPlayerOneOrTwo(isThereAWinner){
    const ShowWinner = FindH2();
    ShowWinner.innerHTML = ` the winner is ${currentPlayer}`

}


//module.exports = {    
    // setGameValue,
    // secondDiag: isDiagonalLineTwoAWin,
    // isFirstRowAWin,
    // isSecondRowAWin,
    // isThirdRowAWin,
    // isFirstColumnAWin,
    // isSecondColumnAWin,
    // isThirdColumnAWin,
    // isDiagonalLineOneAWin,
    // isDiagonalLineTwoAWin

//}