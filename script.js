const questions = [
    {
        question: "吃香菜嗎？",
        imageUrl: "https://cdn.pixabay.com/photo/2017/01/09/11/33/smoothie-drink-1966284_640.jpg"
    },
    {
        question: "吃青蔥嗎？",
        imageUrl: "https://images.pexels.com/photos/12361992/pexels-photo-12361992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        question: "吃小黃瓜嗎？",
        imageUrl: "https://images.pexels.com/photos/8679633/pexels-photo-8679633.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        question: "吃茄子嗎？",
        imageUrl: "https://images.pexels.com/photos/5848475/pexels-photo-5848475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        question: "吃番茄嗎？",
        imageUrl: "https://images.pexels.com/photos/7223301/pexels-photo-7223301.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        question: "吃芋頭嗎？",
        imageUrl: "https://images.pexels.com/photos/5335709/pexels-photo-5335709.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        question: "吃苦瓜嗎？",
        imageUrl: "https://images.pexels.com/photos/11168354/pexels-photo-11168354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        question: "吃青椒嗎？",
        imageUrl: "https://images.pexels.com/photos/6653590/pexels-photo-6653590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        question: "吃鳳梨披薩嗎？",
        imageUrl: "https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        question: "喝杏仁茶嗎？",
        imageUrl: "https://images.pexels.com/photos/4187716/pexels-photo-4187716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

let currentQuestion = 0;
let eatScore = 0;

const questionText = document.getElementById("question-text");
const eatButton = document.getElementById("eat-button");
const notEatButton = document.getElementById("not-eat-button");
const responseText = document.getElementById("response-text");
const scoreText = document.getElementById("score-text");
const commentText = document.getElementById("comment-text");
const restartButton = document.getElementById("restart-button");
const resultContainer = document.getElementById("result-container");

function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion].question;
        const imageUrl = questions[currentQuestion].imageUrl;
        const questionImage = document.getElementById("question-image");
        questionImage.src = imageUrl;
        eatButton.style.display = "block";
        notEatButton.style.display = "block";
        resultContainer.style.display = "none"; // 隱藏結果容器
    } else {
        calculateResult();
    }
}

function calculateResult() {
    let comment = "";
    if(eatScore == 10) {
        comment = "請注意您的身體健康！";
    } else if (eatScore >= 7) {
        comment = "至少還有可以吃的...";
    } else if (eatScore >= 5) {
        comment = "您是個正常人";
    } else if (eatScore >= 3) {
        comment = "您很健康。";
    } else if (eatScore >= 1) {
        comment = "這分數已經超越大部分的人了。";
    } else {
        comment = "真的有這種人存在?";
    }

    // 在HTML元素中顯示註釋
    const commentText = document.getElementById("comment-text");
    commentText.innerHTML = comment;

    scoreText.textContent = `挑食積分：${eatScore}`;
    commentText.textContent = `評語：${comment}`;
    resultContainer.style.display = "block";
    
    // 隱藏吃和不吃按鈕
    eatButton.style.display = "none";
    notEatButton.style.display = "none";
    
    // 顯示重新開始按鈕
    restartButton.style.display = "block";
    restartButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    eatScore = 0;
    resultContainer.style.display = "none";
    restartButton.style.display = "none";
    displayQuestion();
}

notEatButton.addEventListener("click", () => {
    eatScore++;
    currentQuestion++;
    displayQuestion();
});

eatButton.addEventListener("click", () => {
    currentQuestion++;
    displayQuestion();
});

displayQuestion();