// definição de variáveis 

var b_start ={nome:'Play',funcao:'start()'};
var b_parar ={nome:'Stop',funcao:'parar()'};
var b_reset ={nome:'Reset',funcao:'reset()'};
var b_apontar ={nome:'Register',funcao:'apontar()'};

var registro =[]


var hh = '0';
var mm = '0';
var ss = '0';

var tempo = 1000; // 1000 = 1seg
var cron ;

var display ='00:00:00';

var i = 0;

// funções 


function start (){
    cron = setInterval(timer,tempo);
    if (display == '00:00:00'){
        document.querySelector('.b2').style.display = 'block';
        changeButton('.b1',b_apontar);
        changeButton('.b2',b_parar);
    } else {
        changeButton('.b1',b_apontar);
        changeButton('.b2',b_parar);
    }
}

function parar() {
    clearInterval(cron);
    changeButton('.b1',b_reset);
    changeButton('.b2',b_start);
}

function reset() {
    clearInterval(cron);
    document.querySelector('.display').innerText = '00:00:00';
    hh = '0';
    mm = '0';
    ss = '0';
    display = '00:00:00'
    changeButton('.b1',b_start);
    document.querySelector('.b2').style.display = 'none';
    i=0;
    document.querySelector('.register').innerHTML =''
}


function apontar(){
    if (i<9){
        i++;
        registro[i] ='<p>'+ i + 'º - ' + display + '</p>';
        z = document.querySelector('.register').innerHTML;
        z = z + registro[i];
        document.querySelector('.register').innerHTML = z;
    } else if (i==9){
        i++;
        z = document.querySelector('.register').innerHTML;  
        z = z + '<p>'+ i + 'º - ' + display + '</p>';
        z = z +'<p> - limite de registro - </p>';
        document.querySelector('.register').innerHTML = z;  
    } else {
        i=1;
        registro[i] ='<p>'+ i + 'º - ' + display + '</p>';
        z = registro[i];
        document.querySelector('.register').innerHTML = z;

    }
            

    
}


function timer() {
    ss++;
    if(ss==60){
        ss=0;
        mm++;
        if (mm==60){
            mm=0;
            hh++;
        }
    }
    display = (hh < 10 ? '0'+ hh : hh) + ':'+(mm < 10 ? '0' + mm : mm) + ':' +(ss < 10 ? '0' + ss : ss);
    console.log(display)
    document.querySelector('.display').innerText = display;
}

function changeButton(x,y){
    document.querySelector(x).innerText = y.nome;
    document.querySelector(x).setAttribute('onclick',y.funcao);
}