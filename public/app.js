const gradientBtn = document.querySelector('#gen-gradient');
const gradientText = document.querySelector('#gradient-text');

const generateHex = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const applyGradient = (generatedGradient) => {
  document.body.style.background = generatedGradient;
  gradientText.innerHTML = generatedGradient;
};

const generateAndApply = () => {
  let colour1 = generateHex();
  let colour2 = generateHex();
  while (colour1 === colour2) {
    colour2 = generateHex();
    console.log('gen');
  }
  let angle = Math.floor(Math.random() * 360);
  let gradient = `linear-gradient(${angle}deg, ${colour1}, ${colour2})`;
  applyGradient(gradient);
};

gradientBtn.addEventListener('click', generateAndApply);
document.onload = generateAndApply();
