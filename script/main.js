// Сообщение о загрузке скрипта
console.log('Script is loaded');

// Объявление переменных HTML классы элементов
const QuestionDiv = document.querySelector('.questions_cards_side');
const pointsOfAttempt = 10;
const pointsOfCorrectAnswers = 0;

// Создаваемые элементы в DOM
let veryEasyQuestions = document.querySelector('.very_easy_questions');
let easyQuestions = document.querySelector('.easy_questions');
let middleQuestions = document.querySelector('.middle_questions');
let middleHardQuestions = document.querySelector('.middle_hard_questions');
let HardQuestions = document.querySelector('.hard_questions');
let PopUpWindow = document.querySelector('#popup_main_1');
let closePopUpButton = document.querySelector('#close_popup_button_1');



// Очень легкие вопросы массив
let QuestionsList = [
    {
        text: '2 + 2 = ?',
        right: 0,
        answers: ['1', '2', '3', '4',],
        point: 100,
    },
]; 


// Вытаскиваем ID кнопок из HTML
let veryEasyQuestion1 = document.querySelector('#very_easy_question_1');
let veryEasyQuestion2 = document.querySelector('#very_easy_question_2');
let veryEasyQuestion3 = document.querySelector('#very_easy_question_3');
let parseQuestionPlace = document.querySelector('#text_question_1');



for(let QuestionsListEasy of QuestionsList){
    veryEasyQuestion1.addEventListener('click', function(){
        PopUpWindow.classList.remove('closed');
        PopUpWindow.classList.add('open');
        
    });

    let test = document.querySelector('#question_number_1');
    let testAnswers = document.querySelector('#answers_buttons1');
    let Povtor = document.querySelector('#check_button_2');
    let Dalee = document.querySelector('#check_button_3')

    Povtor.classList = ('disabled_button');
    Povtor.addEventListener('click' , function(){
        window.location.reload();
    });

    Dalee.classList = ('disabled_button');

    let questions = [
        {
            text: 'На какой свет можно ехать?',
            right: 0,
            answers: ['1', '2', '3', '4',],
        },
    ];

    let answersA1 = ['зеленый', 'красный', 'желтый', 'синий',];

    let i = 1;
    for (let question of questions){
        let div = document.createElement('div');
        test.appendChild(div);
        let p = document.createElement('p');
        p.innerHTML = question.text;
        div.appendChild(p);
        let form = document.createElement('form');
        testAnswers.appendChild(form);
        form.dataset.right = question.right;


    let j = 0;
    let a = 0;
        for (let answer of question.answers) {
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            divInp.setAttribute('id', 'answer_div');
            form.appendChild(divInp);
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = i;
            input.dataset.answerNum = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answersA1[a++];
            divInp.appendChild(answ);
        };
    };

    let chekBtn = document.querySelector('#check_button_1');
        chekBtn.addEventListener('click', function(){
            let forms = document.querySelectorAll('#answers_buttons1 form');
            for (let form of forms){
                form.classList.remove('correct');
                form.classList.remove('incorrect');
                let inputs = form.querySelectorAll('input');
                for (let input of inputs){
                    if (input.checked){
                        let disButton = document.querySelector('#check_button_1');
                        if (input.dataset.answerNum == form.dataset.right){
                            arrPoints.push(100)
                            
                            disButton.classList.remove('disabled_button');
                            Povtor.classList.add('disabled_button');
                            Dalee.classList.add('disabled_button');

                            form.children[0].classList.add('correct');
                            form.children[1].classList.add('incorrect2');
                            form.children[2].classList.add('incorrect2');
                            form.children[3].classList.add('incorrect2');
                            form.children[0].children[0].disabled = true;
                            form.children[1].children[0].disabled = true;
                            form.children[2].children[0].disabled = true;
                            form.children[3].children[0].disabled = true;
                        }else{
                            
                            disButton.classList.remove('disabled_button');
                            Povtor.classList.add('disabled_button');
                            Dalee.classList.add('disabled_button');
                            let wrAns = input.dataset.answerNum
                            form.children[wrAns].classList.add('incorrect');
                            
                            form.children[0].children[0].disabled = true;
                            form.children[1].children[0].disabled = true;
                            form.children[2].children[0].disabled = true;
                            form.children[3].children[0].disabled = true;
                        };
                    break;
                };
            };
        };
    });
};

let arrPoints = [];

let pointsOfCorrect= document.querySelector('#points_of_correct_1');
let chekBtn = document.querySelector('#check_button_1');
chekBtn.addEventListener('click', function(){
    add = function(arr) {
        return arr.reduce((a, b) => a + b, 0);
    };
    
    let sumPoints = add(arrPoints);
    pointsOfCorrect.innerHTML = sumPoints;
});




closePopUpButton.addEventListener('click', function(){
    PopUpWindow.classList.add('closed');
    PopUpWindow.classList.remove('open');

});




