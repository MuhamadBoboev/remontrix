const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')


popupLinks.forEach(function(e){
  e.addEventListener('click', function(){
    let headerBlock = document.querySelector('.header-container');
    let html = document.documentElement;
    // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    let marginSize = window.innerWidth - html.clientWidth

    body.style.paddingRight =  marginSize + 'px';
    headerBlock.style.marginLeft = 18 + 'px';
    headerBlock.style.marginRight = 18 + 'px';
    body.style.overflow='hidden';
    popup.classList.add('open');

    // closePopup = document.querySelector('.close-popup');

    popup.addEventListener('click', function(){
      popup.classList.remove('open');
      body.style.overflow='auto';
      body.style.paddingRight= 0+'px';

    })

    // closePopup.addEventListener('click', function(){
    //   popup.classList.remove('open');
    //   body.style.overflow='hidden';
    // })

  })
})

// popupLinks.addEventListener('click', function(){
//   let headerBlock = document.querySelector('.header-container');
//   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//   body.style.paddingRight =  lockPaddingValue;
//   headerBlock.style.marginLeft = 18 + 'px';
//   headerBlock.style.marginRight = 18 + 'px';
//   body.style.overflow='hidden';
//   popup.classList.add('open');

//   closePopup = document.querySelector('.close-popup');

//   popup.addEventListener('click', function(){
//     popup.classList.remove('open');
//     body.style.overflow='auto';
//     body.style.paddingRight= 0+'px';

//   })

//   closePopup.addEventListener('click', function(){
//     popup.classList.remove('open');
//     body.style.overflow='hidden';
//   })

// })
