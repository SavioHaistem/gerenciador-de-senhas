// valores que o usuário digitou 
let KeyInput = window.document.getElementById("password"); // input da senha
let AssignInput = window.document.getElementById("assign-Input"); // input da empresa
let EmailInput = window.document.getElementById("email-Input"); // input de email
let SearchBarAssigned = window.document.getElementById("searchBarAssigned"); // input de pesquisa de Empresa
let SearchBarEmail = window.document.getElementById("searchBarEmail") // input de pesquisa de Email
let ButtonSearch = window.document.getElementById("searchButton") // input de botão de pesquisar
var database = [ localStorage ] // todas as senhas



// Esta parte do código esta responsável por buscar os valores que o usuário digitou 
const getPassword = () => {
   let Password = KeyInput.value;
   return Password
};
const getAssigned = () => {
    let Assigned = AssignInput.value ;
    return Assigned
};
const getEmail = () => {
    let email = EmailInput.value;
    return email
};
const getSearchAssigned = () => {
    let Research = SearchBarAssigned.value;
    return Research
};
const getSerachEmail = () => {
    let ResearchEmail = SearchBarEmail.value;
    return ResearchEmail
}

//Esta parte do código é responsável por guardar a senha que o usuário digitou no local storage 
const putLogin = () => {
    
    let email = getEmail();
    let password = getPassword();
    let assigned = getAssigned(); 

    if ( email || password || assigned == "" ) {
        window.alert("Não deixe nenhum campo em branco")
    } else {
        localStorage.setItem(`${assigned} de ${email}`, JSON.stringify( new Key(password, email, assigned)))
    }
     
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

function Research(searchedAssign ,searchedEmail) {
    var KeySearched = JSON.parse(localStorage.getItem(`${searchedAssign} de ${searchedEmail}`));
    document.querySelector(".KeyName").innerHTML = `senha ${KeySearched.Assigned}:`
    document.querySelector(".KeyPassword").innerHTML = KeySearched.Password
    document.querySelector(".KeyEmail").innerHTML = KeySearched.Email
}
