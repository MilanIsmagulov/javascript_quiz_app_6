let scoreEl = document.getElementById("score");
let livesEl = document.getElementById("lives");
let score = 0;
let lives = 10;

let popUpContent = document.getElementById("popup_content");
let popUpWindow = document.getElementById("popup_window");
let popUpClose = document.getElementById("popup_close");
let popUpBottom;

let currentIdQuestion = -1;   
let currentQuestionType = "0";
let currentQuestionButton;

let questionType1 = document.getElementById("question_type_1");
let questionType2 = document.getElementById("question_type_2");
let questionType3 = document.getElementById("question_type_3");
let questionType4 = document.getElementById("question_type_4");
let questionType5 = document.getElementById("question_type_5");

// Массив с вопросами
let allQuestions = [
    {
        type: 0, 
        price: 100,
        text: 'На какой свет можно ехать?',
        image: null,
        answers: ['зеленый', 'красный', 'желтый', 'синий'],
        correctAnswer: [0], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 0, 
        price: 100,
        text: 'Сколько у него зубов?',
        image: "content/dog.jpg",
        answers: ['Тридцать два', 'Сорок два', 'Шестьдесят четыре', 'Два миллиона восемьсот двадцать один',],
        correctAnswer: [1], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 0, 
        price: 100,
        text: 'Сколько у него зубов?',
        image: "content/dog.jpg",
        answers: ['Тридцать два', 'Сорок два', 'Шестьдесят четыре', 'Два миллиона восемьсот двадцать один',],
        correctAnswer: [1], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 1, 
        price: 150,
        text: 'Выберите имена ученых:',
        image: null,
        answers: ['Игорь Юрьев', 'Вячеслав Казанцев', 'Иван', 'Денис Саликов', 'Люся Генриховна', 'Алишер Батут'],
        correctAnswer: [2,3], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 1, 
        price: 150,
        text: 'Выберите имена ученых:',
        image: null,
        answers: ['Игорь Юрьев', 'Вячеслав Казанцев', 'Иван', 'Денис Саликов', 'Люся Генриховна', 'Алишер Батут'],
        correctAnswer: [2,3], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 1, 
        price: 150,
        text: 'Выберите имена ученых:',
        image: null,
        answers: ['Игорь Юрьев', 'Вячеслав Казанцев', 'Иван', 'Денис Саликов', 'Люся Генриховна', 'Алишер Батут'],
        correctAnswer: [2,3], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
    {
        type: 2, 
        price: 200,
        text: 'Вставте пропущенные слова:',
        textDd: "Семен Морозов родился в |. Он разработал свою первую штуку в | году. "+
                    "Благодаря этой разработке, все | мира могут спать спокойно",
        image: null,
        answers: [["Узбекистане", "Ираке", "России"],
                ["1950","3572","824"],
                ["коты","жители","суслики"]],
        correctAnswer: [2,0,1], // id правильного ответа из поля answers
        answered: null, // какой вариант ответа выбрал пользователь
    },
]; 

// Массив с пройденными вопросами
let passedQuestions = [];

// Массив путей для состояния вопроса
let questionsStates = [
    "./content/incorrect.svg",
    "./content/correct.svg"
    ];

// Главный скрипт. Запускается как только полностью загрузится страница
document.addEventListener('DOMContentLoaded', function(){ 

    // Сообщение о загрузке скрипта
    console.log('Script is loaded');

    // Каждой кнопке присваиваем обработчик события Click, 
    // который будет открывать соответствующее модальное окно
    let questionsBtn = document.getElementsByClassName('question');
    for (question of questionsBtn){
        question.addEventListener('click', function(e){
            currentQuestionButton = e.srcElement;
            popUpQuestionOpen(this);
        });
    }
    // DEBUGGING

    // Открытие меню выбора ответа
    document.getElementById("custom-dropdown-input-0").addEventListener('click', function(e){
        
        e.target.parentNode.parentNode.getElementsByClassName("custom-dropdown-select")[0].classList.toggle("closed");
    });
    
});

// Обработчик события, если нажали на кнопку "Ответить". Собираем ответы
function submitHandler(e){
    e.preventDefault();

    let answers = getUserAnswers(e);
        
    console.log(`user answers: ${answers}`);
    userAnswersHandler(answers);
    popUpQuestionClose();
}

function getUserAnswers(el){
    let arr = [];

    if (currentQuestionType == 3) {
        // answers type 3
    }else if (currentQuestionType == 2){
        let textAnsw = []
        let trueAnsw = allQuestions[currentIdQuestion].answers;

        for (el of el.target.getElementsByClassName("custom-dropdown-input-placeholder")) 
            textAnsw.push(el.innerHTML);

        for (let i = 0; i < trueAnsw.length; i++){
            for (let j = 0; j < trueAnsw[i].length; j++){
                if (textAnsw[i] == trueAnsw[i][j]) arr.push(j);
            }
        }
                

        console.log(arr);
        
    }else {
        for (el of el.target) if(el.checked) arr.push(parseInt(el.value));
    }

    return arr;
}

// Функция установки состояния вопроса: Пройден(1), Не пройден(0).
function setStateToQuestion(el, state) {

    let stateImgDiv = document.createElement("div");
    stateImgDiv.setAttribute("class", "state_marker")

    let stateImg = document.createElement("img");
    stateImg.setAttribute("src", questionsStates[state]);
    stateImgDiv.appendChild(stateImg);

    el.appendChild(stateImgDiv);
}

// Функция открытия модального окна
function popUpQuestionOpen(question){

    // Подготовка к созданию окна. Удаляем тело прошлого модального окна, если есть
    deletePopUpMain()

    currentIdQuestion = question.className.split(" ")[1].replace("id", "");
    currentQuestionType = allQuestions[currentIdQuestion].type;

    constuctPopUp();

    popUpWindow.setAttribute("class", "popup unclosed");
}

// Функция закрытия модального окна
function popUpQuestionClose(){
    popUpWindow.setAttribute("class", "popup closed");  
}

// Функция конструирования блока с вопросом
function constuctPopUp(){
    let question = allQuestions[currentIdQuestion];

    console.log(`CONSTRUCT QUESTION TYPE ${question.type} AND ID ${currentIdQuestion}`);

    // Создаем тело модального окна
    popUpWindow.appendChild(createPopUpMain(question));

    popUpBottom = document.getElementById("popup_bottom");
}

// Функция, указывающая пройден ли конкретный вопрос
function questionIsPassed(question){

    if(question.answered != null) return true;
    return false;
    
}

// Функция, обрабатывающая ответ пользователя
function userAnswersHandler(userAnswers){
    let currentQuestion = allQuestions[currentIdQuestion];

    // Записываем ответ пользователя в соответствующее поле объекта вопроса
    currentQuestion.answered = userAnswers;
    // Проверяем, верный ли был ответ, ставим соответсвующее изображение на кнопку
    isCorrect = answerIsCorrect(currentQuestion, userAnswers);
    console.log(`IS CORRECT? ${isCorrect}`);

    if (isCorrect) {
        setStateToQuestion(currentQuestionButton, 1);
        score += currentQuestion.price;
    }
    else {
        setStateToQuestion(currentQuestionButton, 0);
    }

    scoreEl.innerHTML = `${score}`;
    lives--;
    livesEl.innerHTML = `${lives}`;
}

// Функция, возвращающее, верный ли был ответ
function answerIsCorrect(question, userAnswers){
    corrects = question.correctAnswer.sort();
    userAnswers = userAnswers.sort();

    if (corrects.toString() === userAnswers.toString()) return true;

    return false;
}

// Функция для 2 типа вопросов.
















































// for(let question of questions){
//     veryEasyQuestion1.addEventListener('click', function(){
//         console.log("arr");
//         PopUpWindow.classList.remove('closed');
//         PopUpWindow.classList.add('open');
//         console.log(question)
        
//         let test = document.querySelector('#question_number_1');
//         let testAnswers = document.querySelector('#answers_buttons1');
//         let Povtor = document.querySelector('#check_button_2');
//         let Dalee = document.querySelector('#check_button_3')

//         Povtor.classList = ('disabled_button');
//         Povtor.addEventListener('click' , function(){
//             window.location.reload();
//         });

//         Dalee.classList = ('disabled_button');



//         // rr

//         let i = 1;
//     // Рендер вопросов из списка
//         for (let question of questions){
//             let div = document.createElement('div');
//             test.appendChild(div);
//             let p = document.createElement('p');
//             p.innerHTML = question.text;
//             div.appendChild(p);
//             let form = document.createElement('form');
//             testAnswers.appendChild(form);
//             form.dataset.right = question.right;


//         let j = 0;
//         let a = 0;
//             for (let answer of question.answers) {
//                 let divInp = document.createElement('div');
//                 divInp.classList = ('answer_div');
//                 divInp.setAttribute('id', 'answer_div');
//                 form.appendChild(divInp);
//                 let input = document.createElement('input');
//                 input.type = 'radio';
//                 input.name = i;
//                 input.dataset.answerNum = j++;
//                 divInp.appendChild(input);
//                 let answ = document.createElement('p');
//                 answ.innerHTML = answer;
//                 divInp.appendChild(answ);
//             };
//         };

//         let chekBtn = document.querySelector('#check_button_1');
//             chekBtn.addEventListener('click', function(){
//                 let forms = document.querySelectorAll('#answers_buttons1 form');
//                 for (let form of forms){
//                     form.classList.remove('correct');
//                     form.classList.remove('incorrect');
//                     let inputs = form.querySelectorAll('input');
//                     for (let input of inputs){
//                         if (input.checked){
//                             let disButton = document.querySelector('#check_button_1');
//                             if (input.dataset.answerNum == form.dataset.right){
//                                 arrPoints.push(100)
//                                 let imgCorrect = document.createElement('img');
//                                 imgCorrect.src = './content/correct.svg';
//                                 correctMarkerPlace.appendChild(imgCorrect);
//                                 pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;


//                                 disButton.classList.remove('disabled_button');
//                                 Povtor.classList.add('disabled_button');
//                                 Dalee.classList.add('disabled_button');

//                                 form.children[0].classList.add('correct');
//                                 for(let i = 1; i < 4; i++){
//                                     form.children[i].classList.add('incorrect2');
//                                 }
//                                 for(let i = 0; i < 4; i++){
//                                     form.children[i].children[0].disabled = true;
//                                 }
//                             }else{
//                                 let imgCorrect = document.createElement('img');
//                                 imgCorrect.src = './content/incorrect.svg';
//                                 correctMarkerPlace.appendChild(imgCorrect);
//                                 pointsOfAttemptPlace.innerHTML = pointsOfAttempt - 1;

//                                 disButton.classList.remove('disabled_button');
//                                 Povtor.classList.add('disabled_button');
//                                 Dalee.classList.add('disabled_button');
//                                 let wrAns = input.dataset.answerNum
                                
//                                 form.children[wrAns].classList.add('incorrect');

//                                 for(let i = 0; i < 4; i++){
//                                     form.children[i].children[0].disabled = true;
//                                 }
//                             };
//                         break;
//                     };
//                 };
//             };
//         });
//         let arrPoints = [];

//         let pointsOfCorrect= document.querySelector('#points_of_correct_1');
//         chekBtn.addEventListener('click', function(){
//             add = function(arr) {
//                 return arr.reduce((a, b) => a + b, 0);
//             };
            
//             let sumPoints = add(arrPoints);
//             pointsOfCorrect.innerHTML = sumPoints;
//         });
//     });

// };



// closePopUpButton.addEventListener('click', function(){
//     console.log("closed");
//     PopUpWindow.classList.add('closed');
//     PopUpWindow.classList.remove('open');

// });




