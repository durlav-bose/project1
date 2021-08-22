const head=document.querySelector(".header__head");
const menu=document.querySelector(".header__menu");
const navbar = document.querySelector(".header__right--img");
const headerCross=document.querySelector(".header__item--cross");


navbar.addEventListener("click",()=>{
    head.classList.add("header__head--active");
    menu.classList.add("header__menu--active");
})

headerCross.addEventListener("click",()=>{
    head.classList.remove("header__head--active");
    menu.classList.remove("header__menu--active");
})




const images = document.querySelectorAll(".gallery__img");
const modal = document.querySelector(".gallery__modal");
const caption =document.querySelector(".gallery__modal--caption");
const imageContent = document.querySelector(".gallery__modal--img");

const cross = document.querySelector(".gallery__modal--cross");

images.forEach(image => {
    image.addEventListener("click",()=>{
        modal.style.display="block";
        caption.innerHTML = image.alt;
        imageContent.src=image.src;
    })

    
})

cross.addEventListener('click',()=>{
    modal.style.display="none";
})









//=======================form===================================


const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if (usernameValue===""){
        setErrorFor(username,"Username cannot be blank");
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue===""){
        setErrorFor(email,"email cannot be blank");
    }else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}


    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}



    if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input,message){

    const formControl = input.parentElement;
    const small=formControl.querySelector("small");

    small.innerText=message;

    formControl.className= "form__control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className= "form__control success";
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





//============slider===================


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 8000,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: false,
      padding: '10%',
      throttle: 300,
      breakpoints: {
        1440: {
          perPage: 1,
          padding: '30%'
        }
      }
    }).mount();
  });
  