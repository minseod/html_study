const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener( "click" , dat);
$popup.addEventListener ("click" , tomato);

const $footer = document.querySelector("footer");
$footer.addEventListener( "click" , bo);

const $subMenu12= document.querySelector("nav li:first-child a:last-child");

const $subMenu24= document.querySelector("#blue");
$subMenu24.addEventListener("click" , blue); 

const $subMenu41= document.querySelector("#green");





function dat() {
    $popup.style.display = 'none';
}

function bo() {
    $popup.style.display = 'block';
}

function red() {
    $subMenu12.style.background = 'red';
}

function blue() {
    $subMenu24.style.background = 'blue'; 
}

function green() {
    $subMenu41.style.color = 'green'; 
    $subMenu41.style.textDecoration = 'none';
}

function tomato() {
    $popup.style.background = 'tomato';
}
