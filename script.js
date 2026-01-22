function showAlert() {
    alert("Obrigado pelo interesse! Em breve nossa equipe entrará em contato.");
}

// Efeito de mudar a cor da navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});