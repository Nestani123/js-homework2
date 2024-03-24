const userScore = document.querySelector("#you-score");
const userChoice = document.querySelector("#user-choice");

const computerScore = document.querySelector("#computer-score");
const computerChoice = document.querySelector("#computer-choice");

const choiceBtnList = document.querySelectorAll(".button-choice");

const resultTitle = document.querySelector(".third-heading");
let heading = document.querySelector(".third-heading");

let counterUser = 0;
let counterComp = 0;

for(let i=0; i<choiceBtnList.length; i++){
choiceBtnList[i].addEventListener('click', () => {
    const rendomNumber = Math.floor(Math.random()*3);
    userChoice.textContent = choiceBtnList[i].textContent;
    computerChoice.textContent = choiceBtnList[rendomNumber].textContent;

   if(userChoice.textContent===computerChoice.textContent){
    console.log("Draw");
   }else if((userChoice.textContent === "📄" && computerChoice.textContent === "🪨") ||
    (userChoice.textContent === "🪨" && computerChoice.textContent === "✂️") ||
    (userChoice.textContent === "✂️" && computerChoice.textContent === "📄")){
        userScore.textContent = Number(userScore.textContent) + 1;
        counterUser++;
        checkResult(counterUser);
    } else {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            counterComp++;
            checkResult(counterComp);
        }


        function checkResult(result){
        if(result===7){
            if(userScore.textContent>computerScore.textContent){
                //heading.textContent = "You Lost!";
                alert("მოიგე!");
                
            }else if(computerScore.textContent>userScore.textContent){
                //heading.textContent = "You Won!";
                alert("წააგე!");
            }else{
                //heading.textContent = "It's a tie";
                alert("ფრეა!");

            
            }
        }
    }

    }
    );
    }

    



