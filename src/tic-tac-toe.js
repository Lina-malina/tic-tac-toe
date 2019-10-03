class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
                this.currentPlayerSymbol = this.currentPlayerSymbol == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if ((this.field[0][0] != null && this.field[0][0] === this.field[0][1] && this.field[0][1] === this.field[0][2]) || 
            (this.field[1][0] != null && this.field[1][0] === this.field[1][1] && this.field[1][1] === this.field[1][2]) ||
            (this.field[2][0] != null && this.field[2][0] === this.field[2][1] && this.field[2][1] === this.field[2][2]) ||
            (this.field[0][0] != null && this.field[0][0] === this.field[1][0] && this.field[1][0] === this.field[2][0]) || 
            (this.field[0][1] != null && this.field[0][1] === this.field[1][1] && this.field[1][1] === this.field[2][1]) ||
            (this.field[0][2] != null && this.field[0][2] === this.field[1][2] && this.field[1][2] === this.field[2][2]) ||
            (this.field[0][0] != null && this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) ||
            (this.field[0][2] != null && this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0])) {
               return this.currentPlayerSymbol == 'x' ? 'o' : 'x';
            } else {
                return null;
            }

    }

    noMoreTurns() {
        return this.field.every(row => row.every(cell => cell !== null));
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;
