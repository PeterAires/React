function Saudacao({nome}){

    function GerarSaudacao(algumnome){
        return`ola ${algumnome} tudo bem?`
    }

    return(
        <>
        {nome &&<p>{GerarSaudacao(nome)}</p>}
        </>
    )
}
export default Saudacao