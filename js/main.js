// function to check for winner

const game = {
  playerOne: "X",
  playerTwo: "O",
  currentPlayer: 'playerOne',
  board: [null, null, null, null, null, null, null, null, null],
  move: function(position) {
    if (this.currentPlayer === 'playerOne') {
      this.board[position] = "X"
      this.checkWinner();
      this.currentPlayer = 'playerTwo';
    } else if (this.currentPlayer === 'playerTwo') {
      this.board[position] = "O"
      this.checkWinner();
      this.currentPlayer = 'playerOne'
    }
  },
  checkWinner: function() {
    let icon;
    if (this.currentPlayer === 'playerOne') {
      icon = this.playerOne;
    } else {
      icon = this.playerTwo;
    }

    if (icon === this.board[0] && icon === this.board[1] && icon === this.board[2]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[3] && icon === this.board[4] && icon === this.board[5]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[6] && icon === this.board[7] && icon === this.board[8]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[0] && icon === this.board[3] && icon === this.board[6]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[1] && icon === this.board[4] && icon === this.board[7]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[2] && icon === this.board[5] && icon === this.board[8]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[0] && icon === this.board[4] && icon === this.board[8]) {
      console.log(`${icon} wins`);
    } else if (icon === this.board[2] && icon === this.board[4] && icon === this.board[6]) {
      console.log(`${icon} wins`);
    }

    if
  },
}; // game object

$(document).ready(function() {

  $('#grid-container').on('click', 'div', function(event) {
    const id = event.target.id;
    game.move(id);
    $(this).append(game.board[id]);
  });

}); // document ready
