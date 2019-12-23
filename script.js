window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  // Colors
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60cbd3",
    "#000000"
  ];

  // Plays sound
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      // Calls createBubble function
      createBubbles(index);
    });
  });

  // Creates a function that produces bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    })
  }
});




