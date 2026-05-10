function abrirDetalhes(nome, vol, desc, imgs) {
    const wrapper = document.getElementById('galleryWrapper');
    wrapper.innerHTML = ''; 

    // Adiciona a imagem no modal
    imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        wrapper.appendChild(img);
    });

    document.getElementById('mNome').innerText = nome;
    document.getElementById('mVol').innerText = vol;
    document.getElementById('mDesc').innerText = desc;
    
    // Configura o botão do WhatsApp
    document.getElementById('btnZap').onclick = () => {
        const msg = encodeURIComponent(`Olá! Quero saber sobre o perfume ${nome} de ${vol}.`);
        window.open(`https://wa.me/5588996828800?text=${msg}`);
    };

    document.getElementById('modalProduto').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharDetalhes() {
    document.getElementById('modalProduto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Slider Automático
let sPos = 0;
setInterval(() => {
    const s = document.getElementById('slider');
    if(s) {
        sPos = (sPos + 1) % 3;
        s.style.transform = `translateX(-${sPos * 33.33}%)`;
    }
}, 4000);

function compartilhar() {
    if (navigator.share) {
        navigator.share({ title: 'Fyna Essência', url: window.location.href });
    }
}
