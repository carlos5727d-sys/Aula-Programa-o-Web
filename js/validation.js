// Máscaras de input
function maskCPF(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function maskPhone(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function maskCEP(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2");
}


// Aplica máscaras
document.getElementById("cpf").addEventListener("input", e => {
    e.target.value = maskCPF(e.target.value);
});
document.getElementById("telefone").addEventListener("input", e => {
    e.target.value = maskPhone(e.target.value);
});
document.getElementById("cep").addEventListener("input", e => {
    e.target.value = maskCEP(e.target.value);
});


// Validação do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const cep = document.getElementById("cep").value;

    if(nome.length < 3){
        showMessage("error", "Nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if(!email.includes("@")){
        showMessage("error", "E-mail inválido.");
        return;
    }

    if(cpf.length < 14){
        showMessage("error", "CPF inválido.");
        return;
    }

    if(telefone.length < 14){
        showMessage("error", "Telefone inválido.");
        return;
    }

    if(cep.length < 9){
        showMessage("error", "CEP inválido.");
        return;
    }

    showMessage("success", "Cadastro realizado com sucesso!");
    this.reset();
});
