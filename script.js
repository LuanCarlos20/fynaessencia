let currentGalIndex = 0;
let totalGalImages = 0;

// Abrir Detalhes do Produto com Galeria
function abrirDetalhes(nome, descricao, imagens) {
    const modal = document.getElementById('modalProduto');
    const wrapper = document.getElementById('galleryWrapper');
    
    wrapper.innerHTML = ''; // Limpa imagens antigas
    currentGalIndex = 0;
    totalGalImages = imagens.length;
    
    imagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        wrapper.appendChild(img);
    });

    wrapper.style.transform = `translateX(0)`;
    document.getElementById('modalNome').innerText = nome;
    document.getElementById('modalDesc').innerText = descricao;
    
    // Configura o botão do WhatsApp dinamicamente
    document.getElementById('btnZapModal').onclick = () => zap(nome);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function moveGal(dir) {
    const wrapper = document.getElementById('galleryWrapper');
    currentGalIndex = (currentGalIndex + dir + totalGalImages) % totalGalImages;
    wrapper.style.transform = `translateX(-${currentGalIndex * 100}%)`;
}

function fecharDetalhes() {
    document.getElementById('modalProduto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function zap(produto) {
    const numero = "5588996828800";
    const msg = encodeURIComponent(`Olá Fyna Essência! Tenho interesse no ${produto} (75ml 2.5 fl.oz). Está disponível?`);
    window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
}

// Slider Automático do Topo
let slideIdx = 0;
setInterval(() => {
    slideIdx = (slideIdx + 1) % 3;
    const slider = document.getElementById('slider');
    if(slider) slider.style.transform = `translateX(-${slideIdx * 33.33}%)`;
}, 4500);

// Compartilhar Site
function compartilhar() {
    if (navigator.share) {
        navigator.share({ title: 'Fyna Essência', url: window.location.href });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para partilhar!");
    }
}

// Fechar modal ao clicar fora da caixa
window.onclick = function(e) {
    if (e.target == document.getElementById('modalProduto')) fecharDetalhes();
}
