var burger = document.getElementsByClassName('burguer')[0];
var bar1 = document.getElementsByClassName('up')[0];
var bar2 = document.getElementsByClassName('mid')[0];
var bar3 = document.getElementsByClassName('down')[0];
var link = document.getElementsByClassName('link')[0];

burger.addEventListener('click', swap);

function swap(){
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
    link.classList.toggle('active');
}