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
    //最後が演算子の時の処理
    if (button.classList.contains('calc')) {
      let Last = result.innerHTML.slice(result.innerHTML.length - 1);
      if (Last == "+" || Last == "-" || Last == "*" || Last == "/") {
        return
      }
    }

  
      addResult(button.value);
  })
}); 

clear.addEventListener('click', () => {
  result.innerHTML = "0";
});
