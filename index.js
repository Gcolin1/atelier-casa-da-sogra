const inputs = document.querySelectorAll('.input')

handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

handleFocusOut = ({target}) => {
    if(target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));


function abrir(){
    var nav =  document.querySelector('.responsivo')
    nav.classList.add('menu-active')

    var btnAbrir =  document.querySelector('.abrir-menu');
    btnAbrir.style = 'display: none;'
   }

   
   function fechar(){
    var nav =  document.querySelector('.responsivo')
    nav.classList.remove('menu-active')

    var btnAbrir =  document.querySelector('.abrir-menu');
    btnAbrir.style = 'display: ; '
   }