import React from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"

import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

import vitoria from "../assets/confete.gif"

import "../css/reset.css"
import "../css/style.css" 

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let iniciou = false;
const imgForcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
let erros = 0;

export default function App() {
    const [palavra, setPalavra] = React.useState('');
    const [palavraEscolhida, setEscolhida] = React.useState('');
    const [clicado, setClicado] = React.useState([]);
    const [imgForca, setForca] = React.useState(imgForcas[erros]);
    const [ganhou, setVitoria] = React.useState(false);
    const [perdeu, setDerrota] = React.useState(false);
    const [fim, setFim] = React.useState(false);


    function clickBotao(){
        erros = 0;
        setFim(false);
        setPalavra('');
        setEscolhida('');
        setClicado([]);
        setForca(imgForcas[erros]);
        setVitoria(false);
        setDerrota(false);

        let elemento = palavras[Math.floor(Math.random() * palavras.length)];
        setEscolhida(elemento);
        let tamanho = elemento.length;
        let palavraInicial = '';
        for(let i = 0; i < tamanho; i++){
            palavraInicial = palavraInicial + '_'
        }
        setPalavra(palavraInicial);
        iniciou = true;
    }

    function clickLetra(letra){
        const addClick = [...clicado, letra];
        setClicado(addClick);
        if(palavraEscolhida.includes(letra)){
            let index = -2;
            let posicao = 0;
            let resultado = [];
            while(index != -1){
                index = palavraEscolhida.indexOf(letra, posicao);
                if(index >= 0 && !resultado.find((endereco) => endereco === index)){
                    resultado.push(index);
                }
                posicao += 1;
            }
            let palavraNova = [...palavra];

            for(let i = 0; i < resultado.length; i++){
                palavraNova[resultado[i]] = letra;
            }
            setPalavra(palavraNova)
            if(palavraNova.indexOf("_") === -1){
                setFim(true);
                setVitoria(true);
                setForca(vitoria);
            }
        }else{
            if(erros < 6){
                erros += 1;
            }
            setForca(imgForcas[erros]);
            if(erros >= 6){
                setDerrota(true);
                setFim(true);
            }
        }
    }
    return (
        <>
            <Jogo palavra={palavra} palavraEscolhida={palavraEscolhida} alfabeto={alfabeto} iniciou={iniciou} clickBotao={clickBotao} imagem={imgForca} vitoria={vitoria} ganhou={ganhou} perdeu={perdeu}/>
            <Letras alfabeto={alfabeto} iniciou={iniciou} clicado={clicado} clickLetra={clickLetra} fim={fim} />
        </>
    );
}
