const body = document.querySelector("body");
function createHeart() {const heart = document.createElement("div"); 
    heart.className = "fas fa-heart"; 
    heart.style.left = (Math.random() * 90)+"vw"; 
    heart.style.animationDuration = (Math.random()*3)+2+"s"; 
    body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); 
    if (heartArr.length > 100) {heartArr[0].remove()}},100);