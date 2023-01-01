let Result = document.getElementById("Result-Text");
let resetbtn = document.getElementById("reset-btn");


let Chance = "Player 1";
let Player = Chance + "'s chance ☝"
let disabledbtn = 0;
let audio = new Audio('./Sound/Win-Sound.wav');
let audio1 = new Audio('./Sound/Reset-Sound.wav');

document.getElementById("chance").innerHTML = Player;



/* Main Function*/
function Input(id) {
    if (Chance === "Player 1") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "x"
        Chance = "Player 2"
        Player = Chance + "'s chance ✌"
        document.getElementById("chance").innerHTML = Player
       disabledbtn = disabledbtn+1;
       CheckWinner()
    }
    else if (Chance === "Player 2") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "0"
        Chance = "Player 1"
        Player = Chance + "'s chance ☝"
        document.getElementById("chance").innerHTML = Player
        disabledbtn = disabledbtn+1;

        CheckWinner()
    }
}

/* Diseable() to stop user input after wining or draw a match*/
function Diseable(){
    for( let i = 1; i<10; i++){
    /* i<10 means 9 & i++ means joto khon na i = 9 hoche toto khon i er value add hobe */
        let id = "btn"+i
        /* "btn+i" means btn1,btn2....btn9*/
        document.getElementById(id).disabled = true;
    }
   Result.style.visibility = "visible"
    resetbtn.style.visibility = "visible"
}

function Reset(){
    for( let i = 1; i<10; i++){
        let id = "btn"+i
        document.getElementById(id).disabled = false;
        document.getElementById(id).innerHTML = "";
    document.getElementById(id).style.animation="";

    }
    Result.style.visibility = "hidden";
    resetbtn.style.visibility = "hidden";
    Chance = "Player 1";
    Player = Chance + "'s chance"
    document.getElementById("chance").innerHTML = Player;
       disabledbtn = 0;

}

function CheckWinner(){
    let btn1 = document.getElementById("btn1").innerHTML;
    let btn2 = document.getElementById("btn2").innerHTML;
    let btn3 = document.getElementById("btn3").innerHTML;
    let btn4 = document.getElementById("btn4").innerHTML;
    let btn5 = document.getElementById("btn5").innerHTML;
    let btn6 = document.getElementById("btn6").innerHTML;
    let btn7 = document.getElementById("btn7").innerHTML;
    let btn8 = document.getElementById("btn8").innerHTML;
    let btn9 = document.getElementById("btn9").innerHTML;

    
    if (btn1 === "x" && btn2 === "x" && btn3 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn2").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn4 === "x" && btn5 === "x" && btn6 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn4").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn6").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn7 === "x" && btn8 === "x" && btn9 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn8").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn1 === "x" && btn4 === "x" && btn7 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn4").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn2 === "x" && btn5 == "x" && btn8 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn2").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn8").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn3 === "x" && btn6 === "x" && btn9 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn6").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn1 === "x" && btn5 === "x" && btn9 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn3 === "x" && btn5 === "x" && btn7 === "x") {
        Diseable()
        Result.innerHTML = "Player 1 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn1 === "0" && btn2 === "0" && btn3 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn2").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    
    }
    
    else if (btn4 === "0" && btn5 === "0" && btn6 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn4").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn6").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn7 === "0" && btn8 === "0" && btn9 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn8").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn1 === "0" && btn4 === "0" && btn7 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn4").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn2 === "0" && btn5 == "0" && btn8 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn2").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn8").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn3 === "0" && btn6 === "0" && btn9 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn6").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    
    
    else if (btn1 === "0" && btn5 === "0" && btn9 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn1").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn9").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if (btn3 === "0" && btn5 === "0" && btn7 === "0") {
        Diseable()
        Result.innerHTML = "Player 2 won 😉!"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
    audio.play();
    document.getElementById("btn3").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn5").style.animation="Jumping 0.5s infinite";
    document.getElementById("btn7").style.animation="Jumping 0.5s infinite";
    
    
    }
    
    else if(disabledbtn === 9) {
        Diseable()
        Result.innerHTML = "Match Draw !"
        Result.style.visibility = "visible"
        resetbtn.style.visibility = "visible"
         audio1.play();
    
    }
    }





