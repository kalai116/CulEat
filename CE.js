  // Geofrey Javascript //
	

let currentRotation = 0; // Track total rotation

function spinLottery() {
  const wheel = document.querySelector('.wheelG');
  const resultElement = document.getElementById("result");

  const sections = [
    'Just Try Again',
    'Sorry Try Again',
    'Come for Tea Next Time',
    'You Lost',
    'Won A Chocolate',
    'Try Again',
    'You Didn’t Get Any Prize',
    'Try Another Luck'
  ];

  const totalSections = sections.length;
  const degreesPerSection = 360 / totalSections;

  // Pick a random section
  const randomIndex = Math.floor(Math.random() * totalSections);

  // Rotate multiple full circles + target section
  const spinDegrees = (5 * 360) + (randomIndex * degreesPerSection) + (degreesPerSection / 2);

  // Update total rotation
  currentRotation += spinDegrees;

  // Apply rotation to wheel
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  // Show result after spin completes
  setTimeout(() => {
    resultElement.innerHTML = "You: " + sections[randomIndex];
  }, 5000);
}
