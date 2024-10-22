document.getElementById("changeBtn").addEventListener("click", function() {
    const paragraph = document.getElementById("para2");
    paragraph.textContent = "А вот и гей!";
    paragraph.classList.add("changed");
});
