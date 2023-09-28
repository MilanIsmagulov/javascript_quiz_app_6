// Сообщение о загрузке скрипта
console.log('Script is loaded');

// Объявление переменных HTML классы элементов
const QuestionDiv = document.querySelector('.questions_cards_side');
const pointsOfAttempt = 10;
const pointsOfCorrectAnswers = [];

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
// let veryEasyQuestion1 = document.querySelector('#very_easy_question_1');
// let veryEasyQuestion2 = document.querySelector('#very_easy_question_2');
// let veryEasyQuestion3 = document.querySelector('#very_easy_question_3');
let parseQuestionPlace = document.querySelector('#text_question_1');
let pointsOfAttemptPlace= document.querySelector('#points_of_attempt_1');

// 
// let test = document.querySelector('#question_number_1');
// let testAnswers = document.querySelector('#answers_buttons1');
// let Povtor = document.querySelector('#check_button_2');
// let Dalee = document.querySelector('#check_button_3');
let popupsPart = document.querySelector('#popup_answers_1');

// Массив с вопросами
let mainQuestions = [
    {
        text: '1) 2 + 2 = ?',
        right: 0,
        type: 1,
        points: 100,
        answers: ['3424', '234', '24', '23423433', '534',],
    },
    {
        text: '2) 2 + 2 = ?',
        right: 1,
        type: 2,
        points: 100,
        answers: ['23424', '234234', '233', '333',],
    },
    {
        text: '3) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 100,
        answers: ['222', '4444', '55555', '111',],
    },
    {
        text: '4) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 150,
        answers: ['34234', '567', '789', '78979',],
    },
    {
        text: '5)2 + 1 = ?',
        right: 2,
        type: 1,
        points: 150,
        answers: ['667', '789789', '890098', '12312',],
    },
    {
        text: '6) 2 + 1 = ?',
        right: 2,
        type: 3,
        points: 150,
        answers: ['2332', '54545', '354', '5445',],
    },
    {
        text: '7) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 200,
        answers: ['7878', '23', '6565', '454',],
    },
    {
        text: '8) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 200,
        answers: ['56656', '78', '8989', '8989',],
    },
    {
        text: '9) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 200,
        answers: ['456', '4564', '678', '9898',],
    },
    {
        text: '10) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 250,
        answers: ['232', '90', '789', '3231',],
    },
    {
        text: '11) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 250,
        answers: ['86', '8989', '900', '2121',],
    },
    {
        text: '12) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 250,
        answers: ['5445', '7667', '9889', '2323',],
    },
    {
        text: '13) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 300,
        answers: ['878', '5656', '6767', '434',],
    },
    {
        text: '14) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 300,
        answers: ['678678', '9898', '0909', '1221',],
    },
    {
        text: '15) 2 + 1 = ?',
        right: 2,
        type: 1,
        points: 300,
        answers: ['4343', '8778', '9889', '32',],
    },
];


// Цикл создающий модальные окна, также пушит вопросы и ответы
for (i = 0; i < mainQuestions.length; i++ ){
    
    let popUpPlace = document.createElement('div');
    popUpPlace.classList.add('popup' , 'closed');

    popUpPlace.id = 'popup' + '_' + i;
    popupsPart.appendChild(popUpPlace);

    let popUpBody = document.createElement('div');
    popUpBody.classList.add('popup_body');
    popUpBody.id = 'popup_body_' + '_' + i;

    popUpPlace.appendChild(popUpBody);

    let popUpContentWindow = document.createElement('div');
    popUpContentWindow.classList.add('popup_content');
    popUpContentWindow.id = 'popup_content' + '_' + i;

    popUpBody.appendChild(popUpContentWindow);

    let closePopupButton = document.createElement('div');
    closePopupButton.classList.add('close_popup');
    

    let questionsPlace = document.createElement('div');
    questionsPlace.classList.add('questions');
    questionsPlace.id = 'question_number' + '_' + i;
    questionsPlace.innerHTML = mainQuestions[i].text;
    

    popUpContentWindow.appendChild(closePopupButton);

    closePopupButton.appendChild(questionsPlace);

    let closeButton = document.createElement('button');
    closeButton.addEventListener('click', function(){
        popUpPlace.classList.add('closed');
        popUpPlace.classList.remove('open');
    });

    closeButton.classList.add('close_popup_button');
    closeButton.id = 'close_popup_button' + '_' + i;
    closeButton.innerHTML = '<img src="./content/close.svg" alt="close_popup">';

    closePopupButton.appendChild(closeButton);

    let answerPlace = document.createElement('div');
    answerPlace.classList.add('answers_btn');
    answerPlace.id = 'answers_buttons' + '_' + i;

    popUpContentWindow.appendChild(answerPlace);

    if(mainQuestions[i].type == 1){
        let form = document.createElement('form');
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = j++;
            input.dataset.answer = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
        };
    };

    if(mainQuestions[i].type == 2){
        console.log('Type of question is 2');
    };

    if(mainQuestions[i].type == 3){
        console.log('Type of question is 3');
    };

    if(mainQuestions[i].type == 4){
        console.log('Type of question is 4');
    };

    let mainButtonsPlace = document.createElement('div');
    mainButtonsPlace.classList.add('main_buttons');
    
    answerPlace.appendChild(mainButtonsPlace);

    let checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.classList.add('check_button');
    checkAnswerBtn.id = 'check_button' + '_' + i;
    checkAnswerBtn.innerHTML = 'Ответить';
    mainButtonsPlace.innerHTML = '<p>' + 'За этот вопрос вы можете получить ' + mainQuestions[i].points + ' очков' + '</p>';

    mainButtonsPlace.appendChild(checkAnswerBtn);

}; 






checkBtnFromDOM = document.querySelector('.check_button');
checkBtnFromDOM.addEventListener('click', function(){
    
    console.log(1);
});


// Новые переменные связанные с созданными Модальными окнами
let PopUp1 = document.querySelector('#popup_0');
let PopUp2 = document.querySelector('#popup_1');
let PopUp3 = document.querySelector('#popup_2');
let PopUp4 = document.querySelector('#popup_3');
let PopUp5 = document.querySelector('#popup_4');
let PopUp6 = document.querySelector('#popup_5');
let PopUp7 = document.querySelector('#popup_6');
let PopUp8 = document.querySelector('#popup_7');
let PopUp9 = document.querySelector('#popup_8');
let PopUp10 = document.querySelector('#popup_9');
let PopUp11 = document.querySelector('#popup_10');
let PopUp12 = document.querySelector('#popup_11');
let PopUp13 = document.querySelector('#popup_12');
let PopUp14 = document.querySelector('#popup_13');
let PopUp15 = document.querySelector('#popup_14');


// Пушим переменные модальных окон в массив для удобного вызова функции
popUpArr = [ PopUp1, PopUp2, PopUp3, PopUp4, PopUp5, PopUp6, PopUp7, 
PopUp8, PopUp9, PopUp10, PopUp11, PopUp12, PopUp13, PopUp14, PopUp15,];


// Функция вызова модальных окон привязка по onclick html
function showQuestion(i){
    popUpArr[i].classList.remove('closed');  
};


// 

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
                      6  <img src="./content/close.svg" alt="close_popup">
                    </button>
                </div>
                <div class="answers_btn" id="answers_buttons1">
                            
                </div>
                <div class="main_buttons">
                    <button id="check_button_1">
                        Ответить
                    </button>
                    <p></p>
                </div>
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




