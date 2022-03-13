

export const load_header=()=>{

    var main_header = document.createElement('header');

        var main_header_title =document.createElement('h1');
            main_header_title.textContent ='POKEDEX';
            main_header.appendChild(main_header_title);
        var main_header_menu =document.createElement('menu')
            main_header.appendChild(main_header_menu)

            var header_guessPuzzel_button = document.createElement('div')
                main_header.appendChild(header_guessPuzzel_button)
                header_guessPuzzel_button.textContent="who's that pokemon?"
                header_guessPuzzel_button.className = 'header_guessPuzzel_button'
                header_guessPuzzel_button.setAttribute('onclick','open_guessPuzzel()')
    
    return main_header;

}