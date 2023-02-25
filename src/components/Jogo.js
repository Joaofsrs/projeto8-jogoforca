import imagem from "../assets/forca6.png"

export default function Jogo() {
    return (
        <div class="forca">
            <img src={imagem} alt="imagem da forca" />
            <div class="forca-esquerda">
                <button> Escolher Palavra </button>
                <div class="palavra">
                    <p class="">q__ren_en_</p>
                </div>
            </div>
        </div>
    );
}