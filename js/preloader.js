window.addEventListener("load", function() {
    // Aguarde 2 segundos antes de ocultar o loader e exibir o conteúdo principal
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        const mainContent = document.getElementById("main-content");
        mainContent.classList.remove("hidden");
        mainContent.classList.add("show");
    }, 2000); // 2000ms (2 segundos) é o tempo de espera para o preloader
});