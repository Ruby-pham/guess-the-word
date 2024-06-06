let questions = [
    {
        image: "https://tse1.mm.bing.net/th?id=OIP.SlOEDd4qG_pradkmBlFPxwHaE7&pid=Api&rs=1&c=1&qlt=95&w=179&h=119",
        answer: 'BOOK',
    },
    {
        image: "https://tse3.mm.bing.net/th?id=OIP._Z6a2C9TpqgVLg9c2mbioQHaFj&pid=Api&P=0&h=180",
        answer: 'PENCILS',
    },
    {
        image: "https://tse1.mm.bing.net/th?id=OIP.-j2Z8uM3koQgoo7xfV3eGwHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121",
        answer: 'NOTEBOOK',
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.hoVf-DOqbro9MzBhLuPKvQHaHH&pid=Api&P=0&h=180",
        answer: 'BACKPACK',
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.PelPhfw_e9C1TB7tl-DppwHaFj&pid=Api&P=0&h=180",
        answer: 'CLASSMATE',
    },

];
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
        message.innerHTML = `
          <div class="win">
                <h3>You Win</h3>
                <p>Score :${++score}</p>
                <button onclick="next()">Next</button>
                </div>
        `
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


