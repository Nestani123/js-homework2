const userScore = document.querySelector("#you-score");
const userChoice = document.querySelector("#user-choice");

const computerScore = document.querySelector("#computer-score");
const computerChoice = document.querySelector("#computer-choice");

const choiceBtnList = document.querySelectorAll(".button-choice");

for(let i=0; i<choiceBtnList.length; i++){
choiceBtnList[i].addEventListener('click', () => {
    const rendomNumber = Math.floor(Math.random()*3);
    userChoice.textContent = choiceBtnList[i].textContent;
    computerChoice.textContent = choiceBtnList[rendomNumber].textContent;
})
}


