let questions = [
    {
        question: "kept for it's eggs and meat",
        answer: 'chicken',
        image: 'https://tse3.mm.bing.net/th?id=OIP.RvFSunw4uH7drZUOkN4sogHaGS&pid=Api&P=0&h=180',
    },
    {
        question: "a piece of clothing made to fit the head",
        answer: 'hat',
        image: 'https://tse3.mm.bing.net/th?id=OIP.DGOcJVboK5G9pSik5l1OlwHaFj&pid=Api&P=0&h=180',
    },
    {
        question: "a son of your son or your daughter",
        answer: 'grandson',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Nnhy0hnFA5OMIBUhVl5s4QHaJJ&pid=Api&P=0&h=180',
    },
    {
        question: "To release air noisily from the lungs",
        answer: 'cough',
        image: 'https://tse1.mm.bing.net/th?id=OIP.b8qMH5LKBg2G3Trr5gQwOQHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113',
    },
    {
        question: "a narrow passageway in a building; corridor",
        answer: 'hall',
        image: 'https://tse3.mm.bing.net/th?id=OIP.IeZe8kZ0EF6Akx7vZJrGdQHaE8&pid=Api&P=0&h=180',
    },
    {
        question: "a place where goods are sold",
        answer: 'store',
        image: 'https://tse1.mm.bing.net/th?id=OIP.QYnyRHE6v35XYgJhIjrIawAAAA&pid=Api&P=0&h=180',
    },
    {
        question: "kept on farms to produce milk or beef",
        answer: 'cow',
        image: 'https://tse3.mm.bing.net/th?id=OIP.CPoiuBwBX4I0pp__FeTBvwHaFS&pid=Api&P=0&h=180',
    },
    {
        question: "using skis to move over snow quickly",
        answer: 'skiing',
        image: 'https://tse3.mm.bing.net/th?id=OIP.HlPgWcmrDxFYuzc0i4wBxgHaFI&pid=Api&P=0&h=180',
    },
    {
        question: "a hard, clear material that breaks easily",
        answer: 'glass',
        image: 'https://tse2.mm.bing.net/th?id=OIP.SN63pS-uLD-OQ5Etb1zK7QHaLV&pid=Api&P=0&h=180',
    },
    {
        question: "a sport in which players use rackets to hit a small rubber object back and forth across a high net",
        answer: 'badminton',
        image: 'https://tse1.mm.bing.net/th?id=OIP.NKzlHG-LDQnhsDPlk_7KewHaE8&pid=Api&rs=1&c=1&qlt=95&w=174&h=116',
    },
    {
        question: "a place where living animals, especially wild ones, are kept for people to look at",
        answer: 'zoo',
        image: 'https://tse1.mm.bing.net/th?id=OIP.xQs7_PSBBr4pLF_Iyk56ngHaDo&pid=Api&rs=1&c=1&qlt=95&w=182&h=89',
    },
    {
        question: "a small animal that flies at night",
        answer: 'bat',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3ggI6uCiupX6YIiwRYunswHaE6&pid=Api&rs=1&c=1&qlt=95&w=157&h=104',
    },
    {
        question: "the place where one lives permanently, especially as a member of a family or household",
        answer: 'home',
        image: 'https://tse3.mm.bing.net/th?id=OIP.t5Ul933v6D7nqYT0oQ9FJQHaEh&pid=Api&P=0&h=180',
    },
    {
        question: "anything that happens, especially something important or unusual",
        answer: 'event',
        image: 'https://tse2.mm.bing.net/th?id=OIP.TOVBNghqGtFgnTKf0YoOSQHaE8&pid=Api&P=0&h=180',
    },
    {
        question: "a road vehicle with an engine, four wheels, and seats for a small number of people",
        answer: 'car',
        image: 'https://tse1.mm.bing.net/th?id=OIP._GCVhLmCRPm_W4TOyBrIuQHaEK&pid=Api&P=0&h=180',
    },

];

let questionElement = document.getElementById("question");
let resultElement = document.getElementById("result");
let message = document.getElementById('message');
let hint = document.getElementById('hint');
let scoreDisplay =document.getElementById('score');
let arr = 0;
let score = 0;
let sound = document.getElementById('game-sound');

function displayQuestion() {
    let currentWord = questions[arr];
    questionElement.innerHTML = currentWord.question.toUpperCase();
    // Hien thi cac nut button theo tung chu cai cua tu can doan
    let input = '';
    for (let char of currentWord.answer) {
        input += `<input type="text" class ="char-input" data-answer="${char.toUpperCase()}" maxlength="1" oninput="moveToNextInput(this)"/>`;
    }
    resultElement.innerHTML = `${input}<br><button onclick="checkResult()">Submit</button>`;
    if(arr<10){
        topic.innerHTML=`Topic : Animals live in the Farm`
    } else{topic.innerHTML=`Topic : footwear`}
    message.textContent = '';
    hint.style.display='none';

}

function moveToNextInput(input) {
    // Nếu ô input hiện tại đã đạt tới giới hạn ký tự (maxlength) và ô input tiếp theo tồn tại
    if (input.value.length === input.maxLength && input.nextElementSibling) {
        // Focus vào ô input tiếp theo
        input.nextElementSibling.focus();
    }
}

function checkResult() {
    // Lấy tất cả các phần tử HTML có lớp CSS là 'char-input', tức là các ô input mà người dùng nhập ký tự vào.
    let inputs = document.querySelectorAll('.char-input');
    //  lưu trữ chuỗi ký tự mà người dùng nhập vào từ các ô input
    let answer = '';
    for (let i = 0; i < inputs.length; i++) {
        answer += inputs[i].value.toUpperCase();
    }

    let correctAnswer = '';
    for (let i = 0; i < inputs.length; i++) {
        correctAnswer += inputs[i].dataset.answer;
    }
    if (answer === correctAnswer) {
        sound.play();
        resultElement.innerHTML = `
                <div class="win">
                <h3>You Win</h3>
                <button onclick="next()">Next</button>
                </div>
                `
        score+=10;
        scoreDisplay.innerHTML=`Score: ${score}`;
        message.textContent = '';
    } else {
        message.style.color = 'red'
        message.innerHTML = `
            <h3>Incorrect! Try again.</h3>
            `;
    }
}

function next() {
    arr++;
    if (arr < questions.length) {
        displayQuestion();
    } else {
        // Khi đã đoán hết từ, bạn có thể thực hiện hành động gì đó ở đây, ví dụ: hiển thị thông báo hoàn thành trò chơi.
        resultElement.style.color = 'green'
        resultElement.innerHTML = `
            <h3>You have guessed all the words.</h3>`
    }
}

function showHint() {
    if (arr < questions.length) {
        let currentWord = questions[arr];
        hint.src = currentWord.image;
        hint.style.display='block';
    }

}

displayQuestion();