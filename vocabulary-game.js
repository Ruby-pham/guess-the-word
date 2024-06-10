let questions = [
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/lemon.png",
        answer: 'lemon',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/grapes.png",
        answer: 'grapes',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/apple.png",
        answer: 'apple',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/pear.png",
        answer: 'pear',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/kiwi.png",
        answer: 'kiwi',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/durian.png",
        answer: 'durian',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/watermelon.png",
        answer: 'watermelon',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/avocado.png",
        answer: 'avocado',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/pineapple.png",
        answer: 'pineapple',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/fruits/banana.png",
        answer: 'banana',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/cabbage.png",
        answer: 'cabbage',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/green-peas.png",
        answer: 'peas',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/celery.png",
        answer: 'celery',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/onion.png",
        answer: 'onion',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/lettuce.png",
        answer: 'lettuce',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/chinese-cabbage.png",
        answer: 'Chinesecabbage',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/leek.png",
        answer: 'leek',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/asparagus.png",
        answer: 'asparagus',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/broccoli.png",
        answer: 'broccoli',
    },
    {
        image: "https://www.englishclub.com/images/vocabulary/quizzes/green-vegetables/artichoke.png",
        answer: 'artichoke',
    },

];
let start =document.getElementById('startBtn');
let topic = document.getElementById('topic');
let scoreDisplay = document.getElementById('score');
let image = document.getElementById('image');
let inputCharWord = document.getElementById('inputCharWord');
let message = document.getElementById('message');
let sound = document.getElementById('game-sound');
let arr = 0;
let score = 0;

function showFormQuestion() {
    if (arr < questions.length) {
        let currentWord = questions[arr];
        image.src = currentWord.image;
        let inputChar = '';
        for (let char of currentWord.answer) {
            inputChar += `<input type="text" class ="char-input" data-answer="${char.toUpperCase()}" maxlength="1" oninput="moveToNextInput(this)"/>`;
        }
        inputCharWord.innerHTML = `${inputChar}<button onclick="checkResult()">Submit</button>`;
        message.textContent = '';
        if (arr < 10) {
            topic.innerHTML = `Topic: Fruits`;
        } else {
            topic.innerHTML = `Topic: Green Vegetables`;
        }

    } else {
        // Khi đã đoán hết từ, bạn có thể thực hiện hành động gì đó ở đây, ví dụ: hiển thị thông báo hoàn thành trò chơi.
        document.getElementById('message').style.color = 'green'
        document.getElementById('message').innerHTML = `
            <h3>You have guessed all the words.</h3>`
    }
}

function moveToNextInput(inputChar) {
    if (inputChar.value.length === inputChar.maxLength && inputChar.nextElementSibling) {
        inputChar.nextElementSibling.focus();

    }
}

function checkResult() {
    // Lấy tất cả các phần tử HTML có lớp CSS là 'char-input', tức là các ô input mà người dùng nhập ký tự vào.
    let inputChars = document.querySelectorAll('.char-input');
    let answer = '';
    for (let i = 0; i < inputChars.length; i++) {
        answer += inputChars[i].value.toUpperCase();
    }
    let correctAnswer = questions[arr].answer.toUpperCase();
    if (answer === correctAnswer) {
        sound.play()
        inputCharWord.innerHTML = `
          <div class="win">
                <h3>You Win</h3>
                <button onclick="next()">Next</button>
                </div>       
        `
        score += 10;
        scoreDisplay.textContent = `Score : ${score}`;
        message.textContent = '';

    } else {
        message.style.color = 'red'
        message.innerHTML = `
        <h3>Incorrect! Try again</h3>
        `
    }
}

function next() {
    arr++;
    if (arr < questions.length) {
        showFormQuestion();
    } else {
        message.style.color = 'green';
        message.innerHTML = `
         <h3>You have guessed all the words.</h3>
        `
    }

}

showFormQuestion()


