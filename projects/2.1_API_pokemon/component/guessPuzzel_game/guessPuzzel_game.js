


export const load_guessPuzzel_game =()=>{

    var guessPuzzel_game = document.createElement('section')
        guessPuzzel_game.className='guessPuzzel_game'
        guessPuzzel_game.style.display='none'

        var guessPuzzel_header = document.createElement('menu')
            guessPuzzel_game.appendChild(guessPuzzel_header)
            guessPuzzel_header.className='guessPuzzel_header'


            var guessPuzzel_startButton=document.createElement('button')
                guessPuzzel_header.appendChild(guessPuzzel_startButton)
                guessPuzzel_startButton.textContent="again"
                guessPuzzel_startButton.className='guessPuzzel_startButton'
                guessPuzzel_startButton.setAttribute('onclick','open_guessPuzzel()')

            var guessPuzzel_title = document.createElement('h3')
                guessPuzzel_header.appendChild(guessPuzzel_title)
                guessPuzzel_title.className='guessPuzzel_title'
                guessPuzzel_title.textContent="Who's that pokemon?"

            var guessPuzzel_closeButton=document.createElement('button')
                guessPuzzel_header.appendChild(guessPuzzel_closeButton)
                guessPuzzel_closeButton.textContent='X'
                guessPuzzel_closeButton.setAttribute('onclick','close_guessPuzzel()')

                

        var guessPuzzel_main = document.createElement('div')
            guessPuzzel_game.appendChild(guessPuzzel_main)
            guessPuzzel_main.className='guessPuzzel_main'

            var guessPuzzel_display =document.createElement('div')
                guessPuzzel_main.appendChild(guessPuzzel_display)
                guessPuzzel_display.className='guessPuzzel_display'

                var guessPuzzel_block=document.createElement('div')
                    guessPuzzel_display.appendChild(guessPuzzel_block)
                    guessPuzzel_block.className='guessPuzzel_block'

                var guessPuzzel_mensage=document.createElement('div')
                    guessPuzzel_display.appendChild(guessPuzzel_mensage)
                    guessPuzzel_mensage.textContent="?"
                    guessPuzzel_mensage.className='guessPuzzel_mensage'


                    var guessPuzzel_img =document.createElement('img')
                        guessPuzzel_block.appendChild(guessPuzzel_img)
                        guessPuzzel_img.className='guessPuzzel_img'

                var guessPuzzel_pokeList = document.createElement('div')
                    guessPuzzel_main.appendChild(guessPuzzel_pokeList)
                    guessPuzzel_pokeList.className='guessPuzzel_pokeList'
                
            




    return guessPuzzel_game
}


