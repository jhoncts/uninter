// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar os valores dos inputs
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples
    if(nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode implementar o envio dos dados para um servidor ou serviço de email

    alert("Mensagem enviada com sucesso!");
    // Limpar o formulário
    document.getElementById('contact-form').reset();
});
