const buttons = document.querySelectorAll('.button'); //関数を呼出すコード
const result = document.getElementById('result');
const clear = document.getElementById('C');
const calc = document.getElementsByClassName('.calc');

const addResult = (str) => {
  result.innerHTML += str;
}
 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (result.innerHTML == "0" && button.value != "." && !button.classList.contains('calc')) {
      result.innerHTML = "";
    }

    if (button.value == ".") {
      
    if (result.innerHTML.indexOf(".") != -1) {
        return
      }
    } 
    
    const arry = result.innerHTML;
    const Last = arry[arry.length - 1];
    if (Last == button.classList.contains('calc') ) {
      
    }
    addResult(button.value);
  })
}); 

clear.addEventListener('click', () => {
  result.innerHTML = "0";
}); 

