const buttons = document.querySelectorAll('.button');

buttons.forEach(buttons => {
  buttons.addEventListener('click', () => {
    alert(buttons.value);
  })
})

