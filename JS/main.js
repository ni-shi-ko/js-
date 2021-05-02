const buttons = document.querySelectorAll('.button'); //関数を呼出すコード
const result = document.getElementById('result');
const clear = document.getElementById('C');

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
    
    const calcList =  ['+', '-', '*', '/'] 
    const Last = calcList.find(( value  => value == button.value));
    if (result.innerHTML.lastIndexOf(Last) != -1) {
      return
    }
      addResult(button.value);
  })
}); 

clear.addEventListener('click', () => {
  result.innerHTML = "0";
}); 

