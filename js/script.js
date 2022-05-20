'use strict'
const telProgForm = document.querySelector('[data-prog');
const formInputNone = document.querySelector('.form-block__input-none')
const selected = document.querySelector('.form-block__selected');
const optionContainer = document.querySelector('.form-block__options-container');
const optionList = document.querySelectorAll('.form-block__option');

let salom = document.querySelector('#telegram');

formInputNone.value=selected.querySelectorAll('span')[1].innerText

const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    console.log('Media Query Matched!');
    document.querySelectorAll('.header__icon').forEach(function (event) {
      event.setAttribute("transform", "scale(1.6)")
    })

    // telegram.style.transform.style='1.5'
    // telegram.setAttribute("viewBox", "0 0 " + 60 + " " + 60)
  } else {
    document.querySelectorAll('.header__icon').forEach(function (event) {
      event.setAttribute("transform", "scale(1)")
    })
    // telegram.setAttribute("viewBox", "0 0 " + 20 + " " + 20)
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)



formInputNone.value=selected.querySelectorAll('span')[1].innerText
selected.addEventListener('click', ()=> {
  optionContainer.classList.toggle('active');
  selected.classList.toggle('active')
});
optionList.forEach( o => {
  o.addEventListener('click', () => {

    selected.innerHTML = o.querySelector('label').innerHTML;
    formInputNone.value=selected.querySelectorAll('span')[1].innerText
    optionContainer.classList.remove('active');
    selected.classList.remove('active');
    telProgForm.innerText = selected.querySelectorAll('span')[1].innerText
  })
} )

const tellFormBlock = document.querySelectorAll('.form-block__input_tell');

tellFormBlock.forEach(function(event) {
  event.addEventListener('focus', ()=> {
      event.setAttribute('value','+7');

      console.log('ha');
    });
    event.addEventListener('blur', ()=> {
      event.removeAttribute('value','+7');

      console.log('ha');
    });
})

