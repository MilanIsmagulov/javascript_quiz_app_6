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
            
            elChB.appendChild(createBodyPopUp_Type0(question));
            break;

        case 1:;
            elChB.appendChild(createBodyPopUp_Type1(question));
            break;

        case 2:
            elChB.appendChild(createBodyPopUp_Type2(question));
            break;

        case 3:
            elChB.appendChild(createBodyPopUp_Type3(question));
            break;

        case 4:
            elChB.appendChild(createBodyPopUp_Type4(question));
            break;

        case 5:
            elChB.appendChild(createBodyPopUp_Type5(question));
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
    elChD.appendChild(elChDChB);
    if (questionIsPassed(question)) el.appendChild(elChD);
        
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




function createBodyPopUp_Type0(question){

    let el = document.createElement("div");
    el.setAttribute("class", "question_type_0_body");
    el.setAttribute("id", "question_type_0");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_0_radio");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (question.image != null) elChBChB.appendChild(createImgDiv_Type0(question));

    elChBChB.appendChild(createAnswers_Type0(question));

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswer_Type0(question, i){
    
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

            if (question.correctAnswer.includes(i)){
                el.style = "background-color: #bdffbd;";
            }else el.style = "background-color: #ffb9b9;";
        }
    }else{
        el.addEventListener('click', () => {
            elChB.checked = !elChB.checked;
        });
    }
    
    return el;
}
function createAnswers_Type0(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_0_answers");
    el.setAttribute("id", "question_type_0_answers");

    for (let i = 0; i < question.answers.length; i++) {
        el.appendChild(createAnswer_Type0(question, i));
    }

    return el;
}
function createImgDiv_Type0(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_0_img");
    el.setAttribute("id", "question_type_0_img");
    
    let img = document.createElement("img");
    img.setAttribute("src", question.image);
    el.appendChild(img);

    return el;
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

    elChBChB.appendChild(createAnswers_Type1(question));

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswer_Type1(question, i){
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

            if (question.correctAnswer.includes(i)){
                el.style = "background-color: #bdffbd;";
            }else el.style = "background-color: #ffb9b9;";
        }
    }else{
        el.addEventListener('click', () => {
            console.log("click!");
            elChB.checked = !elChB.checked;
        });
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

function createBodyPopUp_Type2(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_2_body");
    el.setAttribute("id", "question_type_2");
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
        elChBChBChBChB.appendChild(createDropdown_Type2(question, i));
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
function createDropdown_Type2(question, i){
    let passed = questionIsPassed(question);
    let el = document.createElement("div");
    el.setAttribute("class", "custom-dropdown");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "custom-dropdown-input");
    elChB.setAttribute("id", `question_type_2_answer_${i}`);
    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "custom-dropdown-input-placeholder");

    let elChBChBChA = ":)";
    if (!passed){
        elChBChBChA = document.createTextNode("Выберите ответ");
    }else{
        elChBChBChA = document.createTextNode(`${question.answers[i][question.answered[i]]}`);
        
        if (question.correctAnswer[i] == question.answered[i]){
            elChB.style = "background-color: #bdffbd;";
        }else elChB.style = "background-color: #ffb9b9;";
    }

    elChBChB.appendChild(elChBChBChA);
    elChB.appendChild(elChBChB);
    if (!passed){
        let elChBChD = document.createElement("div");
        elChBChD.setAttribute("class", "custom-dropdown-input-icon");
        let elChBChDChB = document.createElement("img");
        elChBChDChB.setAttribute("src", "content/check-mark.png");
        elChBChDChB.setAttribute("alt", "");
        elChBChD.appendChild(elChBChDChB);
        elChB.appendChild(elChBChD);
    }

    el.appendChild(elChB);

    let elChD = document.createElement("div");
    elChD.setAttribute("class", "custom-dropdown-select closed");
    elChD.setAttribute("id", `custom-dropdown-select-${i}`);

    if (!passed){

        for (let j = 0; j < question.answers[i].length; j++) {
            elChD.appendChild(createDropdownSelect_Type2(question.answers[i], j));
        }

        el.addEventListener('click', function(e){
            elChD.classList.toggle("closed");
        });

        elChD.addEventListener('mouseup', function(e){
            text = e.target.innerHTML;
            elChBChB.innerHTML = text;
        });

    }

    el.appendChild(elChD);

    return el;
}
function createDropdownSelect_Type2(answers, j){
    let elChDChB = document.createElement("div");
    let elChDChBChA = document.createTextNode(`${answers[j]}`);
    elChDChB.appendChild(elChDChBChA);
    return elChDChB;
}

