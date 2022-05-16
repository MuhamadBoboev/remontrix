'use strict'
console.log(telegram)
// telegram.setAttribute("viewBox", "0 0 " + 60 + " " + 60)
// telegram.viewBox.animVal.width=50
// console.log(window.screen.width)
// let salom = window.screen.width

let salom = document.querySelector('#telegram');

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
