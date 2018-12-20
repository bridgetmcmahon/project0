const game = {
  playerOne: 'X',
  playerOneToken: '<i class="fas fa-times"></i>',
  playerTwo: 'O',
  playerTwoToken: '<i class="far fa-circle"></i>',
  isComputerOpponent: false,
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
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  emptySpots: function() {
    return this.board.filter(s => s != "O" && s != "X")
  },
  performMoveForPlayer: function(position, name, piece, playerCount) {
    if (this.board[position] !== piece) {
      this.board[position] = piece;
      this.moves++;
      if (this.checkWinner()) {
        this.message = name + " wins!";
        this[playerCount] += 1;
      }
      return true;
    }
    return false;
  },

  performMoveForComputer: function() {
    const availableSpots = this.emptySpots();
    const index = Math.floor(Math.random() * availableSpots.length);
    const move = availableSpots[index];
    this.board[move] = "O";
    this.moves++;
    if (this.checkWinner()) {
      this.message = "Computer wins!";
      this.playerTwoWinCount += 1;
    }
    this.playerOneTurn = true;
    return move;
  },

  move: function(position) {
    if (!this.isComputerOpponent) {
      if (this.playerOneTurn && this.performMoveForPlayer(position, "Player One", "X", "playerOneWinCount")) {
        this.playerOneTurn = false;
        this.checkDraw();
        return true;
      } else if (!this.playerOneTurn && this.performMoveForPlayer(position, "Player Two", "O", "playerTwoWinCount")) {
        this.playerOneTurn = true;
        this.checkDraw();
        return true;
      }
    } else if (this.isComputerOpponent) {
      if (this.performMoveForPlayer(position, "Player One", "X", "playerOneWinCount")) {
        this.playerOneTurn = false;
        this.moves++;
        this.checkDraw();
        return true;
      }
    }
    return false;
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
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.moves = 0;
    this.playerOneTurn = true;
    this.message = "";
    this.gameOver = false;
    this.winningRow = [];
  },
}; // game object
