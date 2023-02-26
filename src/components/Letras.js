export default function Letras(props) {
    return(
        <div className="teclas">
            <div className="teclado">
                {props.alfabeto.map((letra) => 
                (<Botao letra={letra} selecionado={props.iniciou} clicado={props.clicado} clickLetra={props.clickLetra} />)
                )}
            </div>
        </div>
    );
}

function Botao(props){
    return (
        <>
            <button onClick={() => props.clickLetra(props.letra)}  /*disabled={(props.selecionado && !props.clicado.find( find => props.letra === find)) ? 'false' : 'true'}*/ className={(props.selecionado && !props.clicado.find( find => props.letra === find)) ? '""' : 'achado'} >{props.letra.toUpperCase()}</button>
        </>
    );
}