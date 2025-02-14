document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Varying speeds

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500); // Creates hearts every 0.5s
});
