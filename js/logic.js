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
  winningRow: [],
  winningCombos: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  board: [null, null, null, null, null, null, null, null, null],
  performMoveForPlayer: function(position, name, piece, playerCount) {
    if (this.board[position] !== piece && this.board[position] === null) {
      this.board[position] = piece;
      if (this.checkWinner()) {
        this.message = name + " wins!";
        this[playerCount] += 1;
      }
      return true;
    }
    return false;
  },

  move: function(position) {
    if (this.playerOneTurn && this.performMoveForPlayer(position, "Player One", "X", "playerOneWinCount")) {
      this.playerOneTurn = false;
      this.moves++;
      this.checkDraw();
      return true;
    } else if (!this.playerOneTurn && this.performMoveForPlayer(position, "Player Two", "O", "playerTwoWinCount")) {
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

    for (let i = 0; i < this.winningCombos.length; i++) {
      let position1 = this.winningCombos[i][0]
      let position2 = this.winningCombos[i][1]
      let position3 = this.winningCombos[i][2]
      if (this.board[position1] === icon && this.board[position2] === icon && this.board[position3] === icon) {
        this.winningRow = [position1, position2, position3];
        this.gameOver = true;
        return true;
      }
    }
    return false;
  },

  checkDraw: function() {
    if (this.moves >= 9 && !this.gameOver) {
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
    this.winningRow = [];
  },
}; // game object
