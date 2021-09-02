let question1 = +prompt(`Сколько будет 2+2`);
let question2 = prompt(`Солнце встает на востоке? (Yes)`);
let question3 = +prompt(`Сколько будет 5 / 0?`);
let question4 = prompt(`Какого цвета небо? (blue)`);
let question5 = +prompt(`Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.`);
let answer1
let answer2
let answer3
let answer4
let answer5
let points = 10;
let result;

debugger;

if (question1 == 4) { 
    answer1 = +points;
} else {
    answer1 = 0;
}

if (question2 == `Yes`) {
    answer2 = +points;
} else {
    answer2 = 0;
}

if (question3 == 0) {
    answer3 = +points;
} else {
    answer3 = 0;
}

if (question4 == `blue`) {
    answer4 = +points;
} else {
    answer4 = 0;
}

if (question5 == 42) {
    answer5 = +points;
} else {
    answer5 = 0;
}

result = answer1+answer2+answer3+answer4+answer5;


alert(`Ваш результат : ${result}`);