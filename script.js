let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', function(){
    let value = window.scrollY
    text.style.marginTop = value  +'px'
    leaf.style.left = value *1 +"px"
    leaf.style.top = value *-1 +"px"
    hill1.style.top = value * -0.2 +"px"
    hill1.style.top = value * 0.2 +"px"
    hill4.style.left = value* -0.5+'px'
    hill5.style.left = value* 0.5+'px'
})