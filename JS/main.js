const buttons = document.querySelectorAll('.button'); //関数を呼出すコード
const result = document.getElementById('result');
const clear = document.getElementById('C');

const addResult = (str) => {
  result.innerHTML += str;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (result.innerHTML == "0" && button.value != "0") {
      result.innerHTML = "";
    }
    addResult(button.value);
      //if文 0の場合・・・
   
  })
});


clear.addEventListener('click', () => {
  result.innerHTML = "0";
});
