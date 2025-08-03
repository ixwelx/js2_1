let color =  prompt().toLocaleLowerCase().trim()
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")

 if (color === "красный" || color === "red") {
    red.style.backgroundColor = "red";
    document.getElementById("word").innerText = "STOP"
} else if (color === "желтый" || color === "yellow") {
    yellow.style.backgroundColor = "yellow";
    document.getElementById("word").innerText = "WAIT"
} else if (color === "зеленый" || color === "green") {
    green.style.backgroundColor = "green";
    document.getElementById("word").innerText = "GO"
} else { 
    document.getElementById("word").innerText = "Oшибка! Введите цвет: красный, желтый или зеленый"
}
