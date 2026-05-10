let currentSlide = 0;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

// Slider Automático
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    if (slider) slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
}, 4000);

// Abrir Modal de Detalhes
function abrirDetalhes(nome, descricao, imagem) {
    const modal = document.getElementById('modalProduto');
    document.getElementById('modalNome').innerText = nome;
    document.getElementById('modalDesc').innerText = descricao;
    document.getElementById('modalImg').src = imagem;
    
    // Configura o botão do WhatsApp
    document.getElementById('btnZapModal').onclick = function() {
        zap(nome);
    };

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function fecharDetalhes() {
    document.getElementById('modalProduto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modalProduto');
    if (event.target == modal) fecharDetalhes();
}

// WhatsApp
function zap(produto) {
    const numero = "5588996828800";
    const mensagem = encodeURIComponent(`Olá Fyna Essência! Quero saber mais sobre o perfume: ${produto}.`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

// Compartilhar
function compartilhar() {
    if (navigator.share) {
        navigator.share({
            title: 'Fyna Essência',
            text: 'Confira este catálogo de perfumes incrível!',
            url: window.location.href
        });
    } else {
        alert('Link copiado!');
        navigator.clipboard.writeText(window.location.href);
    }
}
