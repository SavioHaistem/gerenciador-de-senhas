let KeyInput = window.document.getElementById("password");
let AssignInput = window.document.getElementById("assign-Input"); 
let EmailInput = window.document.getElementById("email-Input");


const getPassword = () => {
   let Password = KeyInput.value;
   return Password
};
const getAssigned = () => {
    let Assigned = AssignInput.value;
    return Assigned
};
const getEmail = () => {
    let email = EmailInput.value;
    return email
};


const putLogin = () => {
    let email = getEmail();
    let Password = getPassword();
    let Assigned = getAssigned();
   
    localStorage.setItem(`${Assigned}`, JSON.stringify( new Key(Password, email, Assigned))) 
}

class Key{
    constructor(Password, Email, Assigned) {
        this.Password = Password;
        this.Email = Email;
        this.Assigned = Assigned
    }
}

const show = (name) => {
    return JSON.parse(localStorage.getItem(`${name}`))
}