let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset-btn");

let turnO=true; //playerX , PlayerO
let gameOver=false;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.pointerEvents="none";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.pointerEvents="none";
            turnO=true;
        }
        checkWin();
    });
});

const checkWin=()=>{
    for(let pattern of winPatterns){
        let box1=boxes[pattern[0]].innerText;
        let box2=boxes[pattern[1]].innerText;
        let box3=boxes[pattern[2]].innerText;

        if(box1!="" && box1===box2 && box2===box3){
            gameOver=true;
            boxes[pattern[0]].style.backgroundColor="lightgreen";
            boxes[pattern[1]].style.backgroundColor="lightgreen";
            boxes[pattern[2]].style.backgroundColor="lightgreen";
            
            break;
        }

    }
   
};

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents="auto";
        box.style.backgroundColor="white";
    });
    turnO=true;
    gameOver=false;
});