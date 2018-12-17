$(document).ready(function() {

// UPDATE BOARD ON CLICK /////////////////////
  $('#grid-container').on('click', 'div', function(event) {
    const id = event.target.id;
    if ($(this).text().length < 1) {
      game.move(id);
      $(this).append(game.board[id]);
    }

    $('#user-message span').text(game.message);
    $('#player-one-score').text(game.playerOneWins);
    $('#player-two-score').text(game.playerTwoWins);
  });

// GAME RESET ///////////////////////////////
  $('#reset').on('click', function() {
    game.resetGame();
    $('.boxes').empty();
  })

}); // document ready


// update score tally`
