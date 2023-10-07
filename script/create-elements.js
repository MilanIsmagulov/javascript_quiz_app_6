


function createPopUpMain(question){

    let el = document.createElement("div");
    el.setAttribute("class", "popup_main");
    el.setAttribute("id", "popup_main");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "popup_content");
    elChB.setAttribute("id", "popup_content");
    el.appendChild(elChB);


    switch(question.type) {
        case 1:
            elChB.appendChild(createHeaderPopUp(question));
            elChB.appendChild(createBodyPopUp_Type1(question));
            break;

        case 2:
            constuctQuestionType2(question);
            break;

        case 3:
            constuctQuestionType3(question);
            break;

        case 4:
            constuctQuestionType4(question);
            break;

        case 5:
            constuctQuestionType5(question);
            break;
      
        default:
            break
    }

    el.addEventListener('submit', (e) => submitHandler(e));

    return el;
}

function createHeaderPopUp(question){
    let el = document.createElement("div");
    el.setAttribute("class", "header_popup");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "popup_question");
    let elChBChB = document.createElement("p");
    elChBChB.setAttribute("id", "question_text");
    let elChBChBChA = document.createTextNode(question.text);
    elChBChB.appendChild(elChBChBChA);
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);
    let elChD = document.createElement("div");
    elChD.setAttribute("id", "popup_close");
    elChD.setAttribute("class", "header_popup_close");
    elChD.addEventListener('click', () => popUpQuestionClose());
    let elChDChB = document.createElement("img");
    elChDChB.setAttribute("src", "./content/close.svg");
    elChDChB.setAttribute("alt", "header_popup");
    if (questionIsPassed(question)) elChD.appendChild(elChDChB);
    el.appendChild(elChD);
        

    return el;
}

function createBottomPopUp(question){
    let el = document.createElement("div");
    el.setAttribute("class", "popup_bottom");
    el.setAttribute("id", "popup_bottom");
    let elChB = document.createElement("input");
    elChB.setAttribute("id", "post_answ_type_2");
    elChB.setAttribute("type", "submit");
    elChB.setAttribute("value", "Ответить");
    el.appendChild(elChB);
    let elChD = document.createElement("p");
    elChD.setAttribute("id", "question_price");
    let elChDChA = document.createTextNode(`Правильный ответ даст ${question.price} очков`);
    elChD.appendChild(elChDChA);
    el.appendChild(elChD);

    return el;
}

function deletePopUpMain(){
    if(document.getElementById("popup_main") != null)
        document.getElementById("popup_main").remove();
}



function createBodyPopUp_Type1(question){

    let el = document.createElement("div");
    el.setAttribute("class", "question_type_1_body");
    el.setAttribute("id", "question_type_1");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_1_radio");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (question.image != null) elChBChB.appendChild(createImgDiv_Type1(question));

    elChBChB.appendChild(createAnswers_Type1(question));

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswer_Type1(question, i){
    
    let el = document.createElement("div");
    let elChB = document.createElement("input");
    elChB.setAttribute("type", "radio");
    elChB.setAttribute("name", "answ");
    elChB.setAttribute("value", `${i}`);
    el.appendChild(elChB);
    let elChD = document.createElement("p");
    elChD.setAttribute("id", `question_type_1_answer_${i}`);
    let elChDChA = document.createTextNode(question.answers[i]);
    elChD.appendChild(elChDChA);
    el.appendChild(elChD);

    if (questionIsPassed(question)){
        console.log("passed");
        console.log(question);
        console.log(question.answered);
        console.log(question.answered.includes(i, 0));
        elChB.setAttribute("class", "disabled_input");
        if(question.answered.includes(i, 0)) {
            elChB.checked = true;
        }
        //
    }
    
    return el;
}
function createAnswers_Type1(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_1_answers");
    el.setAttribute("id", "question_type_1_answers");

    for (let i = 0; i < question.answers.length; i++) {
        el.appendChild(createAnswer_Type1(question, i));
    }

    return el;
}
function createImgDiv_Type1(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_1_img");
    el.setAttribute("id", "question_type_1_img");
    
    let img = document.createElement("img");
    img.setAttribute("src", question.image);
    el.appendChild(img);

    return el;
}