const buttons = document.querySelectorAll('.button');
const result = document.getElementById('result');
const clear = document.getElementById('C');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
 
buttons.forEach(button => {
  button.addEventListener('click', () => {
    result.innerHTML += button.value;

  })
});



clear.addEventListener('click', () => {
  result.innerHTML = "0";
});

