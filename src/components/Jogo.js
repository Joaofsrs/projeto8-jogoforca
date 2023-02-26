export default function Jogo(props) {
    return (
        <div className="forca">
            <img data-test="game-image" src={props.imagem} alt="imagem da forca" />
            <div className="forca-esquerda">
                <button data-test="choose-word" onClick={props.clickBotao}> Escolher Palavra </button>
                <div className="palavra">
                    <p data-teste="word" className={(props.ganhou) ? "verde": ((props.perdeu) ? "vermelho" : "")}>{(props.perdeu) ? props.palavraEscolhida : props.palavra}</p>
                </div>
            </div>
        </div>
    );
}