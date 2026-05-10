let currentGalIndex = 0;
let totalGalImages = 0;

function abrirDetalhes(nome, descricao, imagens) {
    const modal = document.getElementById('modalProduto');
    const wrapper = document.getElementById('galleryWrapper');
    
    wrapper.innerHTML = '';
    currentGalIndex = 0;
    totalGalImages = imagens.length;
    
    imagens.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        wrapper.appendChild(img);
    });

    wrapper.style.transform = `translateX(0)`;
    document.getElementById('modalNome').innerText = nome;
    document.getElementById('modalDesc').innerText = descricao;
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
    const msg = encodeURIComponent(`Olá Fyna Essência! Tenho interesse no ${produto} (75ml 2.5 fl.oz). Está disponível?`);
    window.open(`https://wa.me/5588996828800?text=${msg}`, '_blank');
}

// Slider principal
let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    const s = document.getElementById('slider');
    if(s) s.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}, 4000);

function compartilhar() {
    if (navigator.share) {
        navigator.share({ title: 'Fyna Essência', url: window.location.href });
    }
}
