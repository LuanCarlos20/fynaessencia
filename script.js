// Banco de dados das fotos extras para as setas
const galeriaImagens = {
    'view1': [
        "https://leloynparfums.com.br/cdn/shop/files/dd1d1c0b7eb1de1168a15fedf935517e.jpg?v=1769533438&width=1600",
        "https://leloynparfums.com.br/cdn/shop/files/a8e26ac3947f1fce74ed6bfd0bf2f84f.jpg?v=1769533440&width=1600"
    ],
    'view2': [
        "https://leloynparfums.com.br/cdn/shop/files/PRODUTOSLELOYN-2024-08-12T112002.454.png?v=1769565701&width=832",
        "https://leloynparfums.com.br/cdn/shop/files/PRODUTOSLELOYN-2024-08-12T111811.132.png?v=1769565704&width=832"
    ]
};

function moverGaleria(id, direcao) {
    const imgElemento = document.getElementById(id);
    const lista = galeriaImagens[id];
    if (!lista) return;

    let index = lista.indexOf(imgElemento.src);
    index = (index + direcao + lista.length) % lista.length;
    imgElemento.src = lista[index];
}

// Slider Banner
let currentSlide = 0;
setInterval(() => {
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    currentSlide = (currentSlide + 1) % 3;
    if (slider) slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}, 4000);

// Zoom
function abrirZoom(el) {
    const m = document.getElementById('modalZoom');
    document.getElementById('imgZoom').src = el.src;
    m.classList.add('active');
}
function fecharZoom() { document.getElementById('modalZoom').classList.remove('active'); }

// WhatsApp
function zap(prod) {
    window.open(`https://wa.me/5588996828800?text=Olá! Tenho interesse no perfume ${prod}.`);
}

// Compartilhar
function compartilhar() {
    if (navigator.share) navigator.share({ title: 'Fyna Essência', url: window.location.href });
}
