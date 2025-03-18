function toggleContent(button) {
    const content = button.nextElementSibling; // Seleciona o próximo elemento (div.content)
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Mostra o conteúdo
        button.querySelector('i').classList.remove('fa-chevron-down');
        button.querySelector('i').classList.add('fa-chevron-up'); // Muda o ícone para cima
    } else {
        content.style.display = "none"; // Esconde o conteúdo
        button.querySelector('i').classList.remove('fa-chevron-up');
        button.querySelector('i').classList.add('fa-chevron-down'); // Muda o ícone para baixo
    }
}