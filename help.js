document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("help");
    const audio = document.getElementById("help-audio");

    setTimeout(() => {
        image.style.opacity = 1;
    }, 100);

    const playAudio = () => {
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
        document.removeEventListener('click', playAudio);
        document.removeEventListener('keydown', playAudio);
    };

    document.addEventListener('click', playAudio);
    document.addEventListener('keydown', playAudio);

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