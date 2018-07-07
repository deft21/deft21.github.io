const inputA = document.getElementById("a");//ищу элементы для ввода
const inputB = document.getElementById("b");//ищу элементы для ввода

const a=7,b=4;
Example(a,b);

function Example(a,b){
//вывожу пример
  const exampleAB = document.getElementById('exampleAB');
  const result = document.getElementById('result');
  exampleAB.innerHTML = '<span id = "exampleA">'+a+'</span>+<span id="exampleB">'+b+'</span><span>=</span>';
  result.innerHTML = '<span class="result">?</span>';
//рисую первый полукруг
  var canvasA = document.getElementById('canvasA');
  var ctxA = canvasA.getContext('2d');
  
  ctxA.strokeStyle="red";
  ctxA.arc(65,150, 60, 0, Math.PI, true);
  ctxA.stroke();
};
// провера а
function checkA(){
  const exampleA = document.getElementById("exampleA");// для смены цвета примера
  var inputA_v = document.getElementById("a").value;// введенное значение 
  console.log(inputA_v); 
  //maxLen=1;
  //if (inputA.value().length>maxLen) return false; // пытался ограничить по длине??????????????????
  if(inputA_v!=a){
  console.log('не равно');
  console.log (exampleA);
  exampleA.style.backgroundColor = "yellow";
  inputA.style.color = "red";
                } else {
                  console.log('равно');
                  exampleA.style.backgroundColor = "white";
                  inputA.style.color = "black";
                  inputB.style.display = "block"; // отобразил второе поле для ввода
                  //рисую второй полукруг
                  var canvasB = document.getElementById('canvasB');
                  var ctxB = canvasB.getContext('2d');
                  
                  ctxB.strokeStyle="red";
                  ctxB.arc(65,100, 60, 0, Math.PI, true);
                  ctxB.stroke();
                        };
};
function checkB(){
  const exampleB = document.getElementById("exampleB")// для смены цвета примера
  var inputB_v = document.getElementById("b").value;// введенное значение
  console.log(inputB);
  if (inputB_v!=b){
  console.log('не равно');
  exampleB.style.backgroundColor = "yellow";
  inputB.style.color = "red";
                } else {
                  console.log('равно');
                  exampleB.style.backgroundColor = "white";
                  inputB.style.color = "black";
                  result.innerHTML = '<input class = "result" type="text" name="result" size="2" id = "answer">';
                  const answer = document.getElementById('answer');
                  answer.onkeyup = function checkAnswer(){
                      var answer_v = document.getElementById('answer').value;
                      console.log(answer_v);
                        if (answer_v!=a+b){
                        console.log('не верно');
                        answer.style.color = "red";
                        } else {
                        console.log('верно');
                        answer.style.color = "black";
                        };
                        }; 
  };
};