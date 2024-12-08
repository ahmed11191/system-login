var signUp =  document.querySelector(".signup");
var userName = document.querySelector(".userName");
var userEmail = document.querySelector(".userEmail");
var userPass = document.querySelector(".userPass");

function isUserValid() {
  return (
    isValid(userName, regexName) && 
    isValid(userEmail, regexEmail) &&
    isValid(userPass, regexPass)
  );
}

function clear(nameInput, emailInput, passwordInput) {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


function isEmailExist(users, newUser) {
  return users.some((user) => (user.email == newUser.email  ? true : false));
}

function showAlert(message){
    Swal.fire({
        title: message,
        icon: "success"
      });
}




signUp.addEventListener("click",function() {
  if (isUserValid()) {
    var user = createUser(userName, userEmail, userPass);
    if (!isEmailExist(allUsers, user)) {
      allUsers.push(user);
      setStorage("users", allUsers);
      showAlert("User Saved Successfully")
      clear(userName, userEmail, userPass);
    }else{
        showAlert("Email already exist, please try with another email");
    }
  } else {
    showAlert("Invalid Data")
  }
});


