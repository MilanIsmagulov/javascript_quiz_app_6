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
let correctMarkerPlace = document.querySelector('#correct_marker_1');


// Вытаскиваем ID кнопок из HTML
let veryEasyQuestion1 = document.querySelector('#very_easy_question_1');
let veryEasyQuestion2 = document.querySelector('#very_easy_question_2');
let veryEasyQuestion3 = document.querySelector('#very_easy_question_3');
let parseQuestionPlace = document.querySelector('#text_question_1');
let pointsOfAttemptPlace= document.querySelector('#points_of_attempt_1');

// 
let test = document.querySelector('#question_number_1');
let testAnswers = document.querySelector('#answers_buttons1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3');


// Массив с вопросами


// let questions = [
//     {
//         text: 'На какой свет можно ехать?',
//         right: 0,
//         answers: ['зеленый', 'красный', 'желтый', 'синий',],
//     },

// ];

let mainQuestions = [
    {
        text: 'На какой свет можно ехать?',
        right: 0,
        answers: ['зеленый', 'красный', 'желтый', 'синий',],
    },
    {
        text: '2 + 2 = ?',
        right: 31,
        answers: ['1', '2', '3', '4',],
    },
    {
        text: '2 + 1 = ?',
        right: 2,
        answers: ['1', '2', '3', '4',],
    },
];

// Povtor.classList = ('disabled_button');
// Dalee.classList = ('disabled_button');

// PopUpWindow.classList.remove('closed');
// PopUpWindow.classList.add('open');

let popupsPart = document.querySelector('#popup_answers_1');


window.onload = function(){
    for (i = 0; i < mainQuestions.length; i++){

        let popUpPlace = document.createElement('div');
        popUpPlace.classList.add('popup'); //!!!Closed
        popUpPlace.id = 'popup' + '_' + i;
        popupsPart.appendChild(popUpPlace);

        let popUpBody = document.createElement('div');
        popUpBody.classList.add('popup_body');
        popUpBody.id = 'popup_body' + '_' + i;

        popUpPlace.appendChild(popUpBody);

        let popUpContentWindow = document.createElement('div');
        popUpContentWindow.classList.add('popup_content')
        popUpContentWindow.id = 'popup_content' + '_' + i;

        popUpBody.appendChild(popUpContentWindow);

        let closePopupButton = document.createElement('div');
        closePopupButton.classList.add('close_popup');
        closePopUpButton.id = 'close_popup' + '_' + i;

        let questionsPlace = document.createElement('div');
        questionsPlace.classList.add('questions');
        questionsPlace.id = 'question_number' + '_' + i;

        popUpContentWindow.appendChild(closePopupButton);
        popUpContentWindow.appendChild(questionsPlace);

        let closeButton = document.createElement('button');
        closeButton.addEventListener('click', function(){
            popUpPlace.classList.add('closed');
            popUpPlace.classList.remove('open');
        });
        closeButton.classList.add('close_popup_button');
        closeButton.id = 'close_popup_button' + '_' + i;
        closeButton.innerHTML = '<img src="./content/close.svg" alt="close_popup">'

        closePopupButton.appendChild(closeButton);
        return popUpPlace;
        
    }; 

    

};




function showQuestion(i){
    popUpPlace[i].classList.add('open');
    popUpPlace[i].classList.remove('closed');  
};







// let div = document.createElement('div');
// test.appendChild(div);
// let p = document.createElement('p');
// div.appendChild(p);
// p.innerHTML = mainQuestions[i].text;



/*
<div id="popup_main_1" class="popup closed">
        <div class="popup_body">
            <div class="popup_content">
                <div class="close_popup">
                    <div class="questions" id="question_number_1">
                            
                    </div>

                    <button id="close_popup_button_1" class="close_popup_button">
                        <img src="./content/close.svg" alt="close_popup">
                    </button>
                </div>
                <div class="answers_btn" id="answers_buttons1">
                            
                </div>
                <div class="main_buttons">
                    <button id="check_button_1">
                        Ответить
                    </button>
                    <p>За этот вопрос вы можете получить 100 Очков</p>
                </div>
            </div>
        </div>
*/


















