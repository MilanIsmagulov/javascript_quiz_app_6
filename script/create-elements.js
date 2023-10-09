function createPopUpMain(question){
    let el = document.createElement("div");
    el.setAttribute("class", "popup_main");
    el.setAttribute("id", "popup_main");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "popup_content");
    elChB.setAttribute("id", "popup_content");
    el.appendChild(elChB);

    elChB.appendChild(createHeaderPopUp(question));

    switch(question.type) {
        case 0:
            
            elChB.appendChild(createBodyPopUp_Type1(question));
            break;

        case 1:;
            elChB.appendChild(createBodyPopUp_Type2(question));
            break;

        case 2:
            elChB.appendChild(createBodyPopUp_Type3(question));
            break;

        case 3:
            constuctQuestionType4(question);
            break;

        case 4:
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
    elChB.setAttribute("id", "post_answ");
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
    el.setAttribute("class", "question_type_0_body");
    el.setAttribute("id", "question_type_1");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_0_radio");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (question.image != null) elChBChB.appendChild(createImgDiv_Type1(question));

    elChBChB.appendChild(createAnswers_Type1(question));

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswer_Type1(question, i){
    
    let el = document.createElement("div");
    el.setAttribute("id", `question_type_0_answer_${i}`)
    let elChB = document.createElement("input");
    elChB.setAttribute("type", "radio");
    elChB.setAttribute("name", "answ");
    elChB.setAttribute("value", `${i}`);
    el.appendChild(elChB);
    let elChD = document.createElement("p");
    elChD.setAttribute("id", `question_type_0_answer_text_${i}`);
    let elChDChA = document.createTextNode(question.answers[i]);
    elChD.appendChild(elChDChA);
    el.appendChild(elChD);

    if (questionIsPassed(question)){
        elChB.setAttribute("class", "disabled_input");
        if(question.answered.includes(i, 0)) {
            elChB.checked = true;
        }
    }else{
        el.addEventListener('click', () => {
            elChB.checked = !elChB.checked;
        });
    }
    
    return el;
}
function createAnswers_Type1(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_0_answers");
    el.setAttribute("id", "question_type_0_answers");

    for (let i = 0; i < question.answers.length; i++) {
        el.appendChild(createAnswer_Type1(question, i));
    }

    return el;
}
function createImgDiv_Type1(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_0_img");
    el.setAttribute("id", "question_type_0_img");
    
    let img = document.createElement("img");
    img.setAttribute("src", question.image);
    el.appendChild(img);

    return el;
}

function createBodyPopUp_Type2(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_1_body");
    el.setAttribute("id", "question_type_2");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_1_radio");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    elChBChB.appendChild(createAnswers_Type2(question));

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswer_Type2(question, i){
    let el = document.createElement("div");
    el.setAttribute("id", `question_type_1_answer_${i}`);
    let elChB = document.createElement("input");
    elChB.setAttribute("type", "checkbox");
    elChB.setAttribute("value", `${i}`);
    el.appendChild(elChB);
    let elChD = document.createElement("p");
    elChD.setAttribute("id", `question_type_1_answer_text_${i}`);
    let elChDChA = document.createTextNode(`${question.answers[i]}`);
    elChD.appendChild(elChDChA);
    el.appendChild(elChD);

    if (questionIsPassed(question)){
        elChB.setAttribute("class", "disabled_input");
        if(question.answered.includes(i, 0)) {
            elChB.checked = true;
        }
    }else{
        el.addEventListener('click', () => {
            console.log("click!");
            elChB.checked = !elChB.checked;
        });
    }

    return el;
}
function createAnswers_Type2(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_1_answers");
    el.setAttribute("id", "question_type_1_answers");

    for (let i = 0; i < question.answers.length; i++) {
        el.appendChild(createAnswer_Type2(question, i));
    }

    return el;
}

function createBodyPopUp_Type3(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_2_body");
    el.setAttribute("id", "question_type_3");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_2_dropdown");
    let elChBChBChB = document.createElement("div");
    elChBChBChB.setAttribute("class", "question_type_2_answers");
    elChBChBChB.setAttribute("id", "question_type_2_answers");
    let elChBChBChBChB = document.createElement("div");
    elChBChBChBChB.setAttribute("class", "place_of_custom_dropdown");

    let text = question.textDd.split('|');
    elChBChBChBChB.appendChild(document.createTextNode(text[0])); 
    for (let i = 0; i < question.answers.length; i++) {
        elChBChBChBChB.appendChild(createDropdown_Type3(question, i));
        textel = document.createTextNode(text[i+1]);
        elChBChBChBChB.appendChild(textel);
    }

    elChBChBChB.appendChild(elChBChBChBChB);
    elChBChB.appendChild(elChBChBChB);
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createDropdown_Type3(question, i){
    let el = document.createElement("div");
    el.setAttribute("class", "custom-dropdown");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "custom-dropdown-input");
    elChB.setAttribute("id", `question_type_2_answer_${i}`);
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "custom-dropdown-input-placeholder");
    let elChBChBChA = document.createTextNode("Выберите ответ");
    elChBChB.appendChild(elChBChBChA);
    elChB.appendChild(elChBChB);
    let elChBChD = document.createElement("div");
    elChBChD.setAttribute("class", "custom-dropdown-input-icon");
    let elChBChDChB = document.createElement("img");
    elChBChDChB.setAttribute("src", "content/check-mark.png");
    elChBChDChB.setAttribute("alt", "");
    elChBChD.appendChild(elChBChDChB);
    elChB.appendChild(elChBChD);
    el.appendChild(elChB);

    let elChD = document.createElement("div");
    elChD.setAttribute("class", "custom-dropdown-select closed");
    elChD.setAttribute("id", `custom-dropdown-select-${i}`);

    
    for (let j = 0; j < question.answers[i].length; j++) {
        elChD.appendChild(createDropdownSelect_Type3(question.answers[i], j));
    }

    el.addEventListener('click', function(e){
        elChD.classList.toggle("closed");
    });

    elChD.addEventListener('click', function(e){
        text = e.target.innerHTML;
        elChBChB.innerHTML = text;
    });

    el.appendChild(elChD);

    return el;
}
function createDropdownSelect_Type3(answers, j){
    let elChDChB = document.createElement("div");
    let elChDChBChA = document.createTextNode(`${answers[j]}`);
    elChDChB.appendChild(elChDChBChA);
    return elChDChB;
}
