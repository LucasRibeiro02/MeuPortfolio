const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const projectSlider = document.getElementById("projectSlider");
const slides = document.querySelectorAll(".project-slide");
const nextBtn = document.querySelector(".slider-arrow-right");
const prevBtn = document.querySelector(".slider-arrow-left");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateSlider() {
    projectSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });
});

/* Mover os projetos para os lados apenas no celular */
let touchStartX = 0;
let touchEndX = 0;

function isMobile() {
    return window.innerWidth <= 768;
}

projectSlider.addEventListener("touchstart", (e) => {
    if (!isMobile()) return;
    touchStartX = e.changedTouches[0].screenX;
});

projectSlider.addEventListener("touchend", (e) => {
    if (!isMobile()) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 50;

    if (swipeDistance < -minSwipeDistance) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    } else if (swipeDistance > minSwipeDistance) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
};
(function(){
    emailjs.init("l9f_ZUc81FUnI13UO");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_a3fq083", "template_0jo71xt", this)
        .then(function() {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        }, function(error) {
            alert("Erro ao enviar. Tente novamente.");
            console.log(error);
        });
});

const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalGallery = document.getElementById("modalGallery");

const projectGalleries = {
    veiculos: {
        title: "Controle de Veículos",
        subtitle: "Mais telas do aplicativo",
        images: [
            "controleDeVeiculo5.png",
            "controleDeVeiculo4.png",
            "controleDeVeiculo3.png",
            "controleDeVeiculo6.png"
        ]
    },

    compras: {
        title: "Automação de Aprovação de Compras",
        subtitle: "Fluxo automatizado com Power Automate e Microsoft Teams",
        images: [
            "aprovacao5.png",
            "aprovacao6.png",
            "aprovacao7.png",
            "aprovacao1.png",
            "aprovacao2.png",
            "aprovacao3.png",
            "aprovacao4.png"
        ]
    },

    chamados: {
        title: "Gestão de Chamados",
        subtitle: "Telas e detalhes do sistema",
        images: [
            "img/chamados-1.png",
            "img/chamados-2.png",
            "img/chamados-3.png"
        ]
    }
};

function openProjectModal(element) {
    const projectKey = element.dataset.project;
    const project = projectGalleries[projectKey];

    if (!project) return;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalGallery.innerHTML = "";

    project.images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${project.title} - imagem ${index + 1}`;
        modalGallery.appendChild(img);
    });

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeProjectModal();
    }
});

function toggleTexto() {
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btn = document.getElementById("btnLerMais");

    let isHidden = window.getComputedStyle(maisTexto).display === "none";

    if (isHidden) {
        maisTexto.style.display = "inline";
        pontos.style.display = "none";
        btn.innerHTML = "Ler menos";
    } else {
        maisTexto.style.display = "none";
        pontos.style.display = "inline";
        btn.innerHTML = "Ler mais";
    }
}
