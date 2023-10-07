// Сообщение о загрузке скрипта
console.log('Script is loaded');

// Объявление переменных HTML классы элементов
const QuestionDiv = document.querySelector('.questions_cards_side');
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
let pointsOfAttempt = 10;
let parseQuestionPlace = document.querySelector('#text_question_1');
let pointsOfAttemptPlace = document.querySelector('#points_of_attempt_1');
let popupsPart = document.querySelector('#popup_answers_1');


// Массив с вопросами
let mainQuestions = [
    {
        text: 'Под управлением технологическим процессом следует понимать.',
        right: [1],
        type: 1,
        points: 100,
        answers: ['корректировка параметров процесса по результатам выборочного контроля параметров продукции для технологического обеспечения требуемого качества ', 'совокупность операций, необходимых для осуществления таких целей, как пуск и остановка технологического процесса, поддержание какого-либо параметра процесса на заданном уровне и т. п.', 'совокупность единичных операций образующих  конкретные технологические процессы и выполняющие определенные операции по пуску и остановке технологического процесса', ],
    },
    {
        text: 'Система автоматического управления образуют.',
        right: [3],
        type: 4,
        sourceImg: './content/03_01.png',
        points: 100,
        answers: ['Управляющее устройство и органы воздействия <br> на объект управления', 'Объект управления и измерительный элемент', 'Объект управления и усилительный элемент', 'Объект управления и управляющее устройство',],
    },
    {
        text: 'Какую задачу выполняет устройство управления в системах по отклонению.',
        right: [1],
        type: 1,
        points: 100,
        answers: ['Измерения возмущающего воздействия и выработки регулирующего воздействия для его компенсации', 'Устранения отклонения управляемой величины от задающей', 'Измерения задающего воздействия и выработки на его основе регулирующего воздействия', 'Измерения задающего и возмущающего воздействий и выработки с учетом этих измерений регулирующего воздействия',],
    },
    {
        text: 'К методам разрушения водонефтяных эмульсий относятся.',
        right: [1],
        type: 3,
        points: 150,
        answers: ['Электрохимический', 'Гидравлический', 'Механический', 'Динамический', 'Термохимический',],
    },
    {
        text: 'По содержанию парафинов выделяют такие группы нефтей, как.',
        right: [1],
        type: 3,
        points: 150,
        answers: ['Малопарафинистые', 'Среднепарафинистые', 'Парафинистые', 'Высокопарафинистые',],
    },
    {
        text: 'На какие группы классифицируются НПЗ по выпускаемой продукции.',
        right: [2],
        type: 3,
        // sourceImg: './content/03_01.png',
        points: 150,
        answers: ['топливно-нефтехимического профиля', 'нефтехимического профиля', 'топливного профиля', 'масляного профиля', 'топливно-маляно-нефтехимического профиля', 'топливно-маслянного профиля',],
    },
    {
        text: 'Разрушение эмульсий это основа какого процесса.',
        right: [2],
        type: 1,
        points: 200,
        answers: ['Обессоливание', 'Стабилизация', 'Обезвоживание', 'Ректификация',],
    },
    {
        text: 'Какой процесс основан на искусственном создании водонефтяной эмульсии для последующего ее разрушения.',
        right: [0],
        type: 1,
        points: 200,
        answers: ['Обессоливание', 'Стабилизация', 'Обезвоживание', 'Ректификация',],
    },
    {
        text: 'Процесс осуществляемый для сокращения потерь нефти при транспортировке.',
        right: [1],
        type: 1,
        points: 200,
        answers: ['Обессоливание', 'Стабилизация', 'Обезвоживание', 'Ректификация',],
    },
    {
        text: 'Какие процессы протекают на установках ЭЛОУ.',
        right: [2 , 3],
        type: 3,
        points: 250,
        answers: ['Стабилизация', 'Ректификация', 'Обессоливание', 'Обезвоживание',],
    },
    {
        text: 'Какие процессы используют при осушке газа.',
        right: [4],
        type: 1,
        points: 250,
        answers: ['Стабилизация', 'Ректификация ', 'Обессоливание', 'Обезвоживание', 'Абсорбция'],
    },
    {
        text: 'Какие установки применяются при большом содержании растворенных газов.',
        right: [1],
        type: 1,
        points: 250,
        answers: ['Одноколонные', 'Двухколонные', ],
    },
    {
        text: 'Колонна, работа которой осуществляется при давлении выше атмосферного.',
        right: [0],
        type: 1,
        points: 300,
        answers: ['Атмосферная', 'Работающая под повышенным давлением', 'Вакуумная', ],
    },
    {
        text: 'Колонна, предназначенная для фракционирования мазута.',
        right: [1],
        type: 1,
        points: 300,
        answers: ['Атмосферная', 'Работающая под повышенным давлением', 'Вакуумная'],
    },
    {
        text: 'Колонна, работающая под давлением 1…4 МПа и применяется при стабилизации или отбензинивания.',
        right: [1],
        type: 1,
        points: 300,
        answers: ['Атмосферная', 'Работающая под повышенным давлением', 'Вакуумная'],
    },
];



