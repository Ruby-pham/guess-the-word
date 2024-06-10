class ui {
    showScreen(screenName) {
        let screens = document.querySelectorAll('#wrapper>div')
        screens.forEach((screen) => {
            screen.style.display = 'none';
        })
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    onStartBtnClick(callback) {
        let startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click', callback);

    }
    backScreen(back){
        let backBtn = document.getElementById('back')
        backBtn.addEventListener('click', back);
    }
    getUserName(){
        return document.getElementById('name').value
    }
    setUserName(userName){
        document.getElementById('userName').innerHTML = userName;
    }
    setScore(score) {
        document.getElementById('score').innerHTML = score;
    }
    onRankBtnClick(ranking){
        let rankBtn = document.getElementById('rankBtn');
        rankBtn.addEventListener('click',ranking);
    }
    setRanking(ranking){
        let text ='';
        ranking.map(item=>{
            text+=`<span>${item}</span>`
        })
        document.getElementById('ranking').innerHTML = text;
    }


    showQuestion(question) {
        document.getElementById('image').src = question.image;
        document.getElementById('answer_1').innerHTML = question.answers[0];
        document.getElementById('answer_2').innerHTML = question.answers[1];
        document.getElementById('answer_3').innerHTML = question.answers[2];
    }

    onClickAnswer(callback) {
        document.getElementById('answer_1').addEventListener('click', () => callback(0));
        document.getElementById('answer_2').addEventListener('click', () => callback(1));
        document.getElementById('answer_3').addEventListener('click', () => callback(2));
    }

    setSelectedAnswer(answer) {
        let answerIndex = answer + 1;
        let answerDiv = document.getElementById('answer_' + answerIndex);
        answerDiv.style.backgroundColor = 'orange';
        answerDiv.style.color = 'white';
    }
    resetAnswerStyle(){
        for (let i = 1; i <=3; i++) {
            document.getElementById('answer_'+i).style.backgroundColor='blue'

        }
    }
    showCorrectAnswer (correctAnswer){
        let correctAnswerIndex = correctAnswer+1;
        document.getElementById('answer_' + correctAnswerIndex).style.backgroundColor = 'green';
    }
    showWongAnswer(currentAnswer, correctAnswer){
        let currentAnswerIndex = currentAnswer+1;
        let correctAnswerIndex = correctAnswer+1;
        document.getElementById('answer_' + currentAnswerIndex).style.backgroundColor = 'red';
        document.getElementById('answer_' + correctAnswerIndex).style.backgroundColor = 'green';
    }
}
