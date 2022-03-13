


export const load_pokedex_info=()=>{

    var pokedex_info = document.createElement("main");
        pokedex_info.className ="pokedex_info";
        pokedex_info.style.display='none';


        var pokedex_header =document.createElement('div');
            pokedex_info.appendChild(pokedex_header);
            pokedex_header.className='pokedex_header';

            var pokedex_pokeName = document.createElement('h2');
                pokedex_header.appendChild(pokedex_pokeName);
                pokedex_pokeName.className='pokedex_pokeName';
                pokedex_pokeName.textContent='Pokemon Default Card';

            var pokedex_closeButton = document.createElement("button");
                pokedex_header.appendChild(pokedex_closeButton);
                pokedex_closeButton.textContent="X";
                pokedex_closeButton.className="pokedex_closeButton";
                pokedex_closeButton.setAttribute('onclick','close_pokedex()');

        var pokedex_main = document.createElement('div');
            pokedex_info.appendChild(pokedex_main);
            pokedex_main.className='pokedex_main';


            var pokedex_img = document.createElement('img');
                pokedex_img.className='pokedex_img';
                pokedex_main.appendChild(pokedex_img);
                
            var pokedex_pokeType = document.createElement('div');
                pokedex_main.appendChild(pokedex_pokeType);
                pokedex_pokeType.className='pokedex_pokeType';

                var pokedex_type1 =document.createElement('div');
                    pokedex_pokeType.appendChild(pokedex_type1);
                    pokedex_type1.textContent="type1"
                    
                    
                var pokedex_type2 =document.createElement('div');
                    pokedex_pokeType.appendChild(pokedex_type2);
                    pokedex_type2.textContent="type2"
                    
            
            




        return pokedex_info


    

}