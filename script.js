console.log("TicTacToe")

var touchAud = new Audio('touch.mp3')
let winAud = new Audio('win.mp3')


const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}


const chkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]


    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info-head').innerText = boxtext[e[0]].innerText + " Won"


            if (boxtext[e[0]].innerText == "X") {
                document.getElementById("s1").innerText++
            }
            else {
                document.getElementById("s2").innerText++

            }

            document.querySelector(".play-again").innerText = "Restart the game to play again";

            const time=()=>{
                document.querySelector(".play-box").style.visibility = "hidden";
            }
            
            document.querySelector(".rbtn").style.display="inline-block"
            setTimeout(time,500)
            // $(".play-box").fadeOut(1000,linear)
            
        }
    })
}


let turn = "X";
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        
        if (boxtext.innerHTML == "") {
            boxtext.innerHTML = turn;
            touchAud.play()
            winAud.pause()
            turn = changeTurn();
            chkWin();
            console.log("clicked")
        }
        
        
    })
    
    
})


// restart

let restart=document.querySelector(".restart")
restart.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerHTML = ""
    })
    document.querySelector(".play-box").style.visibility = "visible";
    document.querySelector(".play-again").innerText = "";
    document.querySelector('.info-head').innerText = "Score"
})

// reset

let reset = document.querySelector(".lbtn")

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerHTML = ""
    })
    document.querySelector('.info-head').innerText = "Score";
    document.querySelector(".play-again").innerText = ""
    document.querySelector("#s1").innerText = "0"
    document.querySelector("#s2").innerText = "0"
    turn = "X"
})

// no win

