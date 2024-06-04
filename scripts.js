var meguminRef = document.getElementById("MeguminImg");

meguminRef.onclick = function() {
    var currentImg = meguminRef.getAttribute("src");
    if (currentImg == "content/Довольная Мегумин на шапку.png")
        meguminRef.setAttribute("src", "content/Мегумин на шапку.png");
    else
        meguminRef.setAttribute("src", "content/Довольная Мегумин на шапку.png");
}