
const span = document.getElementById("digitando");
const palavras = ["front-end.", "back-end.", "designer.", "analista."];
const padrao = "fullstack.";
let indexPalavra = 0;
let indexLetra = 0;
let escrevendo = true;
let loopCount = 0;
const maxLoops = 1;

function digitar() {
    const palavraAtual = palavras[indexPalavra];

    if (escrevendo) {
        span.textContent = palavraAtual.slice(0, ++indexLetra);
        if (indexLetra === palavraAtual.length) {
            escrevendo = false;
            setTimeout(digitar, 600);
        } else {
            setTimeout(digitar, 100);
        }
    } else {
        span.textContent = palavraAtual.slice(0, --indexLetra);
        if (indexLetra === 0) {
            escrevendo = true;
            indexPalavra = (indexPalavra + 1) % palavras.length;
            loopCount++;
            if (loopCount >= maxLoops * palavras.length) {
                setTimeout(() => {
                    escreverPadrao(padrao);
                }, 500);
                return;
            }
            setTimeout(digitar, 300);
        } else {
            setTimeout(digitar, 30);
        }
    }
}

function escreverPadrao(palavra) {
    let i = 0;
    const intervalo = setInterval(() => {
        span.textContent = palavra.slice(0, ++i);
        if (i === palavra.length) {
            clearInterval(intervalo);
        }
    }, 100);
}

setTimeout(digitar, 1000);




//carrossel de habilidades
const wrapper = document.querySelector('.card-habilidade-wrapper');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

const scrollAmount = 320;

btnLeft.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});



//animacao de revelar o site ao scrollar

const sections = document.querySelectorAll('.content-section');

function revealOnScroll() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);




//modo escuro e modo claro
const interruptor = document.getElementById('interruptor');
const toggleButton = document.querySelector('.toggle-dark-light');
const lbutton = document.querySelector('.carousel-btn.left');
const rbutton = document.querySelector('.carousel-btn.right');
const headerLinks = document.querySelectorAll('.header-link');
const headerContainer = document.querySelector('.header');
const digitando = document.querySelector('.digitando');
const container = document.querySelector('body');
const icon = interruptor.querySelector('i');
const contact = document.querySelectorAll('.contact-link');
const footer = document.querySelector('.footer-container');
const habCard = document.querySelectorAll('.card-habilidade');

interruptor.addEventListener('click', () => {
    lbutton.classList.toggle('left-light');
    rbutton.classList.toggle('right-light');
    footer.classList.toggle('light-on-footer');
    toggleButton.classList.toggle('active');
    headerContainer.classList.toggle('light-on');
    container.classList.toggle('light-on-body');

    habCard.forEach(card => {
        card.classList.toggle('light-on-body');
    });

    headerLinks.forEach(link => {
        link.classList.toggle('light-general');
    });

    contact.forEach(contact => {
        contact.classList.toggle('light-general');
    });

    if (container.classList.contains('light-on-body')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

const sectionIdentifier = document.querySelectorAll('section');
const links = document.querySelectorAll('.header-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Remove classes anteriores dos links
                links.forEach(link => {
                    link.classList.remove('home', 'sobre-mim', 'habilidades', 'projetos');
                });

                // Adiciona a nova classe correspondente à seção atual
                const activeLink = document.querySelector(`.header-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add(sectionId);
                }
            }
        });
    },
    {
        threshold: 0.6,
    }
);

// Observa cada seção com o novo nome da constante
sectionIdentifier.forEach(section => {
    observer.observe(section);
});



