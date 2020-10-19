let signUp = document.getElementById('btn');
let form = document.forms[0];
let checkbox = document.getElementById('checkbox');
let photo = document.querySelector('.photo');
let info = document.querySelector('.info');
let cardContainer = document.querySelector('.container-card');
let btnSignOut = document.querySelector('.btn-sign-out');

checkbox.onchange = () =>{
    if(checkbox.checked) {
        signUp.disabled = false;
    }
    else {
        signUp.disabled = true;
    }    
}

let userName = "";
let userEmail = "";
let userQual = "";
let userSex = ""

form.btn.onclick = (event) => {
    event.preventDefault();
    for(let i=0; i < 3; i++) {
        if(form[i].value == ""){
            form[i].classList.add('error');
            userName = "";
            return;
        }
    }
    if(form[5].value == "none"){
        form[5].classList.add('error');
        return;
    } 

    //////////////////// USER CONTENT

    userName = `${form[0].value} ${form[1].value}`;
    userEmail = `${form[2].value}`;
    form[3].checked ? userSex = 'man' : userSex = 'woman';
    userQual = `${form[5].value}`;
    
    if(userSex == "man") {
        photo.style.backgroundImage = "url(img/man.png)"
    }
    else if(userSex == "woman") {
        photo.style.backgroundImage = "url(img/woman.png)"
    }
    info.children[0].textContent = userName;
    info.children[1].textContent = userEmail;
    info.children[2].textContent = userQual;

    //////// ANIMATION FORM

    document.querySelector('.container').style.marginTop = -1000 + 'px';
    cardContainer.style.display = "block";
    setTimeout(function(){
        cardContainer.style.zIndex = '1';
    }, 300)
    
}

/// ANIMATION ERROR

for(let i=0; i < 3; i++) {
    form[i].addEventListener('focus', function() {
        if(form[i].focus){
            form[i].classList.remove('error');
            return;
        }
    })
}
form[5].addEventListener('focus', function() {
    if(form[5].focus){
        form[5].classList.remove('error');
        return;
    }
})

/// SIGN OUT 

btnSignOut.addEventListener('click', function(){
    cardContainer.style.zIndex = '-1';
    setTimeout(function(){
        cardContainer.style.display = "none";
    },500);
    for(let i=0; i < 3; i++) {
        form[i].value = "";
    }
    form[3].checked = "true";
    form[5].value = "none";
    form[6].checked = 0;
    document.querySelector('.container').style.marginTop = 20 + 'px';
});