function createBodyPopUp_Type3(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_3_body");
    el.setAttribute("id", "question_type_3");

    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");

    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_3_drag_n_drop_images");

    elChBChB.appendChild(createAnswers_Type3(question));
    if (!questionIsPassed(question)) elChBChB.appendChild(createDrags_Type3(question));

    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createAnswers_Type3(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_3_answers");
    el.setAttribute("id", "question_type_3_answers");

    for (let i = 0; i < question.answers.length ; i++){
        el.appendChild(createAnswer_Type3(question, i));
    }

    return el;
}
function createAnswer_Type3(question, i){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_3_answer");
    el.setAttribute("id", `question_type_3_answer_${i}`);
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "question_type_3_answer_img");
    let elChBChB = document.createElement("img");
    elChBChB.setAttribute("src", `${question.image}${[i]}.png`);
    elChBChB.setAttribute("alt", "");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);
    let elChD = document.createElement("div");
    elChD.setAttribute("class", "question_type_3_answer_drop_zone");
    elChD.setAttribute("id", `question_type_3_answer_drop_zone_${i}`);

    if(questionIsPassed(question)){
        elChD.setAttribute("class", "question_type_3_answer_drop_zone question_type_3_dropped");
        let text = document.createTextNode(`${question.answers[question.answered[i]]}`);
        elChD.appendChild(text);
        if (question.correctAnswer[i] == question.answered[i]){
            elChD.style = "background-color: #bdffbd;";
        }else elChD.style = "background-color: #ffb9b9;";
    }

    el.appendChild(elChD);

    return el;
}
function createDrags_Type3(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_3_drags");

    for (let i = 0; i < question.answers.length ; i++){
        el.appendChild(createDrag_Type3(question, i));
    }

    return el;
}
function createDrag_Type3(question, i){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_3_drag");
    el.setAttribute("id", `question_type_3_drag_${i}`);
    let elChA = document.createTextNode(`${question.answers[i]}`);
    el.appendChild(elChA);

    el.addEventListener('mousedown', (e) => dragNdropHandler(e));

    return el;
}

function createBodyPopUp_Type4(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_body");
    el.setAttribute("id", "question_type_4");

    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");

    let elChBChB = document.createElement("div");
    elChBChB.setAttribute("class", "question_type_4_drag_n_drop_tables");

    elChBChB.appendChild(createTables_Type4(question));
    if (!questionIsPassed(question)) elChBChB.appendChild(createAnswers_Type4(question));

    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));

    return el;
}
function createTables_Type4(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_tables");

    
    for (let i = 0; i < question.tables.length; i++){
        el.appendChild(createTable_Type4(question, i));
        if (i != question.tables.length - 1) el.appendChild(createTableSplit_Type4());
    }
    

    return el;
}
function createTable_Type4(question, i){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_table");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "question_type_4_table_name");
    let elChBChB = document.createElement("div");
    let elChBChBChA = document.createTextNode(`${question.tables[i]}`);
    elChBChB.appendChild(elChBChBChA);
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);
    let elChD = document.createElement("div");
    elChD.setAttribute("class", "question_type_4_answer_drop_zone");

    if(questionIsPassed(question)){
        for (let j = 0; j < question.answered[i].length; j++){
            
            let text = question.answers[question.answered[i][j]];
            console.log(text);

            let answ = createAnswer_Type4(text, true);

            if (question.correctAnswer[i].indexOf(question.answers.indexOf(text)) != -1){
                answ.style = "background-color: #bdffbd;";
            }else answ.style = "background-color: #ffb9b9;";

            elChD.appendChild(answ);
        }
    }

    el.appendChild(elChD);

    return el;
}
function createTableSplit_Type4(){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_table_split");
    return el;
}
function createAnswers_Type4(question) {
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_answers");

    for (let i = 0; i < question.answers.length; i++){
        el.appendChild(createAnswer_Type4(question.answers[i]));
    } 

    return el;
}
function createAnswer_Type4(text, flag = false) {
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_4_answer");
    let elChA = document.createTextNode(`${text}`);
    el.appendChild(elChA);

    if (!flag) el.addEventListener('mousedown', (e) => dragNdropHandler(e));

    

    return el;
}


