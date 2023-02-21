let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    failureIcon = classes("failure-icon"),
    successIcon = classes("success-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate(username, 0, "Username cannot be blank");
    validate(email, 1, "Email cannot be blank");
    validate(password, 2, "Password cannot be blank");
})

let validate = (id, index, message) => {

    if(id.value.trim() === "") {
        errorMsg[index].innerHTML = message;
        failureIcon[index].style.opacity = "1";
        successIcon[index].style.opacity = "0";
    } else {
        errorMsg[index].innerHTML = "";
        failureIcon[index].style.opacity = "0";
        successIcon[index].style.opacity = "1";
    }

}