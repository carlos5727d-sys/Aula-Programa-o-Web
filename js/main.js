// SPA básica — troca de seção sem recarregar página
function navigateTo(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.style.display = "none");

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = "block";
    }
}

// Feedback ao usuário
function showMessage(type, message) {
    const box = document.createElement("div");
    box.className = `alert ${type}`; // success, error, warning
    box.innerText = message;

    document.body.appendChild(box);

    setTimeout(() => box.remove(), 3000);
}
