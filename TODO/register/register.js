uniqID = function () { return '_' + Math.random().toString(36). substr(2, 9);
};
collection = document.querySelectorAll ('input')
RegButton = document.querySelector ('button')
function handleForm(event) {
    event.preventDefault();
    let user =  { 
        userID : uniqID(),
        login : UserLogin.value,
        password: UserPassword.value,
        firstName : UserFirstName.value,
        lastName: UserLastName.value,     
    }

    const localUser = JSON.parse(localStorage.getItem('user'));
    console.log(localUser)
    if (!localStorage.getItem("user")) {
        localStorage.setItem('user', JSON.stringify(user))
        user = {}
        window.location.href = '../TO DO/todo.html'
    }   
    else {
        alert ("Вы уже Зарегестрировались,Перейдите во вкладку входа")
    }
    
    // window.location.href = '../login/login.html'
    //  console.log( user );
} 
