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

    const winsRowOne = this.board[0] === icon && this.board[1] === icon && this.board[2] === icon;
    const winsRowTwo = this.board[3] === icon && this.board[4] === icon && this.board[5] === icon;
    const winsRowThree = this.board[6] === icon && this.board[7] === icon && this.board[8] === icon;
    const winsColOne = this.board[0] === icon && this.board[3] === icon && this.board[6] === icon;
    const winsColTwo = this.board[1] === icon && this.board[4] === icon && this.board[7] === icon;
    const winsColThree = this.board[2] === icon && this.board[5] === icon && this.board[8] === icon;
    const winsDiagOne = this.board[0] === icon && this.board[4] === icon && this.board[8] === icon;
    const winsDiagTwo = this.board[2] === icon && this.board[4] === icon && this.board[6] === icon;

    if (winsRowTwo || winsRowThree || winsColOne || winsColTwo || winsColThree || winsDiagOne || winsDiagTwo) {
      this.gameOver = true;
    }

    if (winsRowOne) {
      this.winningRow.push(0, 1, 2);
      return true;
    } else if (winsRowTwo) {
      this.winningRow.push(3, 4, 5);
      return true;
    } else if (winsRowThree) {
      this.winningRow.push(6, 7, 8);
      return true;
    } else if (winsColOne) {
      this.winningRow.push(0, 3, 6);
      return true;
    } else if (winsColTwo) {
      this.winningRow.push(1, 4, 7);
      return true;
    } else if (winsColThree) {
      this.winningRow.push(2, 5, 8);
      return true;
    } else if (winsDiagOne) {
      this.winningRow.push(0, 4, 8);
      return true;
    } else if (winsDiagTwo) {
      this.winningRow.push(2, 4, 6);
      return true;
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


// board factory for creating boards larger than 3x3????
