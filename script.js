// Mapping of correct answers to their respective next clue pages
const answers = {
    "index": "mystery",
    "clue1": "mastery",
    "clue2": "mystery",
    "clue3": "hidden",
    "clue4": "cipher",
    "clue5": "secrets"
};

// Mapping of next pages
const nextPages = {
    "index": "clue1.html",
    "clue1": "clue2.html",
    "clue2": "clue3.html",
    "clue3": "clue4.html",
    "clue4": "clue5.html",
    "clue5": "final.html"
};

// Function to check the answer
function checkAnswer(page) {
    const userInput = document.getElementById("answer").value.toLowerCase().trim();
    const correctAnswer = answers[page];

    if (userInput === correctAnswer) {
        window.location.href = nextPages[page]; // Redirect to the next clue
    } else {
        document.getElementById("message").innerText = "Incorrect! Try again.";
    }
}
