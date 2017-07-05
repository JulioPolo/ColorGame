var difficulty = 6;
var colors = generateRandomColor(difficulty);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.background;
        if (clickedColor === pickedColor){
            messageDisplay.textContent="Correct!";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

easyButton.addEventListener("click", function(){
    difficulty = 3;
    reDraw(difficulty);
    this.classList.add("selected");
    hardButton.classList.remove("selected");
});

hardButton.addEventListener("click", function(){
    difficulty = 6;
    reDraw(difficulty);
    this.classList.add("selected");
    easyButton.classList.remove("selected");
});

resetButton.addEventListener("click", function(){
    reDraw(difficulty);
});

function CleanSquares(){
    for (var i = 0; i < 6; i++){
        squares[i].style.background = "#232323";
    }
}

function reDraw(dif) {
    CleanSquares();
    colors = generateRandomColor(dif);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

function changeColor(color){
    for (var i = 0; i < difficulty; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    //pick a green from 0 to 255
    //pick a blue from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}
