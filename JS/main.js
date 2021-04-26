const buttons = document.querySelectorAll('.button');
const result = document.getElementById('result');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    result.innerHTML = button.value;

  })
})
