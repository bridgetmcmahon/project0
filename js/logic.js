const game = {
  playerOne: 'X',
  playerOneToken: '<i class="fas fa-candy-cane"></i>',
  playerTwo: 'O',
  playerTwoToken: '<i class="fas fa-sleigh"></i>',
  playerOneWinCount: 0,
  playerTwoWinCount: 0,
  gameOver: false,
  playerOneTurn: true,
  moves: 0,
  message: "",
  board: [null, null, null, null, null, null, null, null, null],
  performMoveForPlayer: function(position, name, piece, playerCount) {
    if (this.board[position] !== piece && this.board[position] === null) {
      this.board[position] = piece;
      if (this.checkWinner()) {
        this.message = name + " wins!";
        playerCount++;
      }
      return true;
    }
    return false;
  },

  move: function(position) {
    if (this.playerOneTurn && this.performMoveForPlayer(position, "Player One", "X", this.playerOneWinCount)) {
      this.playerOneTurn = false;
      this.moves++;
      this.checkDraw();
      return true;
    } else if (!this.playerOneTurn && this.performMoveForPlayer(position, "Player Two", "O", this.playerTwoWinCount)) {
      ;
      this.playerOneTurn = true;
      this.moves++;
      this.checkDraw();
      return true
    } else {
      return false;
    }
  },

  checkWinner: function() {
    let icon = this.playerTwo;
    if (this.playerOneTurn) {
      icon = this.playerOne;
    }

    const winsRowOne = icon === this.board[0] && icon === this.board[1] && icon === this.board[2];
    const winsRowTwo = icon === this.board[3] && icon === this.board[4] && icon === this.board[5];
    const winsRowThree = icon === this.board[6] && icon === this.board[7] && icon === this.board[8];
    const winsColOne = icon === this.board[0] && icon === this.board[3] && icon === this.board[6];
    const winsColTwo = icon === this.board[1] && icon === this.board[4] && icon === this.board[7];
    const winsColThree = icon === this.board[2] && icon === this.board[5] && icon === this.board[8];
    const winsDiagOne = icon === this.board[0] && icon === this.board[4] && icon === this.board[8];
    const winsDiagTwo = icon === this.board[2] && icon === this.board[4] && icon === this.board[6];

    if (winsRowOne || winsRowTwo || winsRowThree || winsColOne || winsColTwo || winsColThree || winsDiagOne || winsDiagTwo) {
      this.gameOver = true;
      return true;
    };
    return false;
  },

  checkDraw: function() {
    if (this.moves >= 9 && this.checkWinner === false) {
      this.message = "It's a draw";
      this.gameOver = true;
      return true;
    }
  },

  resetGame: function() {
    this.board = [null, null, null, null, null, null, null, null, null];
    this.moves = 0;
    this.playerOneTurn = true;
    this.message = "";
    this.gameOver = false;
  },
}; // game object


// board factory for creating boards larger than 3x3????
