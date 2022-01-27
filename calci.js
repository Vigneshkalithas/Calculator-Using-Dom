// document.getElementById('demo').setAttribute("class","dad")
// document.body.append();

// document.getElementById('demo1').setAttribute("class","mom")
// document.body.append();


// function(){
// var x = document.createElement("input");
// x.setAttribute("type","number");
// x.setAttribute("placeholder","0");
// x.setAttribute("class","inp")
// document.body.append(x);
// }

const div1 = document.createElement('div')
div1.className = "dad";
div1.innerHTML = ` <div class="mom">
<input type="text" id="output-calci" placeholder = "0">
<button onclick = "Clear()">C</button>
<button onclick ="del()">←</button>
<button onclick = "display('.')">.</button>
<button onclick = "display('*')">x</button>
<button onclick = "display('7')">7</button>
<button onclick = "display('8')">8</button>
<button onclick = "display('9')">9</button>
<button onclick = "display('/')">/</button>
<button onclick = "display('4')">4</button>
<button onclick = "display('5')">5</button>
<button onclick = "display('6')">6</button>
<button onclick = "display('-')">-</button>
<button onclick = "display('1')">1</button>
<button onclick = "display('2')">2</button>
<button onclick = "display('3')">3</button>
<button onclick = "display('+')">+</button>
<button onclick = "display('0')">0</button>
<button onclick = "display('00')">00</button>
<button   onclick = "equalto()"class="eqaul-button">=</button>
</div>`
document.body.append(div1);

  








let outputView = document.getElementById("output-calci");
function display(num){
    outputView.value += num; 
}
function equalto(){
    try{
        outputView.value = eval(outputView.value);
    }
    catch(eror){
        alert("Only numbers are allowed")
    }
}
function Clear(){
    outputView.value = "";
}
function del(){
    outputView.value = outputView.value.slice(0,-1);
}