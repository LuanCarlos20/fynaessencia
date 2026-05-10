let currentIdx = 0;
let totalImgs = 0;

function abrirDetalhes(nome, vol, desc, imgs) {
    const wrapper = document.getElementById('galleryWrapper');
    wrapper.innerHTML = ''; 
    totalImgs = imgs.length;
    currentIdx = 0;

    // Criar as imagens dentro da galeria
    imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        wrapper.appendChild(img);
    });

    // Resetar posição da galeria
    wrapper.style.transform = `translateX(0)`;

    // Esconder setas se só houver uma imagem
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.style.display = totalImgs > 1 ? 'flex' : 'none');

    document.getElementById('mNome').innerText = nome;
    document.getElementById('mVol').innerText = vol;
    document.getElementById('mDesc').innerText = desc;
    
    document.getElementById('btnZap').onclick = () => {
        const msg = encodeURIComponent(`Olá! Quero saber sobre o perfume ${nome} de ${vol}.`);
        window.open(`https://wa.me/5588996828800?text=${msg}`);
    };

    document.getElementById('modalProduto').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// FUNÇÃO PARA PASSAR AS IMAGENS NO MODAL
function moveSlide(dir) {
    const wrapper = document.getElementById('galleryWrapper');
    if (totalImgs > 1) {
        currentIdx = (currentIdx + dir + totalImgs) % totalImgs;
        wrapper.style.transform = `translateX(-${currentIdx * 100}%)`;
    }
}

function fecharDetalhes() {
    document.getElementById('modalProduto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Slider Automático do Topo (Banner)
let sPos = 0;
setInterval(() => {
    const s = document.getElementById('slider');
    if(s) {
        sPos = (sPos + 1) % 3;
        s.style.transform = `translateX(-${sPos * 33.33}%)`;
    }
}, 4000);
