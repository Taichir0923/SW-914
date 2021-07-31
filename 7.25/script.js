// const boxes = document.querySelectorAll('.box');

// function changeBg(){
//     for(let i = 0; i < boxes.length; i++){
//         if(i % 2 === 1){
//             boxes[i].style.backgroundColor = '#ff0';
//         } else {
//             boxes[i].style.backgroundColor = '#ff0000';
//         }
//     }
//     // console.log('jk')
// }

// querySelectorAll => [htmlTags, htmlTags];
// <tag attribute>  box.id, box.className

// boxes.forEach(function(box){
//     box.onclick = function(){
//         removeActiveClasses();
//         box.classList.add('active');
//     }
// });

// function removeActiveClasses(){
//     boxes.forEach(function(box){
//         box.classList.remove('active');
//     })
// }

// DOM Eents 

// addEventListener => click, dblclick, mouseover, keydown, mousedown
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     console.log('clicked') // background ongo solih
//     document.body.classList.add('yellow')
// })
const boxes = document.querySelectorAll('.box'); // arr
const modal = document.querySelector('.modal')

boxes.forEach(function(box, index) {
    box.addEventListener('click', function(){
        let url = box.style.backgroundImage.split('"')[1];
        modal.classList.remove('hidden');
        modal.children[0].children[1].children[0].src = url;
    })
})

document.addEventListener('click', function(e){
    if(e.target.id === 'closeBtn'){
        modal.classList.add('hidden')
    }
})

// 