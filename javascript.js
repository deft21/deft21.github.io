const inputA = document.getElementById("a");//элементы для ввода
const inputB = document.getElementById("b");//элементы для ввода
const inputContainerA = document.getElementById("inputContainerA");//контейнер элемента для ввода
const inputContainerB = document.getElementById("inputContainerB");//контейнер элемента для ввода
const exampleAB = document.getElementById('exampleAB');//элемент для примера
const result = document.getElementById('result');//элемент для результата
const canvasA = document.getElementById("canvasA");//блок для первой линии
const canvasB = document.getElementById("canvasB");//блок для второй линии

const a=7 ,b=4;
Example(a,b);
function Example(a,b){
//отображение примера
  exampleAB.innerHTML = '<span id = "exampleA">'+a+'</span>+<span id="exampleB">'+b+'</span><span>=</span>';
  result.innerHTML = '<span class="result">?</span>'
  draw (a,canvasA,inputContainerA);
 };
//рисование линий
function draw(k,canv,inputContainer){
  let ctx = canv.getContext("2d");     
  let x = 39*k;
  ctx.beginPath();
  ctx.moveTo(0,100);
  ctx.quadraticCurveTo(150,-100,300,100);
  canv.style.width=x+"px";
  inputContainer.style.width = x+"px";
  inputContainer.style.marginLeft = x/2+15+"px";
  inputContainer.style.marginRight = -(x/2)-15+"px";

  //стрелка
  ctx.lineTo(290, 75);
  ctx.lineTo(270, 75);
  ctx.lineTo(295, 93);
  ctx.lineWidth = 2;
  ctx.strokeStyle="red";
  ctx.stroke();
};
//выделение ошибок
function RedYellow(example,input){
  example.style.backgroundColor = "yellow";
  input.style.color = "red";
};
//проверка а
function checkA(){
  let exampleA = document.getElementById("exampleA");
  let inputA_v = inputA.value;
  if(inputA_v!=a){
      RedYellow (exampleA,inputA);
                  } else {
                  exampleA.style.backgroundColor = "white";
                  console.log(inputContainerA);
                  inputContainerA.innerHTML = inputA_v;

                  inputB.style.display = "block";
                  draw(b,canvasB,inputContainerB);
                        };
};
//проверка b
function checkB(){
  let exampleB = document.getElementById("exampleB")
  let inputB_v = inputB.value;
  if (inputB_v!=b){
      RedYellow (exampleB,inputB);
                  } else {
                  exampleB.style.backgroundColor = "white";
                  inputContainerB.innerHTML = inputB_v;
                  result.innerHTML = '<input class = "result" type="text" name="result" size="2" id = "answer">';
                  let answer = document.getElementById('answer');
                  answer.onkeyup = function checkAnswer(){
                      let answer_v = answer.value;
                        if (answer_v!=a+b){
                        answer.style.color = "red";
                        } else {
                        result.innerHTML = answer_v;
                        };
                        }; 
  };
};

