const render = function() {
  game.resetGame();
  $('#user-message span').text("");
  $('.boxes').empty().removeClass('winner');
  $('#grid-container div').css('visibility', 'visible');
}

$(document).ready(function() {

  $('#very-festive').on('click', function() {
    $(this).hide();
    $('#christmas').show();
    $('header h2').fadeIn(200);
    $('header').css('background', '#E71D36');
    $('main').css('background-color', '#7DCE82');
    $('#scores, #tally, #user-message').css('background-color', '#7DCE82');
    $('footer').css('background-color', '#E71D36');
    $('#player-player, #computer').css({'background-color': '#fff', 'color': '#7DCE82'});
    $('.boxes').css('color', '#5B965F');
    $('.tokens').toggleClass('selected');
    setTokens();
    render();
  });

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
      render();
      $('.tokens').toggleClass('selected');
      setTokens();
    }
  });


// SET PLAYER OR COMPUTER /////////////////////
  $('#player-player').on('click', function() {
    const score = $('#player-two span').text();
    game.isComputerOpponent = false;
    $('#player-two').html('Player 2: <span id="player-two-score">' + score + '</span>');
    render();
  });

  $('#computer').on('click', function() {
    const score = $('#player-two span').text();
    game.isComputerOpponent = true;
    $('#player-two').html('Computer: <span id="player-two-score">' + score + '</span>');
    render();
  });


// UPDATE BOARD ON CLICK (HUMANS) /////////////////////
  $('#grid-container').on('click', 'div', function(event) {

    if (game.isComputerOpponent === false) {

      if ($(this).html().length < 1 && game.gameOver === false) {
        const id = event.target.id;
        if (game.playerOneTurn) {
          if (game.move(id)) {
            $(this).append(game.playerOneToken).children().hide().fadeIn(400);
          }
        } else if (game.playerOneTurn === false) {
          if (game.move(id)) {
            $(this).append(game.playerTwoToken).children().hide().fadeIn(400);
          }
        }
      }
    }

    if (game.isComputerOpponent === true) {

      if ($(this).html().length < 1 && game.gameOver === false) {
        const id = event.target.id;

        if (game.move(id)) {
          $(this).append(game.playerOneToken).children().hide().fadeIn(400);
          if (game.gameOver === false) {
            $('#' + game.performMoveForComputer()).append(game.playerTwoToken).children().hide().delay(700).fadeIn(400);
          }
        }
      }
    }

    $('#user-message span').text(game.message);
    $('#player-one-score').text(game.playerOneWinCount);
    $('#player-two-score').text(game.playerTwoWinCount);

    if (game.gameOver === true) {
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
    render();
  });

}); // document ready
