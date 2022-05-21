'use strict'
const telProgForm = document.querySelector('[data-prog');
const formInputNone = document.querySelector('.form-block__input-none')
const selected = document.querySelector('.form-block__selected');
const optionContainer = document.querySelector('.form-block__options-container');
const optionList = document.querySelectorAll('.form-block__option');

let salom = document.querySelector('#telegram');


const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    document.querySelectorAll('.header__icon').forEach(function (event) {
      event.setAttribute("transform", "scale(1.6)")
    })

  } else {
    document.querySelectorAll('.header__icon').forEach(function (event) {
      event.setAttribute("transform", "scale(1)")
    })
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)



formInputNone.value=selected.querySelectorAll('span')[1].innerText;

selected.addEventListener('click', ()=> {
  optionContainer.classList.toggle('active');
  selected.classList.toggle('active')
});

optionList.forEach( o => {
  o.addEventListener('click', () => {
    let selectedCope = selected.innerHTML;
    selected.innerHTML = o.querySelector('label').innerHTML;
    o.querySelector('label').innerHTML= selectedCope;
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

