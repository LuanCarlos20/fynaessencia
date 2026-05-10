let currentIdx = 0;
let totalImgs = 0;

// Agora a função aceita NOME, VOLUMETRIA, DESCRIÇÃO e IMAGENS
function abrirDetalhes(nome, vol, desc, imgs) {
    const wrapper = document.getElementById('galleryWrapper');
    wrapper.innerHTML = ''; 
    totalImgs = imgs.length;
    currentIdx = 0;

    imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        wrapper.appendChild(img);
    });

    wrapper.style.transform = `translateX(0)`;
    document.getElementById('mNome').innerText = nome;
    document.getElementById('mVol').innerText = vol; // Coloca a volumetria certa
    document.getElementById('mDesc').innerText = desc;
    
    document.getElementById('btnZap').onclick = () => {
        const msg = encodeURIComponent(`Olá! Tenho interesse no perfume ${nome} de ${vol}. Está disponível?`);
        window.open(`https://wa.me/5588996828800?text=${msg}`);
    };

    document.getElementById('modalProduto').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function moveSlide(dir) {
    const wrapper = document.getElementById('galleryWrapper');
    currentIdx = (currentIdx + dir + totalImgs) % totalImgs;
    wrapper.style.transform = `translateX(-${currentIdx * 100}%)`;
}

function fecharDetalhes() {
    document.getElementById('modalProduto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Slider Automático do Topo
let sPos = 0;
setInterval(() => {
    sPos = (sPos + 1) % 3;
    const s = document.getElementById('slider');
    if(s) s.style.transform = `translateX(-${sPos * 33.33}%)`;
}, 4000);

function compartilhar() {
    if (navigator.share) {
        navigator.share({ 
            title: 'Fyna Essência', 
            text: 'Confira nosso catálogo de perfumes de luxo!',
            url: window.location.href 
        });
    }
}
