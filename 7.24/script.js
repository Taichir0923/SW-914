// DOM - Document Oriented Programming
//  querySelector('.class') ('#id')
// querySelectorAll('')


// document.getElementsByClassName

// document.querySelectorAll
const pTag = document.querySelectorAll('.text');

function changeColor(){
    for(let i = 0; i < pTag.length; i++){
        pTag[i].classList.toggle('mod');
        if(i === 1){
            pTag[i].style.backgroundColor = 'yellow';
        }

    }
    
    // pTag[1].style.backgroundColor = 'white';
}


// background-color: #fff;
// backgroundColor

// css - grid-template-columns

// js - gridTemplateColumns


// onchange, oninput
// onclick, ondblclick

// 1. 5sh p tag uusge
// 2. function uusgeed, 5 p Tagiin styluudiig oorchil