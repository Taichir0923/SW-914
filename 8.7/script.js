const button = document.querySelector('#btn');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const avatar = document.querySelector('#avatar');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const check = document.querySelectorAll('.check');

let users = [];

if(localStorage['users']){
    users = JSON.parse(localStorage['users']);
}

let validPassword = false;
let validForm = false;
let matchPasswrod = false;

password.addEventListener('input', function(){
    let regex = [/[a-z]/, /[A-Z]/, /\d/, /\W/, /.{8,}/];

    let passwordStrength = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(.{8,})/;
    if (passwordStrength.test(password.value)) {
        password.classList.remove('border-red-400')
        password.classList.add('border-green-400')
        validPassword = true;
    } else {
        password.classList.add('border-red-400')
        password.classList.remove('border-green-400')
        validPassword = false;
    }

    regex.forEach((el, index) => {
        if(el.test(password.value)){
            check[index].classList.add('text-gray-300');
            check[index].classList.add('line-through');
            check[index].classList.remove('text-red-300');
        } else {
            check[index].classList.add('text-red-300');
            check[index].classList.remove('text-gray-300');
            check[index].classList.remove('line-through');
        }
    })
})

passwordConfirm.addEventListener('input', () => {
    if(password.value === passwordConfirm.value){
        passwordConfirm.classList.remove('border-red-400')
        passwordConfirm.classList.add('border-green-400')
        matchPasswrod = true;
    } else {
        passwordConfirm.classList.add('border-red-400')
        passwordConfirm.classList.remove('border-green-400')
        matchPasswrod = false;
    }
})

button.addEventListener('click', function(e){
    e.preventDefault();

    if(fullname.value === ''){
        fullname.classList.add('border-red-400')
        validForm = false
    } else {
        fullname.classList.remove('border-red-400')
        validForm = true
    }

    if(email.value === ''){
        email.classList.add('border-red-400')
        validForm = false
    } else {
        email.classList.remove('border-red-400')
        validForm = true
    }

    if(avatar.value === ''){
        avatar.classList.add('border-red-400')
        validForm = false
    } else {
        avatar.classList.remove('border-red-400')
        validForm = true
    }

    if(number.value === ''){
        number.classList.add('border-red-400')
        validForm = false
    } else {
        number.classList.remove('border-red-400')
        validForm = true
    }

    if(password.value === ''){
        password.classList.add('border-red-400')
        validForm = false
    } else {
        password.classList.remove('border-red-400')
        validForm = true
    }

    if(passwordConfirm.value === ''){
        passwordConfirm.classList.add('border-red-400')
        validForm = false
    } else {
        passwordConfirm.classList.remove('border-red-400')
        validForm = true
    }

    if(validPassword && validForm && matchPasswrod){
        let user = {
            fullname: fullname.value,
            email: email.value,
            avatar: avatar.value,
            number: number.value,
            password: password.value,
            id: parseInt(Math.random().toString().split('.')[1])
        }
        users.push(user)
        // console.log(users);
        localStorage.setItem('users', JSON.stringify(users));
        resetForm();
    } else {
        alert('Алдаа гарлаа')
    }
});

function resetForm(){
    fullname.value = '';
    email.value = '',
    avatar.value = '',
    number.value = null,
    password.value = '',
    passwordConfirm.value = ''
}


// let arr = [5,7,8,3,1,5,3,6,5];

// arr.forEach(function(ehnii, second){
//     console.log(ehnii , second);
// })
// JSON - JavaScript Object Notation