let game = document.querySelector(".secondclass");
const cells = document.querySelectorAll(".butn");
const reset = document.querySelector("#reset");
const newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO = true; //playerx or player- y
const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
];

cells.forEach((butn) => {
    butn.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            butn.innerText = "O"; //here player turn is execute jabai
            butn.style.backgroundColor = "red";
            turnO = false; //enfrai da turnO a false jabai mane be playernw turn khw ooff khamna hwbai
        } else {
            butn.innerText = "X";
            butn.style.backgroundColor = "blue";
            turnO = true; //enfrai da turnO a true hwbai mane be playernw turn khw on  khamna hwbai so be select khamnw hacgwn.
        }
        butn.disabled = true;

        checkWinner();
    });
});

const disableButn = () => {
    for (let butn of cells) {
        butn.disabled = true;
    }
};

const enableButn = () => {
    for (let butn of cells) {
        butn.disabled = false;
        butn.innerHTML = "";
        butn.style.backgroundColor = "rgb(238, 228, 228)";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations ${winner} is the Winner!`;
    msgContainer.classList.remove("hide");
    disableButn();
}

const checkWinner = () => {
    let count = 0; // Initialize count for each check
    for (let pattern of winningPattern) {
        let pos1Val = cells[pattern[0]].innerText;
        let pos2Val = cells[pattern[1]].innerText;
        let pos3Val = cells[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner!", pos1Val);
                showWinner(pos1Val);
                return; // Exit early if a winner is found
            }
        }
    }
    for (let cell of cells) {
        if (cell.innerText !== "") {
            count++;
        }
    }
    if (count === 9) {
        msg.innerText = `The game has ended in a draw!`;
        msgContainer.classList.remove("hide");
        disableButn();
    }
}

const resetGame = () => {
    turnO = true;
    enableButn();
    msgContainer.classList.add("hide");
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
