let login = document.getElementById('login');
let signup = document.getElementById('signup');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

let left_right = () => {
    login.style.right = '3rem';
    signup.style.left = '-36rem';
    img1.style.opacity = '0';
    img1.style.transform = 'translate(0rem, -45rem)';
    img2.style.opacity = '1';
    img2.style.transform = "translate(-32rem, -40rem)";
}

let right_left = () => {
    login.style.right = '-35rem';
    signup.style.left = '0rem';
    img1.style.opacity = '1';
    img1.style.transform = 'translate(0, 0)';
    img2.style.opacity = '0';
    img2.style.transform = 'translate(-32rem, 5rem)';
}


let sgPword = document.getElementById('Sgpassword');
let lgPword = document.getElementById('Lgpassword');
let view = document.getElementById('view');

let show = () => {
    if(sgPword.type == 'password'){
        sgPword.type = 'text';
        lgPword.type = 'text';
        view.style.opacity = '1';
    }else {
        sgPword.type = 'password';
        lgPword.type = 'password';
        view.style.opacity = '.5';
    }
}
