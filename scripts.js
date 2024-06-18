const meguminRef = document.getElementById("MeguminImg");
meguminRef.onclick = function() {
    var currentImg = meguminRef.getAttribute("src");
    if (currentImg == "content/content/GladMeguminRain.png")
        meguminRef.setAttribute("src", "content/SeriousMeguminRain.png");
    else
        meguminRef.setAttribute("src", "content/GladMeguminRain.png");
}

const notesRef = document.getElementById("NotesArea");
const notesHitBoxRef = document.getElementById("NotesHitBox");
notesHitBoxRef.onclick = function() {
    var notesStyle = window.getComputedStyle(notesRef);
    var visibilityOfNotes = notesStyle.getPropertyValue("visibility");
    if (visibilityOfNotes == "hidden") {
        notesRef.style.visibility = "visible";
    } else {
        notesRef.style.visibility = "hidden";
    }
}