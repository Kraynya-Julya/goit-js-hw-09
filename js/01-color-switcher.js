const startElBtn = document.querySelector('[data-start]');
const stopElBtn = document.querySelector('[data-stop]');

let timerId  = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const changesBackgroundColorOfBody = function() {
    const currentColor = `${getRandomHexColor()}`;
    document.body.style.backgroundColor = currentColor;
 }


 startElBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    changesBackgroundColorOfBody();
  }, 1000);

  startElBtn.setAttribute('disabled', '');
  stopElBtn.removeAttribute('disabled');
});


stopElBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);


  startElBtn.removeAttribute('disabled');
  stopElBtn.setAttribute('disabled', '');
});тз


 
