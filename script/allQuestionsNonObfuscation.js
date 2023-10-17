// Массив с вопросами. Не Зашифрован :)

let allQuestions = [
    {
        type: 0, 
        price: 100,
        text: 'Контактным элементом насадочной колонны является:',
        image: null,
        answers: ['колпачковая тарелка', 'S-образная тарелка', 'кольцо Палля', 'клапанная тарелка'],
        correctAnswer: [2], 
        answered: null, 
    },
    {
        type: 0, 
        price: 100,
        text: 'Насадочные элементы регулярного типа – это:',
        image: null,
        answers: ['элементы, которые засыпаются в колонну в несколько слоев и располагаются в аппарате беспорядочно', 'элементы, которые расположены в колонне упорядоченно, образуют структурированный проход пару', 'элементы, представляющие металлические диски с отверстиями в виде щелей или овалов', 'элементы желоба и колпачки, образующие при сборке S-образные элементы с одинаковым поперечным сечением'],
        correctAnswer: [1], 
        answered: null, 
    },
    {
        type: 0, 
        price: 100,
        text: 'Какой из представленных элементов аппарата, является главным составляющим корпуса насадочной колонны:',
        image: null,
        answers: ['опора', 'обечайка', 'днище', 'крышка'],
        correctAnswer: [1],
        answered: null, 
    },
    {
        type: 0, 
        price: 150,
        text: 'Как называется аппарат, представленный на рисунке.',
        image: true,
        answers: ['выпарной аппарат', 'сепаратор', 'насадочная ректификационная колонна', 'теплообменник'],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 0, 
        price: 150,
        text: 'Какой вид нерегулярной насадки изображен на рисунке.',
        image: true,
        answers: ['кольцо Палля', 'кольцо Рашига', 'кольцо со спиралью', 'кольцо Лессинга'],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 1, 
        price: 150,
        text: 'Укажите условия режима захлебывания насадочной колонны.',
        answers: ['высокая скорость стекания жидкости по насадке', 'малые скорости движения газа', 'резкое повышение сопротивления', 'понижение давления верха колонны', 'снижение эффективности процессов ректификации или абсорбции'],
        correctAnswer: [0,1,2,4],
        answered: null,
    },
    {
        type: 2, 
        price: 200,
        text: 'Вставте пропущенные слова:',
        textDd: "Насадочная колонна – цилиндрический вертикальный | различной высоты, заполненный массообменными контактными |, расположенными различными способами: насыпом, под углом и т.д.",
        image: null,
        answers: [["аппарат", "корпус", "сосуд"],
                ["элементами","тарелками","насадками"]],
        correctAnswer: [0,0],
        answered: null,
    },
    {
        type: 3, 
        price: 200,
        text: 'Установите соответствие между названием насадки и изображением.',
        image: true,
        answers: ["Кольца Рашига","Кольца с крестообразной перегородкой","Кольца Палля","Кольца Лессинга"],
        correctAnswer: [0,1,2,3],
        answered: null,
    },
    {
        type: 1, 
        price: 200,
        text: 'Определите недостатки в использовании регулярных насадок в процессах ректификации.',
        answers: ['малое гидравлическое сопротивление', 'чувствительность к равномерному распределению орошения', 'высокая разделительная способность', 'сложность изготовления'],
        correctAnswer: [1,3],
        answered: null,
    },
    {
        type: 3, 
        price: 250,
        text: 'Установите соответствие между названием насадки и изображением.',
        image: true, 
        answers: ["Плоскопараллельная","Насадка Зульцера","Насадка Гудлоу","Наклонно-пакетная насадка"],
        correctAnswer: [0,1,2,3],
        answered: null,
    },
    {
        type: 5, 
        price: 350,
        text: 'Определите элементы насадочной колонны.',
        image: true,
        answers: ["Распределительное устройство","Насадка","Опорная решетка","Распределитель жидкости","Направляющий конус"],
        correctAnswer: [0,1,2,3,4],
        answered: null,
    },
    {
        type: 5, 
        price: 350,
        text: 'ВОПРОС НЕ НАЙДЕН ВОПРОС НЕ НАЙДЕН ВОПРОС НЕ НАЙДЕН ВОПРОС НЕ НАЙДЕН',
        image: true,
        answers: ["Распределительное устройство","Насадка","Опорная решетка","Распределитель жидкости","Направляющий конус"],
        correctAnswer: [0,1,2,3,4],
        answered: null,
    },
    {
        type: 1, 
        price: 300,
        text: 'Определите эффективные характеристики насадочных элементов.',
        answers: ['иметь высокую стоимость материалов изготовления', 'равномерно распределять орошающую жидкость', 'хорошо смачиваться орошаемой жидкостью', 'оказывать малое гидравлическое сопротивление', 'обладать малой механической прочностью', 'химически взаимодействовать с окружающей средой'],
        correctAnswer: [1,2,3],
        answered: null,
    },
    {
        type: 2, 
        price: 300,
        text: 'Вставте пропущенные слова:',
        textDd: "Простейшая регулярная насадка –|– изготавливается из плоских металлических листов различной толщиной | мм и высотой пакета | мм, собранные в единый элемент с расстоянием между листами | мм. Располагаются листы относительно друг друга параллельно, вертикально или для повышения эффективности устанавливают повернутыми на угол | ○.",
        image: null,
        answers: [["плоскопараллельная", "насадка Гудлоу", "насадка Зульцера"],
                ["0,4 – 1,2", "0,1 – 0,3", "1,3 – 2,0"],
                ["400 – 1000", "100 – 200", "1500 – 2000"],
                ["10 – 20", "5 – 8", "25 – 30"],
                ["45 – 90", "20 – 40", "90 – 120"],],
        correctAnswer: [0,0,0,0,0],
        answered: null,
    },
    {
        type: 4, 
        price: 300,
        text: 'Распределите виды насадочных элементов в соответствии с предложенной классификацией.',
        tables: ["Регулярная насадка","Нерегулярная насадка"],
        answers: ["Круглые пружины","Плоскопараллельная насадка","Насадка Берля","Керамические насадки Инталлокс","Кольца с крестообразными перегородками","Кольца Палля","Наклонно-пакетная насадка","Насадка Зульцера","Насадка Гудлоу","Кольца Рашига","Кольца Лессинга"],
        correctAnswer: [[0,1,2],[3,4,5,6,7,8,9,10]],
        answered: null,
    },
]