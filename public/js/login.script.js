const loginCall     = document.getElementById("loginCall");
const normalHead    = document.querySelector(".normalHead");
const hideLogin     = document.querySelector(".hideLogin");
const loginForm     = document.getElementById("loginForm");
const nomInp        = document.getElementById("nomInp");
const pwdInp        = document.getElementById("pwdInp");

loginCall.addEventListener("click", showLogin);
loginForm.addEventListener("submit", function (form) {
    form.preventDefault();
});

function showLogin () {
    loginCall.disabled = true;
    normalHead.className = "";
    normalHead.classList.add('fadingHead');
    setTimeout(() => {
        hideLogin.className = "";
        hideLogin.classList.add('showLogin');
        normalHead.className = "";
        normalHead.classList.add("goneHead");
    }, 1500);
}

function validateInputs () {

}


