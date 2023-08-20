// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        mimicServerCall()
            .then(() => {
                if (heart.innerHTML === EMPTY_HEART) {
                    heart.classList.add("activated-heart");
                    heart.innerHTML = FULL_HEART;
                } else {
                    heart.classList.remove("activated-heart");
                    heart.innerHTML = EMPTY_HEART;
                }
            })
            .catch(() => {
                const error = document.getElementById("modal");
                error.classList.remove("hidden");
                setTimeout(() => {
                    error.classList.add("hidden");
                }, 3000);
            });
    });
});

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let isRandomFailure = Math.random() < 0.2;
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}
