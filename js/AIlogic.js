const game = {
  player: "X",
  playerToken: '<i class="fas fa-candy-cane"></i>',
  computer: "O",
  computerToken: '<i class="fas fa-sleigh"></i>',
  playerWinCount: 0,
  computerWinCount: 0,
  gameOver: false,
  playerTurn: true,
  moves: 0,
  computerLastMove: 0,
  message: "",
  board: [null, null, null, null, null, null, null, null, null],
  playerMove: function(position) {
    if (this.board[position] !== "X" && this.board[position] !== "O") {
      this.board[position] = "X";
      this.moves++;
      if (this.checkForWinner()) {
        this.message = "Player wins";
        this.playerWinCount++;
      }
      return true;
    }
    return false;
  },

  computerMove: function() {

  },

  checkForWinner: function() {
    let icon = this.computer;
    if (this.playerTurn) {
      icon = this.player;
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

  checkForDraw: function() {
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
  },
}; // game object
