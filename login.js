const loginForm = document.querySelector("#form-login");
const loginInput = document.querySelector("#userName");
const userDiv = document.querySelector("#userDiv");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

const HIDDEN_CLASSNAME="hidden";

function onSubmitEvent(event){
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    greeting.innerText = username;
    userDiv.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("userName", username);
}

function logoutEvent(event){
    event.preventDefault();
    localStorage.setItem("userName", null);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    userDiv.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onSubmitEvent);

logoutBtn.addEventListener("click",logoutEvent);

const savedUserName = localStorage.getItem("userName");

if (savedUserName !== null && savedUserName!=='null') {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = savedUserName;
    userDiv.classList.remove(HIDDEN_CLASSNAME);
}