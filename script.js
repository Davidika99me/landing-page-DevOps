const form = document.getElementById('formContato');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Captura os valores dos campos
    const formData = {
        nome: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        mensagem: form.querySelector('textarea').value
    };

    const btn = form.querySelector('button');
    btn.innerText = "Enviando...";

    try {
        const response = await fetch('http://localhost:3000/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso e salva no banco!");
            form.reset();
        } else {
            alert("Erro ao enviar mensagem.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("O servidor está offline ou ocorreu um erro de conexão.");
    } finally {
        btn.innerText = "Enviar Mensagem";
    }
});