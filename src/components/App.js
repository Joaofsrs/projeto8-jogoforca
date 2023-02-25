import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"

import "../css/reset.css"
import "../css/style.css" 

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const iniciou = false;

export default function App() {
    console.log(iniciou);
    return (
        <>
            <Jogo palavras={palavras} Alfabeto={alfabeto} iniciou={iniciou} />
            <Letras Alfabeto={alfabeto} iniciou={iniciou} />
        </>
    );
}
