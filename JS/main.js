const buttons = document.querySelectorAll('.button'); //関数を呼出すコード
const result = document.getElementById('result');
const clear = document.getElementById('C');
const Equal = document.getElementById('equal');


const addResult = (str) => {
  result.innerHTML += str;
}
 
 //どうしたら数値として判断できるか、どう取得するか、sliceをつかう //
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value == "=") {
      //演算子がなくなるまで繰り返すという処理を作る 
      const Plus = "+"
      let inputText = result.innerHTML;
      let Nums = [];
      while (inputText.indexOf(Plus) != -1) {
        const Plusindex = inputText.indexOf(Plus);
        Nums.push(inputText.slice(0, Plusindex));//この処理でindex0fで取得した＋の位置より前の数字をpushしている
        inputText = inputText.slice(Plusindex + 1);//１つ目の＋以降の式をまたinputTextに代入してまた＋の位置を探して数字を取得している
        
      }
      console.log(Nums)
      return
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
