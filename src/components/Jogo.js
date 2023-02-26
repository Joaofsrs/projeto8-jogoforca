export default function Jogo(props) {
    return (
        <div className="forca">
            <img src={props.imagem} alt="imagem da forca" />
            <div className="forca-esquerda">
                <button onClick={props.clickBotao}> Escolher Palavra </button>
                <div className="palavra">
                    <p className={(props.ganhou) ? "verde": ((props.perdeu) ? "vermelho" : "")}>{(props.perdeu) ? props.palavraEscolhida : props.palavra}</p>
                </div>
            </div>
        </div>
    );
}