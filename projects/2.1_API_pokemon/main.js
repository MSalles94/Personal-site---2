import {load_header} from './component/main_header/main_header.js'
import {load_pokeList} from './component/main_pokeList/main_pokeList.js'
import {load_pokedex_info} from './component/pokedex_info/pokedex_info.js'
import {load_guessPuzzel_game} from './component/guessPuzzel_game/guessPuzzel_game.js'




document.querySelector('.root').appendChild(load_header())

document.querySelector('.root').appendChild(load_pokedex_info())

document.querySelector('.root').appendChild(load_guessPuzzel_game())

document.querySelector('.root').appendChild(load_pokeList())

