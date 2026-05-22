const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // VALIDAR EMAIL
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {

        mensagem.innerHTML = "Email inválido!";
        return;

    }

    // VALIDAR SENHA
    // letra + número + caractere especial + 8 caracteres
    const regexSenha =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if (!regexSenha.test(senha)) {

        mensagem.innerHTML =
        "Senha fraca! Use letra, número e caractere especial.";
        return;
    }

    // JSON
    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    console.log("JSON enviado:");
    console.log(JSON.stringify(dados));

    mensagem.innerHTML =
    "Enviando para servidor...";

    // SIMULAÇÃO ASSÍNCRONA DO SERVIDOR
    await simularServidor(dados);

});

// FUNÇÃO QUE SIMULA O PHP/SERVIDOR
function simularServidor(dados) {

    return new Promise((resolve) => {

        console.log("Servidor recebeu:");
        console.log(dados);

        // TEMPO DE 10 SEGUNDOS
        setTimeout(() => {

            mensagem.innerHTML =
            "Cadastro realizado com sucesso!";

            // REDIRECIONA
            window.location.href =
            "sucesso.html";

            resolve();

        }, 10000);

    });

}