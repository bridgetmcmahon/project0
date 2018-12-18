$(document).ready(function() {

  const setTokens = function() {
    if ($('#normal').hasClass('selected')) {
      game.playerOneToken = '<i class="fas fa-times"></i>';
      game.playerTwoToken = '<i class="far fa-circle"></i>';
    } else if ($('#christmas').hasClass('selected')) {
      game.playerOneToken = '<i class="fas fa-candy-cane"></i>';
      game.playerTwoToken = '<i class="fas fa-sleigh"></i>';
    }
  };

  $('.token-setting').on('click', function() {
    game.resetGame();
    $('.boxes').empty();
    $('.token-setting').toggleClass('selected');
    setTokens();
  });


// UPDATE BOARD ON CLICK /////////////////////
  $('#grid-container').on('click', 'div', function(event) {
    const id = event.target.id;

    if ($(this).text().length < 1) {
      if (game.playerOneTurn) {
        game.move(id);
        $(this).append(game.playerOneToken).children().hide().fadeIn(400);
      } else if (game.playerOneTurn === false){
        game.move(id);
        $(this).append(game.playerTwoToken).children().hide().fadeIn(400);
      }
    }

    $('#user-message span').text(game.message);
    $('#player-one-score').text(game.playerOneWins);
    $('#player-two-score').text(game.playerTwoWins);
  });

// GAME RESET ///////////////////////////////
  $('#reset').on('click', function() {
    game.resetGame();
    $('.boxes').empty();
  });

}); // document ready
