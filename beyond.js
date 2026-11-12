
console.log("Beyond JavaScript is connected!");
const quizButton = document.getElementById("quiz-button");
const quizResult = document.getElementById("quiz-result");

if (quizButton && quizResult) {

    const questions = ["question1", "question2", "question3"];

    const playerTypes = {
        exploration: "Explorer",
        storytelling: "Storyteller",
        creation: "Creator"
    };

    const messages = {
        exploration: "You enjoy discovering new places, finding hidden details, and exploring immersive worlds.",
        storytelling: "You enjoy emotional journeys, memorable characters, and meaningful stories.",
        creation: "You enjoy building, designing, experimenting, and bringing your own ideas to life."
    };

    quizButton.addEventListener("click", function () {

        const answers = questions.map(function (question) {
            return document.querySelector(
                'input[name="' + question + '"]:checked'
            );
        });

        if (answers.some(function (answer) {
            return answer === null;
        })) {
            quizResult.textContent = "Please answer all three questions first.";
            return;
        }

        const scores = {
            exploration: 0,
            storytelling: 0,
            creation: 0
        };

        answers.forEach(function (answer) {
            scores[answer.value]++;
        });

        const highestScore = Math.max(...Object.values(scores));

        const winners = Object.keys(scores).filter(function (type) {
            return scores[type] === highestScore;
        });

        if (winners.length === 1) {
            const winner = winners[0];

            quizResult.textContent =
                "You are an " + playerTypes[winner] + "! " + messages[winner];
        } else {
            const winnerNames = winners.map(function (type) {
                return playerTypes[type];
            });

            quizResult.textContent =
                "You are a mix of " + winnerNames.join(" and ") +
                "! You enjoy different types of gaming experiences.";
        }
    });

    document.querySelectorAll(".quiz-question input").forEach(function (input) {
        input.addEventListener("change", function () {
            quizResult.textContent = "";
        });
    });
}
