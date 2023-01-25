
const firebaseConfig = {
    apiKey: "AIzaSyAFVz0xbzZGXBAsImlJDMAwPw9bD2fkIrI",
    authDomain: "my-contactform-f8569.firebaseapp.com",
    databaseURL: "https://my-contactform-f8569-default-rtdb.firebaseio.com",
    projectId: "my-contactform-f8569",
    storageBucket: "my-contactform-f8569.appspot.com",
    messagingSenderId: "441496808646",
    appId: "1:441496808646:web:a12fbac4c0a0fe4088bbc7"
};

// Initialization
firebase.initializeApp(firebaseConfig);

let personalDetailFormDB = firebase.database().ref('personalDetailForm')

document.getElementById('detailForm').addEventListener('submit', submitForm = (e) => {
    e.preventDefault();

    let fName = getEleVal('firstName');
    let lName = getEleVal('lastName');
    let email = getEleVal('email');
    let phone = getEleVal('phone');
    let message = getEleVal('message');
    let storeGen = getGender();
    let storeSkill = getSkills();

    saveMessages(fName, lName, email, phone, message, storeGen, storeSkill);

    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 2000);

    setTimeout(() => {
        location.href = '/code/landing page/index.html';
    }, 3000);
    document.getElementById('login_signup').style.display = 'none';
});

const saveMessages = (fName, lName, email, phone, message, storeGen, storeSkill) => {
    let newDetailForm = personalDetailFormDB.push();

    newDetailForm.set({
        fName: fName,
        lName: lName,
        email: email,
        phone: phone,
        message: message,
        storeGen: storeGen,
        storeSkill: storeSkill
    })
}

const getEleVal = (id) => {
    return document.getElementById(id).value;
}

// Gender Function
let getGender = () => {
    let gender = document.getElementsByName('gender');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }
}


// Skills function
let getSkills = () => {
    let skills = document.getElementsByName('skill');
    let array = [];
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            array.push(skills[i].value);
        }
    }
    return array;
}

    console.log(getSkills());