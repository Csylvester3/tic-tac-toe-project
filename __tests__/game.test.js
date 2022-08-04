const { assert } = require("console");

const { 
    setGameValue, 
    isFirstRowAWin, 
    isSecondRowAWin,
    isThirdRowAWin, 
    isFirstColumnAWin,
    isSecondColumnAWin,
    isThirdColumnAWin,
    isDiagonalLineOneAWin,
    isDiagonalLineTwoAWin } = require("../js/javaScript");
describe('Tic Tac Toe Testing', () => {

    /**
     * @jest-environment jsdom
     */
    it('1st Row Test', () => {

        setGameValue(['x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o']);
        const answer = isFirstRowAWin();

        expect(answer).toBe(true);
    });

    it('2nd Row Test', () => {

        setGameValue(['0', '0', '0', 'x', 'x', 'x', 'o', 'o', 'o']);
        const answer = isSecondRowAWin();

        expect(answer).toBe(true);
    });

    it('3rd Row Test', () => {

        setGameValue(['x', 'x', 'x', 'x', 'x', 'x', 'o', 'o', 'o']);
        const answer = isThirdRowAWin();

        expect(answer).toBe(true);
    });

    it('1st Column Test', () => {

        setGameValue(['x', 'o', 'o', 'x', 'o', 'o', 'x', 'o', 'o']);
        const answer = isFirstColumnAWin();

        expect(answer).toBe(true);
    });

    it('2nd Column Test', () => {

        setGameValue(['o', 'x', 'o', 'o', 'x', 'o', 'o', 'x', 'o']);
        const answer = isSecondColumnAWin();

        expect(answer).toBe(true);
    });

    it('3rd Column Test', () => {

        setGameValue(['x', 'o', 'x', 'o', 'o', 'x', 'o', 'o', 'x']);
        const answer = isThirdColumnAWin();

        expect(answer).toBe(true);
    });

    it('1st Diag Test', () => {

        setGameValue(['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x']);
        const answer = isDiagonalLineOneAWin();

        expect(answer).toBe(true);
    });

    it('2nd Diag Test', () => {

        setGameValue(['o', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o']);
        const answer = isDiagonalLineTwoAWin();

        expect(answer).toBe(true);
    });

    
});