// const testType4 = `${mainQuestions[14].text[0]} <select>${mainQuestions[14].map(answer => `<option>${answer.answers}</option>`)}</select>`
// console.log(testType4)



// Цикл создающий модальные окна, также пушит вопросы и ответы
for (i = 0; i < mainQuestions.length; i++){
    pointsOfAttemptPlace.innerHTML = pointsOfAttempt;
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

//Один ответ без картинки 
    if(mainQuestions[i].type == 1){

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        
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
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Подозреваю, что несколько ответов и картинка
    if(mainQuestions[i].type == 2){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form)
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.
            input.type = 'radio';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Несколько ответов без картинки
    if(mainQuestions[i].type == 3){
        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    //Один ответ одна картинка
    if(mainQuestions[i].type == 4){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form);
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    let mainButtonsPlace = document.createElement('div');
    mainButtonsPlace.classList.add('main_buttons');
    answerPlace.appendChild(mainButtonsPlace);

    
    let checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.classList.add('check_button');
    checkAnswerBtn.id = 'check_button' + '_' + i;
    checkAnswerBtn.innerHTML = 'Ответить';

    //Добавление ивента для проверки ответов

    checkAnswerBtn.addEventListener('click',function(event)
    {
        let minusAttempt = pointsOfAttempt--
        let rightcheck =true
        
        if (minusAttempt < 0)
        { 
            return 0;//добавлено, чтобы после измены html кода disabled , проверка ответа не происходила. (простыми словами завершение функции)
        }
        pointsOfAttemptPlace.innerHTML = minusAttempt;
        if (minusAttempt < 1)
        {
            //Отключение кнопок ответа
            for(let elem of document.querySelectorAll('.check_button')){
                
                elem.disabled = true;
                elem.classList.add('disable_answer_btn');
                
            }
            // Отключение кнопок вопросов 
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 3; j++){
                    cardsPlace.children[i].children[j].disabled = true;
                }
            }
            
        }

        //Блок проверки


        //Получения номера вопроса и блока вопросов
        let questionsblock = event.target.parentNode.parentNode.firstElementChild
        let question_number = questionsblock.id.split('_')
        question_number=question_number[question_number.length-1]
        

        //Обработка
        let counter=0 // Для получения порядкового номера
        for (let elem of questionsblock.querySelectorAll(".answer_div")) 
		{
            if(elem.firstElementChild.checked){
                // Проверка есть ли в массиве правильных ответов этот вариант ответа(counter)
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    elem.classList.add('correct')
                }
                else
                {
                    elem.classList.add('incorrect')
                    rightcheck=false
                }
            }
            else{
                //Выделение правильных ответов, если они не выбраны
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    elem.classList.add('correct')
                }
            }
            counter++
        }
        if (rightcheck){
            //В случае правильного ответа
            //Не знаю зачем нужен именно массив правильных очков, но допустим
            pointsOfCorrectAnswers.push(mainQuestions[question_number].points)
            updatescore()
            event.target.parentNode.innerHTML="<p> За этот вопрос вы могли получили " + mainQuestions[question_number].points + " очков </p>"

		//Добавление галочки пройдено
            let imgCorrect = document.createElement('img')
            imgCorrect.src = './content/correct.svg'
            document.querySelector('[onclick="showQuestion(' + question_number +')"').appendChild(imgCorrect);
            

        }
        else
	{
            //Добавление крестика неправильного ответа
            event.target.parentNode.innerHTML="<p> За этот вопрос вы могли получить " + mainQuestions[question_number].points + " очков </p>"
            let imgCorrect = document.createElement('img');
            imgCorrect.src = './content/incorrect.svg';
            document.querySelector('[onclick="showQuestion(' + question_number +')"').appendChild(imgCorrect);
        }

    })


    mainButtonsPlace.innerHTML = '<p>' + 'За этот вопрос вы можете получить ' + mainQuestions[i].points + ' очков' + '</p>' + '<br>';

    mainButtonsPlace.appendChild(checkAnswerBtn);
    
}; 
//--------------------------------


