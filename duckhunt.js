window.onload = function() {
  // const game_start = new Audio('audio/start-round.mp3');
  // game_start.play();

  // 6. Defines a createDuck function that returns a duck
  function createDuck() {
    const duck = document.createElement('div');
    duck.classList.add('duck');
    document.body.append(duck);

    // 2. Toggles the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function() {
      duck.classList.toggle('flap');
    }, 250);

    // 8a. Moves the newly created duck to a random location
    duck.style.top = `${Math.random() * window.innerHeight}px`;
    duck.style.left = `${Math.random() * window.innerWidth}px`;

    // 8b. Moves the duck to a new location after 1 second
    // 9. Ducks keep moving by using setInterval instead of setTimeout
    setInterval(function() {
      duck.style.top = `${Math.random() * window.innerHeight}px`;
      duck.style.left = `${Math.random() * window.innerWidth}px`;
    }, 2000);

    // --------------------------- PART 3 ------------------------------------

    // 11. BOOM. Attach a "click" handler that adds the "shot" class to
    //     the duck when you click on it!

    duck.addEventListener('click', function(event) {
      event.target.classList.add('shot');

      setTimeout(function() {
        // https://dzone.com/articles/removing-element-plain
        duck.parentNode.removeChild(duck);
        checkForWinner();
      }, 1000);
    });

    return duck;
  }
  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  function checkForWinner() {
    const ducks = document.querySelectorAll('.duck');

    console.log(ducks, ducks.length);

    if (ducks.length === 0) {
      alert('You Win!');
    }
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and shift the direction the duck is facing

  // 7. Creates 5 ducks
  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  // FIN. You win 1 trillion tokens.  Play the day away!
};
