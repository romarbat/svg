const svgs = document.querySelectorAll('svg');

let contador = 0;

document.addEventListener('click',function(){
    svgs[contador].style.display = 'none';
    contador = (contador + 1) % svgs.length;
    svgs[contador].style.display = 'block'
})