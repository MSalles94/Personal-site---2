

//-------------------------------------------------

const poke_Url = id => `https://pokeapi.co/api/v2/pokemon/${id}`



setTimeout(()=>{load_poke_list();},1000)


//------------------------------------------------------
//--load buttons data--------------
 const load_poke_list=()=>{

    const list_size = 151;
    const poke_promise = [];

    for(i=1;i<=list_size;i++){
        poke_promise[i]=fetch(poke_Url(i))
            .then(response=>response.json())
    }

    Promise.all(poke_promise)
        .then(poke_list=>{
            create_pokeCards(poke_list);
            console.log(poke_list);
        })
            

}

function create_pokeCards(poke_list){

    const define_pokemonCard=(pokemon)=>{
        var pokeCard = document.createElement('div');
            pokeCard.className='pokeCard';
            pokeCard.setAttribute('onclick',`select_pokemon(${pokemon.id})`)

            var pokeCard_img = document.createElement('img');
                pokeCard_img.src=pokemon.sprites.front_default
                pokeCard.appendChild(pokeCard_img);

            var pokeCard_pokeName=document.createElement('p');
                pokeCard_pokeName.textContent = pokemon.name;
                pokeCard.appendChild(pokeCard_pokeName);


                return pokeCard
    }

    const define_guessPuzzel_pokeList=(pokemon)=>{
        var guessPuzzel_pokeName = document.createElement('p');
            guessPuzzel_pokeName.textContent = pokemon.name;
            guessPuzzel_pokeName.className='guessPuzzel_pokeName';
            guessPuzzel_pokeName.setAttribute('onclick',`anser_guessPuzzel('${pokemon.name}')`)
            return guessPuzzel_pokeName;
    }

    var x = poke_list.length-1
    for(i=1;i<=x;i++){
        document.querySelector('.pokeList').appendChild(define_pokemonCard(poke_list[i]));

        document.querySelector('.guessPuzzel_pokeList').appendChild(define_guessPuzzel_pokeList(poke_list[i]));
        
        console.log(i);
        
    }

}

//------------------------------------------------
//----pokedex----

const select_pokemon=(id)=>{

    document.querySelector('.pokedex_info').style.display='block'

        fetch(poke_Url(id))
         .then(response=>response.json())
             .then(pokemon=>{
                 atualize_pokedex(pokemon);
                 console.log(id);
                })

                const atualize_pokedex=(pokemon)=>{
                    document.querySelector('.pokedex_pokeName').textContent=pokemon.name
                    document.querySelector('.pokedex_img').src=pokemon.sprites.front_default
                    document.querySelectorAll('.pokedex_pokeType div')[0].textContent=pokemon.types[0].type.name

                    if(pokemon.types.length==1){
                        document.querySelectorAll('.pokedex_pokeType div')[1].style.display='none'
                    }else{
                        document.querySelectorAll('.pokedex_pokeType div')[1].style.display='block'
                        document.querySelectorAll('.pokedex_pokeType div')[1].textContent=pokemon.types[1].type.name
                    }

                    
                    
                }




}

const close_pokedex=()=>{
    document.querySelector('.pokedex_info').style.display = 'none'
}


//----------------------------------------------
// guessPuzzel_game

const close_guessPuzzel=()=>{
    document.querySelector('.guessPuzzel_game').style.display='none'
}

let guessPuzzel_pass = '---'

const open_guessPuzzel=()=>{
    document.querySelector('.guessPuzzel_game').style.display='block'

    y=document.querySelector('.guessPuzzel_mensage');
    y.textContent=`?`;
    y.style.fontSize='10em';


    document.querySelector('.guessPuzzel_block img').className='guessPuzzel_img'

    const poke_Url = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const random_id =()=>{return Math.round(Math.random()*150)} 

    fetch(poke_Url(random_id()))
        .then(response=>response.json())
            .then(pokemon=>{
                document.querySelector('.guessPuzzel_img').src=pokemon.sprites.front_default;
                guessPuzzel_pass=pokemon.name;                
            })
    

}

//maybe make the user write the anser => easy to code and save space

const anser_guessPuzzel=(x)=>{
    if(guessPuzzel_pass==x){
        document.querySelector('.guessPuzzel_block img').className='guessPuzzel_img_anser';

        y=document.querySelector('.guessPuzzel_mensage');
        y.textContent=`nice job. it´s ${x} !!!`;
        y.style.fontSize='2em';

    }else{
        console.log(`no, it is  ${guessPuzzel_pass}`);
        y=document.querySelector('.guessPuzzel_mensage');
        y.textContent=`try again...`;
        y.style.fontSize='3em';

    }
   
}








//-------------------------------------------------