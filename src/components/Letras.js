export default function Letras(props) {
    return(
        <div className="teclas">
            <div className="teclado">
                {props.alfabeto.map((letra) => 
                (<Botao key={letra} fim={props.fim} letra={letra} selecionado={props.iniciou} clicado={props.clicado} clickLetra={props.clickLetra} />)
                )}
            </div>
        </div>
    );
}

function Botao(props){
    return (
        <>
            <button onClick={() => props.clickLetra(props.letra)} disabled={(props.fim || (!(props.selecionado && !props.clicado.find( find => props.letra === find))))} className={(props.selecionado && !props.clicado.find( find => props.letra === find)) ? ((props.fim) ? 'achado' : '') : 'achado'} >{props.letra.toUpperCase()}</button>
        </>
    );
}