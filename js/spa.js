const app = document.getElementById("app");

const pages = {
  home: `
    <h2>Bem-vindo à ONG Animais Feliz</h2>
    <p>Nosso objetivo é proteger e cuidar de animais abandonados.</p>
    <img src="img/animal1.jpg" alt="Animal feliz" style="max-width:300px; margin-top:15px;">
  `,
  projetos: `
    <h2>Projetos</h2>
    <ul>
      <li>Resgate de cães abandonados</li>
      <li>Campanhas de adoção</li>
      <li>Educação sobre cuidados animais</li>
    </ul>
    <img src="img/animal2.jpg" alt="Projeto de adoção" style="max-width:300px; margin-top:15px;">
  `,
  cadastro: `
    <h2>Cadastro de Voluntário</h2>
    <form id="formCadastro">
      <label>Nome:</label>
      <input type="text" id="nome" required>

      <label>Email:</label>
      <input type="email" id="email" required>

      <label>CPF:</label>
      <input type="text" id="cpf" required>

      <label>Telefone:</label>
      <input type="text" id="telefone" required>

      <label>Data de Nascimento:</label>
      <input type="date" id="dataNascimento" required>

      <label>CEP:</label>
      <input type="text" id="cep" required>

      <button type="submit">Cadastrar</button>
    </form>
    <p id="msg"></p>
  `
};

function navigate(page) {
  app.innerHTML = pages[page];

  if(page === "cadastro") {
    const form = document.getElementById("formCadastro");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", function(e){
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const cpf = document.getElementById("cpf").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const dataNascimento = document.getElementById("dataNascimento").value;
      const cep = document.getElementById("cep").value.trim();

      if(
        nome.length < 3 ||
        !email.includes("@") ||
        cpf.length < 11 ||
        telefone.length < 10 ||
        dataNascimento === "" ||
        cep.length < 8
      ){
        msg.textContent = "Preencha todos os campos corretamente!";
        msg.style.color = "red";
      } else {
        msg.textContent = "Cadastro realizado com sucesso!";
        msg.style.color = "green";
        form.reset();
      }
    });
  }
}

navigate("home");
