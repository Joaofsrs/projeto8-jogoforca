import imagem from "../assets/forca6.png"
import  React from "react"

export default function Jogo(props) {
    const [palavra, setPalavra] = React.useState('');
    function clickBotao(){
        let elemento = props.palavras[Math.floor(Math.random() * props.palavras.length)];
        let tamanho = elemento.length;
        let palavraInicial = '';
        for(let i = 0; i < tamanho; i++){
            palavraInicial = palavraInicial + '_'
        }
        console.log(elemento)
        setPalavra(palavraInicial);
    }

    return (
        <div className="forca">
            <img src={imagem} alt="imagem da forca" />
            <div className="forca-esquerda">
                <button onClick={() => clickBotao()}> Escolher Palavra </button>
                <div className="palavra">
                    <p className="">{palavra}</p>
                </div>
            </div>
        </div>
    );
}