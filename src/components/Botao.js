export default function Botao(props){
    return (
        <>
            <button  disabled={props.selecionado ? 'false' : 'true'} className={props.selecionado ? '""' : 'achado'} >{props.letra.toUpperCase()}</button>
        </>
    );
}