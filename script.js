// загальний контейнер
let magicBallContainer = document.createElement("div");
magicBallContainer.classList.add("magic-ball-container");

// зображення магічної кулі
let magicBall = document.createElement("img");
magicBall.src = "https://img.freepik.com/free-vector/magic-sphere-illustration_1284-6361.jpg?w=740&t=st=1698333952~exp=1698334552~hmac=6382b4a0f878744517384320ca487cf4cce0b4b1b0f081e0e5f68fc7398cdf85";
magicBall.id = "magic-ball";
magicBall.alt = "Магічна куля";

// поле для питання
let questionInput = document.createElement("input");
questionInput.type = "text";
questionInput.id = "question-input";
questionInput.placeholder = "Задайте магічній кулі питання";

// кнопка 
let answerButton = document.createElement("button");
answerButton.id = "answer-button";
answerButton.textContent = "Отримати відповідь";

// блок для відповіді
let answerDiv = document.createElement("div");
answerDiv.id = "answer";
answerDiv.classList.add("hidden");
answerDiv.textContent = "прихований текст";

// вставка елементів в контейнер
magicBallContainer.appendChild(magicBall);
magicBallContainer.appendChild(questionInput);
magicBallContainer.appendChild(answerButton);
magicBallContainer.appendChild(answerDiv);

// вставка контейнера в тіло документа
document.body.appendChild(magicBallContainer);

// масив відповідей
let answers = ["так", "запитайте пізніше", "ні", "можливо", "навряд", "точно так", "точно ні", "найімовірніше"];

// рандомна відповідь
function randomAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

// обробник подій
answerButton.addEventListener("click", () => {
    let question = questionInput.value.trim();
    if (question != "") {
        let answer = randomAnswer();
        answerDiv.textContent = `Куля говорить: ${answer}`;
        answerDiv.classList.remove("hidden");
    } 
    else 
        alert("Введіть питання!");
});
