var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + "." + "png"
console.log(randomImage1);
document.querySelector("img.img1").setAttribute("src", "images/"+ randomImage1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + "." + "png"
console.log(randomImage2);
document.querySelector("img.img2").setAttribute("src", "images/"+ randomImage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector("img.left").classList.remove("invisible");
}else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelector("img.right").classList.remove("invisible")
}else {
        document.querySelector("h1").innerHTML = "Draw!"
} 