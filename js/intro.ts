document.addEventListener("DOMContentLoaded", () => {

    const introMusic = document.getElementById("introMusic");
    const homeMusic  = document.getElementById("homeMusic");
    const music      = document.getElementById("bgMusic");

    const rocket = document.getElementById("rocket");
    const firework = document.getElementById("firework");
    const text = document.getElementById("newYearText");
    const intro = document.getElementById("intro");
    const home = document.getElementById("homeContent");

    // 🚀 Rocket animation end
    rocket.addEventListener("animationend", () => {

        rocket.style.display = "none";

        firework.style.opacity = "1";
        firework.style.transform = "translate(-50%, -50%) scale(1)";
        firework.style.transition = "transform 0.6s ease-out";

        // ✨ Text after blast
        setTimeout(() => {
            firework.style.opacity = "0";

            text.style.opacity = "1";
            text.style.transform = "scale(1)";
            text.style.transition = "1.2s ease-out";
        }, 1200);

        // 🏠 Show home
        setTimeout(() => {
            intro.style.display = "none";
            home.style.display = "block";
            document.body.style.overflow = "auto";
        }, 3500);
    });

    // 🎵 START MUSIC ON FIRST USER INTERACTION (IMPORTANT)
    document.addEventListener("click", () => {
        if (music && music.paused) {
            music.volume = 0.25;
            music.play().catch(() => {});
        }
    }, { once: true });

});