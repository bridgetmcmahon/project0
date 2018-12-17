const game = {
  playerOne: "X",
  playerTwo: "O",
  playerOneWins: 0, // show these in score span
  playerTwoWins: 0,
  currentPlayer: 'playerOne',
  moves: 0,
  message: "",
  board: [null, null, null, null, null, null, null, null, null],
  move: function(position) {
    if (this.currentPlayer === 'playerOne') {
      if (this.board[position] !== "X" && this.board[position] !== "O") {
        this.board[position] = "X";
        if (this.checkWinner() === true) {
          this.message = "X wins";
          this.playerOneWins++;
        } else {
          this.currentPlayer = 'playerTwo';
        }
      }
    } else if (this.currentPlayer === 'playerTwo') {
      if (this.board[position] !== "X" && this.board[position] !== "O") {
        this.board[position] = "O"
        if (this.checkWinner() === true) {
          this.message = "O wins"
          this.playerTwoWins++;
        } else {
          this.currentPlayer = 'playerOne'
        }
      }
    }
    this.moves++;
    this.checkDraw();
  },

  checkWinner: function() {
    let icon;
    if (this.currentPlayer === 'playerOne') {
      icon = this.playerOne;
    } else {
      icon = this.playerTwo;
    }

    if ((icon === this.board[0] && icon === this.board[1] && icon === this.board[2]) || (icon === this.board[3] && icon === this.board[4] && icon === this.board[5]) || (icon === this.board[6] && icon === this.board[7] && icon === this.board[8]) || (icon === this.board[0] && icon === this.board[3] && icon === this.board[6]) || (icon === this.board[1] && icon === this.board[4] && icon === this.board[7]) || (icon === this.board[2] && icon === this.board[5] && icon === this.board[8]) || (icon === this.board[0] && icon === this.board[4] && icon === this.board[8]) || (icon === this.board[2] && icon === this.board[4] && icon === this.board[6])) {
      console.log(`${icon} wins`);
      return true;
    }
    return false;
  },

  checkDraw: function() {
    if (this.moves >= 9) {
      this.message = "It's a draw";
      return true;
    }
  },

  resetGame: function() {
    this.board = [null, null, null, null, null, null, null, null, null];
    this.moves = 0;
    this.currentPlayer = 'playerOne';
    this.message = "";
  }
}; // game object

// board factory for creating boards larger than 3x3
