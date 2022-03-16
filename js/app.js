const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginBtnClick(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    const arrGreetings = ["Hello","Wellcome","Good day","Hey", "What's up"]
    const sayGreetings = arrGreetings[(Math.floor(Math.random()*arrGreetings.length))];
    greeting.innerText = `${sayGreetings} ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleLoginBtnClick);
}else{
    paintGreetings(savedUsername);
    
}