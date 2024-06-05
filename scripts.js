var meguminRef = document.getElementById("MeguminImg");

meguminRef.onclick = function() {
    var currentImg = meguminRef.getAttribute("src");
    if (currentImg == "content/content/GladMeguminRain.png")
        meguminRef.setAttribute("src", "content/SeriousMeguminRain.png");
    else
        meguminRef.setAttribute("src", "content/GladMeguminRain.png");
}