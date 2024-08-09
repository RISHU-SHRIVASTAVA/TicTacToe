let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winPatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log("box is clicked");
        if(turn0){
            box.innerText ="O"
            turn0=false
        }
        else{
            box.innerText="X"
            turn0=true
        }
        box.disabled=true
        console.log(count);
        if(count==9){
            msg.innerText="Match is Tie !!"
            msgContainer.classList.remove("hide");
            disabledBoxes();
        }
        checkWinner()
    })
});

const showwinner =(winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes =() =>{
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame = () =>{
    count=0;
    turn0 =true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}


const checkWinner=()=>{
    for(pattern of winPatterns){        
    let pos1val = boxes[pattern[0]].innerText
    let pos1va2 = boxes[pattern[1]].innerText
    let pos1va3 = boxes[pattern[2]].innerText

    if(pos1val && pos1va2 && pos1va3){
        if(pos1val === pos1va2 && pos1va2 === pos1va3){
            console.log("winner "+ pos1val)
            showwinner(pos1val);
        }
    }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




