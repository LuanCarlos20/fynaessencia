let currentSlide = 0;
const totalSlides = 3;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

// Slider Automático
setInterval(() => {
    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (slider) slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
}, 4000);

// Troca de Fotos Galeria
function trocar(id, url) {
    const principal = document.getElementById(id);
    if (principal) principal.src = url;
}

// Funções de Zoom
function abrirZoom(elementoImg) {
    const modal = document.getElementById('modalZoom');
    const imgZoom = document.getElementById('imgZoom');
    if (modal && imgZoom) {
        imgZoom.src = elementoImg.src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fecharZoom() {
    const modal = document.getElementById('modalZoom');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// WhatsApp
function zap(produto) {
    const numero = "5588996828800";
    const mensagem = encodeURIComponent(`Olá Fyna Essência! Gostaria de saber mais sobre o ${produto}.`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

// Função de Compartilhar
function compartilhar() {
    if (navigator.share) {
        navigator.share({
            title: 'Fyna Essência | Catálogo',
            text: 'Confira as fragrâncias exclusivas da Fyna Essência!',
            url: window.location.href
        })
        .catch((error) => console.log('Erro ao compartilhar', error));
    } else {
        alert('Copiado para a área de transferência!');
        navigator.clipboard.writeText(window.location.href);
    }
}
