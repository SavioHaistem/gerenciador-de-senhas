// valores que o usuário digitou 
let KeyInput = window.document.getElementById("password"); // input da senha
let AssignInput = window.document.getElementById("assign-Input"); // input da empresa
let EmailInput = window.document.getElementById("email-Input"); // input de email
let SearchBarAssigned = window.document.getElementById("searchBarAssigned"); // input de pesquisa de Empresa
let SearchBarEmail = window.document.getElementById("searchBarEmail") // input de pesquisa de Email


var database = [ localStorage ] // todas as senhas

// Esta parte do código esta responsável por buscar os valores que o usuário digitou 
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
    let assigned = getAssigned().toUpperCase(); 

    if (assigned.length == 0 || password.length == 0 || email.length == 0) {
        window.alert("para registrar sua senha preencha todos os campos")
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

        if ( searchedAssign.length == 0 || searchedEmail.length == 0) {  
            
            window.alert("Para realizar a pesquisa adicione o email e a empresa que sua senha foi cadastrada")
            
        } else {
            
            var KeySearched = JSON.parse(localStorage.getItem(`${searchedAssign} de ${searchedEmail}`));
            document.querySelector(".KeyName").innerHTML = `empresa: ${KeySearched.Assigned}`
            document.querySelector(".KeyPassword").innerHTML = 'senha: ' + KeySearched.Password
            document.querySelector(".KeyEmail").innerHTML = 'email: ' +KeySearched.Email
            
            setTimeout(() => {
                let  ListResult = window.document.getElementById("Hidden")
                ListResult.removeAttribute("id","Hidden")
                ListResult.setAttribute("id","Anim")
            }, 1);
            setTimeout(() => {
                let ListResultEndAnimation = window.document.getElementById("Anim")
                ListResultEndAnimation.setAttribute("id","ShowTwo")
            }, 1000);
            setTimeout(() => {
                let  ListResultClose = window.document.getElementById("ShowTwo")
                ListResultClose.setAttribute("id","Hidden")
            }, 8000);
        }
}

