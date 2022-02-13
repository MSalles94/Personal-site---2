
function insert(x){
var num = document.getElementById('display').innerHTML;
document.getElementById('display').innerHTML = num + x;
}

function wash(){
    document.getElementById('display').innerHTML = ''
}

function back(){
    var num = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = num.substring(0,num.length-1);
}

function do_it(){
    var dps = document.getElementById('display').innerHTML;
    if(dps){
        x = eval(dps);
        document.getElementById('display').innerHTML = x;


    }else{document.getElementById('display').innerHTML = 'ERROR';}
}