// veryEasyQuestion1.addEventListener('click', function(){
//     PopUpWindow.classList.remove('closed');
//     PopUpWindow.classList.add('open');
    



//     Povtor.classList = ('disabled_button');
//     Povtor.addEventListener('click' , function(){
//         window.location.reload();
//     });

//     Dalee.classList = ('disabled_button');



//     let i = 1;
// // Рендер вопросов из списка
//     for (let question of questions){
//         let div = document.createElement('div');
//         test.appendChild(div);
//         let p = document.createElement('p');
//         p.innerHTML = question.text;
//         div.appendChild(p);
//         let form = document.createElement('form');
//         testAnswers.appendChild(form);
//         form.dataset.right = question.right;


//     let j = 0;
//         for (let answer of question.answers) {
//             let divInp = document.createElement('div');
//             divInp.classList = ('answer_div');
//             divInp.setAttribute('id', 'answer_div');
//             form.appendChild(divInp);
//             let input = document.createElement('input');
//             input.type = 'radio';
//             input.name = i;
//             input.dataset.answerNum = j++;
//             divInp.appendChild(input);
//             let answ = document.createElement('p');
//             answ.innerHTML = answer;
//             divInp.appendChild(answ);
//         };
//     };

//     let chekBtn = document.querySelector('#check_button_1');
//         chekBtn.addEventListener('click', function(){
//             let forms = document.querySelectorAll('#answers_buttons1 form');
//             for (let form of forms){
//                 form.classList.remove('correct');
//                 form.classList.remove('incorrect');
//                 let inputs = form.querySelectorAll('input');
//                 for (let input of inputs){
//                     if (input.checked){
//                         let disButton = document.querySelector('#check_button_1');
//                         if (input.dataset.answerNum == form.dataset.right){
//                             arrPoints.push(100)
//                             let imgCorrect = document.createElement('img');
//                             imgCorrect.src = './content/correct.svg';
//                             correctMarkerPlace.appendChild(imgCorrect);
//                             pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;


//                             disButton.classList.remove('disabled_button');
//                             Povtor.classList.add('disabled_button');
//                             Dalee.classList.add('disabled_button');

//                             form.children[0].classList.add('correct');
//                             for(let i = 1; i < 4; i++){
//                                 form.children[i].classList.add('incorrect2');
//                             }
//                             for(let i = 0; i < 4; i++){
//                                 form.children[i].children[0].disabled = true;
//                             }
//                         }else{
//                             let imgCorrect = document.createElement('img');
//                             imgCorrect.src = './content/incorrect.svg';
//                             correctMarkerPlace.appendChild(imgCorrect);
//                             pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;

//                             disButton.classList.remove('disabled_button');
//                             Povtor.classList.add('disabled_button');
//                             Dalee.classList.add('disabled_button');
//                             let wrAns = input.dataset.answerNum
                            
//                             form.children[wrAns].classList.add('incorrect');

//                             for(let i = 0; i < 4; i++){
//                                 form.children[i].children[0].disabled = true;
//                             }
//                         };
//                     break;
//                 };
//             };
//         };
//     });
//     let arrPoints = [];

//     let pointsOfCorrect= document.querySelector('#points_of_correct_1');
//     chekBtn.addEventListener('click', function(){
//         add = function(arr) {
//             return arr.reduce((a, b) => a + b, 0);
//         };
        
//         let sumPoints = add(arrPoints);
//         pointsOfCorrect.innerHTML = sumPoints;
//     });
// });









// closePopUpButton.addEventListener('click', function(){
//     PopUpWindow.classList.add('closed');
//     PopUpWindow.classList.remove('open');

// });




