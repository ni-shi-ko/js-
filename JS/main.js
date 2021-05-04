const buttons = document.querySelectorAll('.button'); //関数を呼出すコード
const result = document.getElementById('result');
const clear = document.getElementById('C');

const addResult = (str) => {
  result.innerHTML += str;
}
 //どうしたら数値として判断できるか、どう取得するか、sliceをつかう //
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value == "=") {
      //演算子がなくなるまで繰り返すという処理を作る
       const plus = "+"
      let inputText = result.innerHTML;
      const Plusindex1 = inputText.indexOf(plus)
      if (Plusindex1 != -1) {
        let num1 = inputText.slice(0, Plusindex1);
        alert(num1)
        const Plusindex2 = inputText.indexOf(plus, (Plusindex1 + 1))
        let num2 = inputText.slice(Plusindex1 + 1, Plusindex2);
        alert(num2)
        let num3 = inputText.slice(Plusindex2 + 1);
        alert(num3)
        const Num1 = Number(num1);
        const Num2 = Number(num2);
        const Num3 = Number(num3)
        result.innerHTML = Num1 + Num2 + Num3;
        return
      }
    }
    if (result.innerHTML == "0" && button.value != "." && !button.classList.contains('calc')) {
      result.innerHTML = ""; // == は関数左右が同じだったらtrueを返す
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
