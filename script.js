function zap(produto){

    const numero = "5588996828800";

    const mensagem = encodeURIComponent(
        `Olá Fyna Essência! Gostaria de saber mais sobre o perfume ${produto}.`
    );

    window.open(
        `https://wa.me/${numero}?text=${mensagem}`,
        '_blank'
    );
}

function compartilhar(){

    if(navigator.share){

        navigator.share({
            title:'Fyna Essência',
            text:'Confira os perfumes exclusivos da Fyna Essência!',
            url:window.location.href
        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert('Link copiado!');
    }
}
