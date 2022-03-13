//projects --

var calculator = {nome:'calculator',detalhe:'First JS tutorial made.',imagem:'Assets/capa_calculator.png',link:'projects/calculator/calculator.html', grupo:'other'};

var cronometro = {nome:'cronometro',detalhe:'Project copied from a JS tutorial and improved with some DOM manipulation.',imagem:'Assets/capa_cronometro.png',link:'projects/cronometer/cronometro_1.html',grupo:'other'};

var parallax = {nome:'parallax',detalhe:'Project made to test a Front end tecnique. Not a big deal.',imagem:'Assets/capa_parallax.png',link:'projects/parallax/parallax.html',grupo:'other'};

var landingPage = {nome:'landingPage', detalhe:'A web site to colect information from clients and make some kind of selling or email send. Simple but necessaire',imagem:'Assets/capa_landpg.png',link:'projects/landingpage/landingpage.html',grupo:'other'};

var showProducts = {nome:'showProducts', detalhe:'A way to show diferent products and theirs characteristics',imagem:'Assets/capa_showproduct.png',link:'projects/showing_products_site/index.html',grupo:'other'};

var pokemonApi ={nome:'pokemonApi',detalhe:'My most complex project, an API full of DOM manipulation and organized in components (isnt responsive yet).',imagem:'Assets/capa_pokemonApi.jpg',link:'projects/2.1_API_pokemon/index.html',grupo:'main'}

//defining groups of projects 

var projects = [calculator, cronometro,parallax,landingPage,showProducts,pokemonApi];

var main = []
var other = []

var n = projects.length

for(i=0 ; i<n ; i++){
    if(projects[i].grupo=='main'){
        main.push(projects[i])
    }
    else if(projects[i].grupo=='other'){
        other.push(projects[i])
    }
}

// print the projects onload HTML page
function addBlock(objeto){

    if (objeto.grupo=='main'){
        local=".select_main_blocks";
    } else if (objeto.grupo=='other'){
        local=".select_other_blocks";
    }
    z1 = document.querySelector(local).innerHTML;
    z2 = '<div onclick="load_proj('+objeto.nome+')" class="block"><img src="'+objeto.imagem+'"> <p>'+objeto.nome+'</p></div>'; 

    document.querySelector(local).innerHTML = z1 + z2;
}
function loadBlock(){
    for(i=0;i<n;i++){
        addBlock(projects[i]);
    }
}

// select and show the project

function load_proj(objeto){
    document.querySelector('.project img').setAttribute('src',objeto.imagem);

    document.querySelector('.project a').setAttribute('href',objeto.link);

    document.querySelector('.project_info_name').innerText = objeto.nome;

    document.querySelector('.project_info_coments p').innerText = objeto.detalhe;

}

//change template
    var template = true

function change(){
    if (template==true){
        template = false;
        document.querySelector('.template').setAttribute('href','style_template2.css');        
    } else { template = true
        document.querySelector('.template').setAttribute('href','style_template.css');
    }



}