let checkAnswerButton = document.querySelectorAll('.check_button');
let forms = document.querySelectorAll('form');
let cardsPlace = document.querySelector('.questions_cards_side');


let formsForAnswers = document.querySelectorAll('.answer_form');
formsForAnswers.forEach((elem, index)=>{
    let answerInput = document.querySelectorAll('.answer_div')
    console.log(elem)
})


/*Проверка ответов, обработчик добавляется в создании форм(Не используется)
function checkAnswerFunction(i){
    let minusAttempt = pointsOfAttempt--
    if (minusAttempt < 0)
    { 
        return 0;//добавлено, чтобы после измены html кода disabled , проверка ответа не происходила. (простыми словами завершение функции)
    }
    pointsOfAttemptPlace.innerHTML = minusAttempt;
    if (minusAttempt < 1){
        //Вырубает кнопку ответа
        for(let i = 0; i < 15; i++){
            checkAnswerButton[i].disabled = true;
            checkAnswerButton[i].classList.add('disable_answer_btn');
            
        }
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 3; j++){
                cardsPlace.children[i].children[j].disabled = true;
            }
        }
        
    }

    if (mainQuestions[i].type == 1 || mainQuestions[i].type == 2){

        


    }else if(mainQuestions[i].type == 3 || mainQuestions[i].type == 4){
        console.log('click2')

    }

};
*/


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
popUpArr = [PopUp1, PopUp2, PopUp3, PopUp4, PopUp5, PopUp6, PopUp7, 
PopUp8, PopUp9, PopUp10, PopUp11, PopUp12, PopUp13, PopUp14, PopUp15,];


// Функция вызова модальных окон привязка по onclick html
function showQuestion(i){
    popUpArr[i].classList.remove('closed');  
};



//Сложение очков, для получения счёта( я не знаю зачем тут нужен был массив)
function updatescore(){
    let score=0
    pointsOfCorrectAnswers.forEach(element => {
        score+=element
    
    });
    document.getElementById('points_of_correct_1').innerHTML=score

}











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





// let chekBtn = document.querySelector('#check_button_1');
//     chekBtn.addEventListener('click', function(){
//         let forms = document.querySelectorAll('#answers_buttons1 form');
//         for (let form of forms){
//             form.classList.remove('correct');
//             form.classList.remove('incorrect');
//             let inputs = form.querySelectorAll('input');
//             for (let input of inputs){
//                 if (input.checked){
//                     let disButton = document.querySelector('#check_button_1');
//                     if (input.dataset.answerNum == form.dataset.right){
//                         arrPoints.push(100)
//                         let imgCorrect = document.createElement('img');
//                         imgCorrect.src = './content/correct.svg';
//                         correctMarkerPlace.appendChild(imgCorrect);
//                         pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;


//                         disButton.classList.remove('disabled_button');
//                         Povtor.classList.add('disabled_button');
//                         Dalee.classList.add('disabled_button');

//                         form.children[0].classList.add('correct');
//                         for(let i = 1; i < 4; i++){
//                             form.children[i].classList.add('incorrect2');
//                         }
//                         for(let i = 0; i < 4; i++){
//                             form.children[i].children[0].disabled = true;
//                         }
//                     }else{
//                         let imgCorrect = document.createElement('img');
//                         imgCorrect.src = './content/incorrect.svg';
//                         correctMarkerPlace.appendChild(imgCorrect);
//                         pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;

//                         disButton.classList.remove('disabled_button');
//                         Povtor.classList.add('disabled_button');
//                         Dalee.classList.add('disabled_button');
//                         let wrAns = input.dataset.answerNum
                        
//                         form.children[wrAns].classList.add('incorrect');

//                         for(let i = 0; i < 4; i++){
//                             form.children[i].children[0].disabled = true;
//                         }
//                     };
//                 break;
//             };
//         };
//     };
// });


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




