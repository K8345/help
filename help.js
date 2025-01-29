// help.js
document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("help");
    image.style.opacity = 1;

    let clickCount = 0;
    const maxClicks = 15;
    const stretchFactor = 0.6;

    image.addEventListener("click", function () {
        if (clickCount < maxClicks) {
            image.style.transform = `scaleX(${1 + (clickCount + 1) * stretchFactor / maxClicks})`;
            clickCount++;
        } else {
            image.style.transform = "scaleX(1)";
            clickCount = 0;
        }
    });
});