const game = {
  playerOne: 'X',
  playerOneToken: '<i class="fas fa-candy-cane"></i>',
  playerTwo: 'O',
  playerTwoToken: '<i class="fas fa-sleigh"></i>',
  playerOneWins: 0,
  playerTwoWins: 0,
  playerOneTurn: true,
  moves: 0,
  message: "",
  board: [null, null, null, null, null, null, null, null, null],
  move: function(position) {
    if (this.playerOneTurn === true) {
      if (this.board[position] !== "X" && this.board[position] !== "O") {
        this.board[position] = "X";
        if (this.checkWinner() === true) {
          this.message = "Player One wins";
          this.playerOneWins++;
        } else {
          this.playerOneTurn = false;
        }
      }
    } else if (this.playerOneTurn === false) {
      if (this.board[position] !== "X" && this.board[position] !== "O") {
        this.board[position] = "O"
        if (this.checkWinner() === true) {
          this.message = "Player Two wins"
          this.playerTwoWins++;
        } else {
          this.playerOneTurn = true;
        }
      }
    }
    this.moves++;
    this.checkDraw();
  },

  checkWinner: function() {
    let icon;
    if (this.playerOneTurn === true) {
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
    this.playerOneTurn = true;
    this.message = "";
  },
}; // game object


// board factory for creating boards larger than 3x3????
