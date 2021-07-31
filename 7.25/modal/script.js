const modal = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.btn__open');

btnOpen.onclick = function(){
    modal.classList.add('open')
};

document.addEventListener('click', function(e){
    if(e.target.id === 'close' || e.target.classList.contains('backdrop')){
        modal.classList.remove('open');
    };
});

document.addEventListener('keydown', function(e){
    if(e.keyCode === 27){
        modal.classList.remove('open');
    }
})