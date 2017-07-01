var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.background;
        if (clickedColor === pickColor){
            messageDisplay.textContent="Correct!";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function changeColor(color){
    for (var i = 0; i < squares.length; i++){
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