function createBodyPopUp_Type5(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_5_body");
    el.setAttribute("id", "question_type_5");
    let elChB = document.createElement("form");
    elChB.setAttribute("style", "width: 100%;");
    el.appendChild(elChB);

    elChB.appendChild(createDropDownImage_Type5(question));
    if (!questionIsPassed(question)) elChB.appendChild(createBottomPopUp(question));


    return el;
}
function createDropDownImage_Type5(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_5_dropdown_image");
    let elChB = document.createElement("div");
    elChB.setAttribute("class", "question_type_5_image");
    let elChBChB = document.createElement("img");
    elChBChB.setAttribute("src", `${question.image}`);
    elChBChB.setAttribute("alt", "");
    elChB.appendChild(elChBChB);
    el.appendChild(elChB);

    el.appendChild(createAnswers_Type5(question));

    return el;
}
function createAnswers_Type5(question){
    let el = document.createElement("div");
    el.setAttribute("class", "question_type_5_answers");

    for (let i = 0; i < question.answers.length; i++) {
        el.appendChild(createDropdownBlock_Type5(question, i));
    }
    
    return el;
}
function createDropdownBlock_Type5(question, i){
    let passed = questionIsPassed(question);

    let el = document.createElement("div");
    el.setAttribute("class", "question_type_5_dropdown_block");

    let elChB = document.createElement("div");
    elChB.setAttribute("class", "question_type_5_dropdown_text");
    let elChBChA = document.createTextNode(`${i+1}`);
    elChB.appendChild(elChBChA);
    el.appendChild(elChB);

    let elChD = document.createElement("div");
    elChD.setAttribute("class", "question_type_5_dropdown_answer");
    elChD.setAttribute("id", `question_type_5_answer_${i}`);

    let elChDChB = document.createElement("div");
    elChDChB.setAttribute("class", "custom-dropdown-input-placeholder");
    let elChDChBChA;
    if (!passed) elChDChBChA = document.createTextNode("Выберите ответ");
    else {
        let text = `${question.answers[question.answered[i]]}`;
        elChDChBChA = document.createTextNode(text);
        if (question.correctAnswer[i] == question.answered[i]){
            elChD.style = "background-color: #bdffbd;";
        }else elChD.style = "background-color: #ffb9b9;";
    }

    elChDChB.appendChild(elChDChBChA);

    elChD.appendChild(elChDChB);

    let elChDChD = document.createElement("div");
    elChDChD.setAttribute("class", "custom-dropdown-input-icon");
    let elChDChDChA = document.createElement("img");
    elChDChDChA.setAttribute("src", "content/check-mark.png");
    elChDChDChA.setAttribute("alt", "");
    elChDChD.appendChild(elChDChDChA);
    
    elChD.appendChild(elChDChD);

    let elChDChF = document.createElement("div");
    elChDChF.setAttribute("class", "custom-dropdown-image-select closed");

    for (let j = 0; j < question.answers.length; j++) {
        let elChDChFChB = document.createElement("div");
        let elChDChFChBChA = document.createTextNode(`${question.answers[j]}`);
        
        if (!passed){
            elChDChFChB.addEventListener('mouseup', function(e){
                text = e.target.innerHTML;
                elChDChB.innerHTML = text;
                elChD.classList.remove("un_answered");
            });
        }

        elChDChFChB.appendChild(elChDChFChBChA);
        elChDChF.appendChild(elChDChFChB);
    }

    if (!passed){
        elChD.addEventListener('click', function(e){
            elChDChF.classList.toggle("closed");
        });
    }
    
    
    elChD.appendChild(elChDChF);
    el.appendChild(elChD);

    return el;

}