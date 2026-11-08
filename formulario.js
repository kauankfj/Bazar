
const formulario = document.getElementById("atendimento");

formulario.addEventListener("submit", function(event) {

    // Impede a página de atualizar
    event.preventDefault();

    // Captura os dados preenchidos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servicos").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const observacao = document.getElementById("mensagens").value;

    // Formata a data
    const dataFormatada = data.split("-").reverse().join("/");

    // Monta a mensagem
    const mensagem = 
`Olá! Gostaria de solicitar um agendamento.

*Nome:* ${nome}
*WhatsApp:* ${telefone}
*Serviço:* ${servico}
*Data:* ${dataFormatada}
*Horário:* ${horario}
*Observação:* ${observacao || "Nenhuma"}

Aguardo a confirmação do agendamento!`;

    // Número do WhatsApp do Bazar
    const numeroBazar = "5511992458904";

    // Cria o link do WhatsApp
    const link = `https://wa.me/${numeroBazar}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.open(link, "_blank");

});
