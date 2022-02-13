// definição de variáveis

var primavera = {
    nome:'primavera',
    tempo:'22/09 - 21/12',
    detalhe:'Reflorescimento da flora, temperatura amena, aumento da umidade do ar, dias longos e noites curtas',
    imagem:'Assets/primavera.jpg'
};

var verao = {
    nome:'verao',
    tempo:'21/12 - 20/03',
    detalhe:'temperatura alta, dias longos e noites curtas',
    imagem:'Assets/verao.jpg'
};

var outono = {
    nome:'outono',
    tempo:'20/03 - 21/06',
    detalhe:'dias curtos e noites longas, nevoeiros pela manhã, diminuição da umidade do ar, perda da folhagem',
    imagem:'Assets/outono.jpg'
};

var inverno = {
    nome:'inverno',
    tempo:'21/06 - 22/09',
    detalhe:' baixa temperatura, noites longas, chuvas em clima temperado, baixa umidade em clima tropical',
    imagem:'Assets/inverno.jpg'
};

// funções

var x;

function seletor(x) {
    
    document.querySelector('.info_estacao').innerHTML = 'Estação : '+x.nome;
    
    document.querySelector('.info_data').innerHTML = 'Intervalo : '+x.tempo;

    document.querySelector('.info_detalhe').innerHTML = 'Detalhes : '+ x.detalhe;

    console.log(x.imagem)

    var img = document.querySelector('img');
    img.setAttribute('src',x.imagem)


}

