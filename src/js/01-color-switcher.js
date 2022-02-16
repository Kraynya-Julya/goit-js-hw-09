Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Kraynya-Julya 
Kraynya-Julya
/
goit-js-hw-09
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
goit-js-hw-09/js/01-color-switcher.js /
@Kraynya-Julya
Kraynya-Julya 999999
Latest commit efe5ad6 1 hour ago
 History
 1 contributor
37 lines (23 sloc)  850 Bytes
   

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
});


 
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
