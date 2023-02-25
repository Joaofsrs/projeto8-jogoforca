import Botao from "./Botao"

export default function Letras(props) {
    console.log(props.Alfabeto)
    return(
        <div className="teclas">
            <div className="teclado">
                {props.Alfabeto.map((letra) => (<Botao letra={letra} selecionado={props.iniciou} />))}
            </div>
        </div>
    );
}