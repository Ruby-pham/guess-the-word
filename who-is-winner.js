let questions = [
    {
        image: 'https://www.englishclub.com/images/vocabulary/quizzes/fruits/lemon.png',
        answers: [
            'orange',
            'pear',
            'lemon',
        ],
        correct: 2
    },
    {
        image: 'https://www.englishclub.com/images/vocabulary/quizzes/fruits/grapes.png',
        answers: [
            'grapes',
            'blueberries',
            'cherries',
        ],
        correct: 0
    },
    {
        image: 'https://www.englishclub.com/images/vocabulary/quizzes/fruits/apple.png',
        answers: [
            'apple',
            'avocado',
            'strawberry',
        ],
        correct: 0
    },
]

class winner {
    constructor() {
        this.ui = new ui();
        this.ui.showScreen('welcomeScreen');
        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.check = false;
        this.score = 0;
        this.userName = '';
        this.ui.onStartBtnClick(() => {
            this.start();
        });
        this.ui.backScreen(() => {
            this.back();
        });
        this.ui.onRankBtnClick(()=>{
            this.rank();
        })
    }

    start() {
        this.userName = this.ui.getUserName();
        if(!this.userName){
            alert('You need to enter your name before starting!')
        }else{
            this.ui.showScreen('questionScreen');
            this.ui.resetAnswerStyle();
            this.ui.showQuestion(questions[this.currentQuestion]);
            this.ui.onClickAnswer((answer) => {
                if(!this.check){
                    this.currentAnswer = answer;
                    this.ui.setSelectedAnswer(answer);
                    this.checkAnswer();
                }
                this.check = true;
            });
            this.ui.setUserName(this.userName);
            this.ui.setScore(this.score);
        }


    }

    back() {
        this.ui.showScreen('welcomeScreen')
    }
    rank(){
        this.ui.showScreen('ranking');
        let local = localStorage.getItem('infoRanking');
        let arr = JSON.parse(local);
        arr.sort((a, b) => b.score - a.score);
        let rankings = arr.map(item => ` ${item.userName} - ${item.score}<br>`);
        this.ui.setRanking(rankings.slice(0, 5));
    }
    checkAnswer() {
        let correctSound = document.getElementById('correct-sound');
        if (this.currentAnswer === questions[this.currentQuestion].correct) {
            this.score += 100;
            correctSound.play();
            this.ui.showCorrectAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            setTimeout(() => {
                correctSound.play();
                if (this.score === 300) {
                    alert('Excellent, You are the winner <3');
                    this.start();
                    this.reset();

                } else {
                    this.check = false;
                    this.currentQuestion++;
                    this.start();
                }
            }, 4000); // Chờ 1 giây trước khi chuyển sang câu hỏi tiếp theo
        } else {
            console.log('5555');
            let wrongSound = document.getElementById('wrong-sound');
            wrongSound.play();
            this.ui.showWongAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            alert('You lose ! Please try again');
            this.reset();
            alert('score2:'+this.score);
        }
    }

    reset() {
        if (!localStorage.getItem('infoRanking')) {
            localStorage.setItem('infoRanking', JSON.stringify([{
                userName: this.userName,
                score: this.score
            }]));
        } else {
            const local = localStorage.getItem('infoRanking');
            const arr = JSON.parse(local);
            arr.push({
                userName: this.userName,
                score: this.score
            });
            localStorage.setItem('infoRanking', JSON.stringify(arr));
        }

        this.userName = '';
        this.score = 0;
        this.currentQuestion = 0;
        this.check = false;
        this.ui.showScreen('welcomeScreen');
        this.ui.resetAnswerStyle();

    }

}

let game = new winner();