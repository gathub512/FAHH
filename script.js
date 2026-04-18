function getRandomInt(min, max) {
  // If you want decimals, use (Math.random() * (max - min) + min)
  return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.orange').addEventListener('click', function() {
  const audio = document.querySelector('.oran');
  const display = document.querySelector('.orange'); // Changing the text on the button itself

  // 1. Generate the random rate
  const newRate = getRandomInt(1, 6); 

  // 2. Apply to audio
  audio.playbackRate = newRate;
  audio.play();

  // 3. Update the text (Corrected the reference here)
  display.textContent = "Fahh is playing at " + newRate + "x Speed.";
});
