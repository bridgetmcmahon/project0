$(document).ready(function() {

  // SET TOKENS /////////////////////////////////
    const setTokens = function() {
      if ($('#normal').hasClass('selected')) {
        game.playerToken = '<i class="fas fa-times"></i>';
        game.computerToken = '<i class="far fa-circle"></i>';
      } else if ($('#christmas').hasClass('selected')) {
        game.playerToken = '<i class="fas fa-candy-cane"></i>';
        game.computerToken = '<i class="fas fa-sleigh"></i>';
      }
    };

    $('.token-setting').on('click', function() {
      if (!$(this).hasClass('selected')) {
        game.resetGame();
        $('#user-message span').text("");
        $('.boxes').empty();

        $('.token-setting').toggleClass('selected');
        setTokens();
      }
    });

    // UPDATE BOARD ON CLICK //////////////////////
    $('#grid-container').on('click', 'div', function(event) {
      const playerID = event.target.id;

      if ($(this).text().length < 1 && game.gameOver === false) {
        if (game.playerMove(playerID)) {
          $(this).append(game.playerToken).children().hide().fadeIn(500);
          game.computerMove();
          const computerID = game.computerLastMove;
          $('#' + computerID).append(game.computerToken).children().hide().fadeIn(500);
        }
      }

      $('#user-message span').text(game.message);
      $('#player-one-score').text(game.playerWinCount);
      $('#player-two-score').text(game.computerWinCount);
    });

    // GAME RESET /////////////////////////////////
    $('#reset').on('click', function() {
      game.resetGame();
      $('#user-message span').text("");
      $('.boxes').empty();
    });

});
