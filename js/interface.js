$(document).ready(function() {

// SET TOKENS /////////////////////////////////
  const setTokens = function() {
    if ($('#normal').hasClass('selected')) {
      game.playerOneToken = '<i class="fas fa-times"></i>';
      game.playerTwoToken = '<i class="far fa-circle"></i>';
    } else if ($('#christmas').hasClass('selected')) {
      game.playerOneToken = '<i class="fas fa-candy-cane"></i>';
      game.playerTwoToken = '<i class="fas fa-sleigh"></i>';
    }
  };

  $('.tokens').on('click', function() {
    if (!$(this).hasClass('selected')) {
      game.resetGame();
      $('#user-message span').text("");
      $('.boxes').empty();

      $('.tokens').toggleClass('selected');
      setTokens();
    }
  });

// UPDATE BOARD ON CLICK /////////////////////
  $('#grid-container').on('click', 'div', function(event) {
    const id = event.target.id;

    if ($(this).text().length < 1 && game.gameOver === false) {
      if (game.playerOneTurn) {
        if (game.move(id)) {
          $(this).append(game.playerOneToken).children().hide().fadeIn(400);
        }
      } else if (game.playerOneTurn === false){
        if (game.move(id)) {
          $(this).append(game.playerTwoToken).children().hide().fadeIn(400);
        }
      }
    }

    $('#user-message span').text(game.message);
    $('#player-one-score').text(game.playerOneWinCount);
    $('#player-two-score').text(game.playerTwoWinCount);

    if (game.gameOver) {
      $('#grid-container div').css('visibility', 'hidden');
      for (let i = 0; i < 3; i++) {
        let winnerID = game.winningRow[i];
        $('#' + winnerID).addClass('winner');
        $('.winner').css('visibility', 'visible');
      }
    }
  });

// GAME RESET ///////////////////////////////
  $('#reset').on('click', function() {
    game.resetGame();
    $('#user-message span').text("");
    $('.boxes').empty();
    $('#grid-container div').fadeIn(200);
  });

}); // document ready
