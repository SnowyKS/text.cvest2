let start = document.getElementById("start");
let cells = document.querySelectorAll(".cell");
console.log(cells);
let player = true;
let table = document.getElementById("table");
let moves = [0,1,2,3,4,5,6,7,8];

let body = document.body;

start.onclick = function(){
    start.parentNode.removeChild(start);
    let comp = document.createElement("button");
    comp.textContent = "ход компьютера";
    body.append(comp);
    game();

    for (let item of cells){
        item.addEventListener('click', ()=>{
            if (item.textContent == ""){
            item.textContent = "x";
            }
        })

    }

    comp.addEventListener("click", computer_move);
};

function random(){
    let randomItem = Math.floor(Math.random()* moves.length);
    return randomItem;
}

function computer_move(){
   
}

function check_winner(){

}


function game(){
  // проверить, что игрок совершил ход
  
    check_winner();
    //computer_move();
    check_winner();
  
  // вызвать функцию computer move

}