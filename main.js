// valores que o usuário digitou 
let KeyInput = window.document.getElementById("password"); // input da senha
let AssignInput = window.document.getElementById("assign-Input"); // input da empresa
let EmailInput = window.document.getElementById("email-Input"); // input de email
let SearchBar = window.document.getElementById("searchBar"); // input de pesquisa
let ButtonSearch = window.document.getElementById("searchButton") // input de botão de pesquisar
var database = [ localStorage ]



// Esta parte do código esta responsável por buscar os valores que o usuário digitou 
const getPassword = () => {
   let Password = KeyInput.value;
   return Password
};
const getAssigned = () => {
    let Assigned = AssignInput.value.toUpperCase() ;
    return Assigned
};
const getEmail = () => {
    let email = EmailInput.value;
    return email
};
const getSearch = () => {
    let Research = SearchBar.value;
    return Research.toUpperCase()
};


//Esta parte do código é responsável por guardar a senha que o usuário digitou no local storage 
const putLogin = () => {
    let email = getEmail();
    let password = getPassword();
    let assigned = getAssigned();
   
    localStorage.setItem(`${assigned} de ${email}`, JSON.stringify( new Key(password, email, assigned))) 
}

        //modelo de chave que será usado para guardar a senha do usuário        

class Key {
    constructor( Password, Email, Assigned ) {
        this.Password = Password;
        this.Email = Email;
        this.Assigned = Assigned
    }
}

//Esta parte do código é usado para mostrar a senha que o usuário pesquisar

function Research(item) {
    var KeySearched = JSON.parse(localStorage.getItem(`${item}`));
    document.querySelector(".KeyName").innerHTML = `senha ${KeySearched.Assigned.toLowerCase()}:`
    document.querySelector(".KeyPassword").innerHTML = KeySearched.Password
    document.querySelector(".KeyEmail").innerHTML = KeySearched.Email
}
