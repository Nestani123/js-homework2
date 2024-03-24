const userScore = document.querySelector("#you-score");
const userChoice = document.querySelector("#user-choice");

const computerScore = document.querySelector("#computer-score");
const computerChoice = document.querySelector("#computer-choice");

const choiceBtnList = document.querySelectorAll(".button-choice");

const resultTitle = document.querySelector(".third-heading");

for(let i=0; i<choiceBtnList.length; i++){
choiceBtnList[i].addEventListener('click', () => {
    const rendomNumber = Math.floor(Math.random()*3);
    userChoice.textContent = choiceBtnList[i].textContent;
    computerChoice.textContent = choiceBtnList[rendomNumber].textContent;

    if(userChoice.textContent===computerChoice.textContent){
        console.log("draw")
    }
        else if((userChoice.textContent==='🪨'&&computerChoice.textContent==='✂')||
            (userChoice.textContent==='✂'&&computerChoice.textContent==='📄')||
            (userChoice.textContent==='📄'&&computerChoice.textContent==='🪨')){
                userScore.textContent = Number(userScore.textContent)+1;

            } else {
                computerScore.textContent = Number(computerScore.textContent)+1;

            }

        }

);
    }
    



