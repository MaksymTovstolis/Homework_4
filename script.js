let question1 = parseInt(prompt("Сколько будет 2+2"));
let question2 = confirm("Солнце встает на востоке?");
let question3 = parseInt(prompt("Сколько будет 5 / 0?"));
let question4 = prompt("Какого цвета небо?");
let question5 = parseInt(prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого."));

let result = 0;

if(question1 == 4)
  result+=10;

if(question2)
  result+=10;

if(question3 === 0)
  result+=10;

if(question4 === "голубого")
  result+=10;

if(question5 === 42)
  result+=10;

alert(`Ваш результат: ${result}`);
