
let GameValue = Array(9).fill(null);
// let GameValue = ['x', '0', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
//et GameValue =  [ 0 , 1 , 2 , 3 , 4,  5 , 6 , 7 , 8 , 9 ];
const FirstPlayer = 'X';
const SecondPlayer = 'O';
let currentPlayer;
let AllTilesPlayed


const load = () => {

    // CheckToSeeWhoWon();
    init()

};
function init() {
    currentPlayer = FirstPlayer

}
function SetValueOnGameArray(TilesPlayed){
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
    const answerForRowTwo = isSecondRowAWin();
    console.log('answerForRowTwo', answerForRowTwo);
    const answerForThirdRow = isThirdRowAWin();
    console.log('answerForThirdRow', answerForThirdRow)
    const AnswerForFirstColumn = isFirstColumnAWin()
    console.log('AnswerForFirstColumn', AnswerForFirstColumn)
    const AnswerForSecondColumn = isSecondColumnAWin()
    console.log('AnswerForSecondColumn', AnswerForSecondColumn)
    const AnswerForThirdColumn = isThirdColumnAWin()
    console.log('AnswerForThirdColumn', AnswerForThirdColumn)
    const AnswerForDiagonalLineOne = isDiagonalLineOneAWin()
    console.log('AnswerForDiagonalLineOne', AnswerForDiagonalLineOne)
    const AnswerForDiagonalLineTwo = isDiagonalLineTwoAWin()
    console.log('AnswerForDiagonalLineTwo', AnswerForDiagonalLineTwo)
}

function isFirstRowAWin() {
    // Checking to see if 1,2,3 are a match  

    const firstValue = GameValue[0]; /// z
    const secondValue = GameValue[1] /// y
    const thirdValue = GameValue[2]; // x

    // const [firstValue, secondValue, thirdValue ] = GameValue;

    if (firstValue === secondValue && secondValue === thirdValue) {
        console.log('they are all equal');
        return true;
    } else {
        console.log('they are not equal');
        return false;
    }

    console.log(`firstVale: ${firstValue}\n secondValue: ${secondValue} \n thirdValue: ${thirdValue}`);

}
function isSecondRowAWin() {
    const FourthValue = GameValue[3]
    const FithValue = GameValue[4]
    const SixthValue = GameValue[5]

    if (FourthValue === FithValue && FithValue === SixthValue) {
        console.log('they are equal')
        return true
    }
    else {
        return false
        console.log('they not equal')
    }
}

function isThirdRowAWin() {
    seventhValue = GameValue[6]
    eightValue = GameValue[7]
    NinthValue = GameValue[8]

    {
        if (seventhValue === eightValue && eightValue === NinthValue) {
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
    const [firstValue, , , FourthValue, , , SixthValue] = GameValue

    if (firstValue === FourthValue && FourthValue === SixthValue) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isSecondColumnAWin() {
    secondValue = GameValue[1]
    FithValue = GameValue[4]
    eightValue = GameValue[7]

    if (secondValue === FithValue && FithValue === eightValue) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }

}
function isThirdColumnAWin() {
    thirdValue = GameValue[2]
    SixthValue = GameValue[5]
    NinthValue = GameValue[8]

    if (thirdValue === SixthValue && SixthValue === NinthValue) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isDiagonalLineOneAWin() {
    const [firstVale, , , , FithValue, , , , NinthValue] = GameValue
    if (firstVale === FithValue && FithValue === NinthValue) {
        console.log('they are equal')
        return true
    }
    else {
        console.log('they not equal')
        return false

    }
}
function isDiagonalLineTwoAWin() {
    const [, , thirdValue, , FithValue, , seventhValue] = GameValue
    if (thirdValue === FithValue && FithValue === seventhValue) {
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

    const AllElemnts = findAllElemnts();

    const ActiveTile = AllElemnts[NumberedTiles];

  const CanWriteToTile = SetValueOnGameArray(NumberedTiles) 
    if (CanWriteToTile === false) {
        return;
    }
    ChangePlayerColor(ActiveTile);

    ChangeCurrentPlayer();

}
window.onload = load;


function ChangePlayerColor(activeTile) {
    activeTile.innerHTML = currentPlayer;
    if (currentPlayer === FirstPlayer) {
        activeTile.className = ['tile player-one-color'];
        return
    }
    if (currentPlayer === SecondPlayer) {
        activeTile.className = ['tile player-two-color'];
    }
}
function SeeWhoIsTheWinner() {

    if (currentPlayer === CheckToSeeWhoWon) {
        console.log('winner')
        //return true
    }
    else (currentPlayer !== CheckToSeeWhoWon);{
        console.log('draw')
        //return false
        resetGame()
    }
}
function resetGame() {
    currentPlayer = '';
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