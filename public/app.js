const gradientBtn = document.getElementById('gen-gradient');
const gradientText = document.getElementById('gradient-text');

const generateHex = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const applyGradient = (generatedGradient) => {
  document.body.style.background = generatedGradient;
  gradientText.innerHTML = generatedGradient;
};

let colour1 = generateHex();
let colour2 = generateHex();
let angle = Math.floor(Math.random() * 360);
let gradient = `linear-gradient(${angle}deg, ${colour1}, ${colour2})`;
gradientBtn.addEventListener('click', applyGradient(gradient));

gradientBtn.style.background = gradient;
document.onload = applyGradient(gradient);
