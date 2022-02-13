


var info = {nome:'',sex:'',tec:'',email:''}


function submit(){


    info.nome = document.querySelector('.name').value;

    info.email = document.querySelector('.email').value;

    y = document.getElementsByName('sex')
    for(i=0;i<=1;i++){
        if (y[i].checked == true){
             info.sex = y[i].value;
            }
    }

    y = document.getElementsByName('tec');
    n = y.length;
    var z =[]
    for(i=0;i<n;i++){
        if(y[i].checked==true){
            z.push(y[i].value);  
            }
        }
        info.tec = z
        console.log(info)

        if (info.nome=='Full name'||info.email=='e-mail'||info.sex==''||info.tec.length==0){
            alert('It lacks information')
        } else{
            a='Name :'+info.nome;
            b='/sex :'+info.sex;
            c='/known tec :'+info.tec;
            d='/e-mail :'+info.email;
            e= a+', ' +b+', '+', '+c+', '+d

            alert(e)
        }

    }

