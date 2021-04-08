const circles = document.getElementsByClassName('circle');

enlargeCircle = e => {
    // e.target.style.width = e.target.offsetWidth*2 + "px";
    // e.target.style.height = e.target.offsetHeight*2 + "px";
    // e.target.style.left = e.target.offsetLeft - e.target.offsetHeight/2 + "px";
    // e.target.style.bottom = (e.target.offsetTop-e.target.offsetHeight) - e.target.offsetHeight/2 + "px";
    e.target.style.backgroundColor = "red";
    // e.target.style.borderWidth = "16px"
}

arrangeCircles = () => {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.bottom = Math.random() * 500 + "px";
        circles[i].style.left = Math.random() * 300 + "px";
        let size = Math.floor(Math.random() * 40 + 20) + "px";
        circles[i].style.width = size;
        circles[i].style.height = size;
        circles[i].style.animationDelay = Math.random()*2 + "s"
        circles[i].addEventListener('click', enlargeCircle)
    };
}



arrangeCircles();