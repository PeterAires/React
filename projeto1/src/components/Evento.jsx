function Evento(){
    function MeuEvento(){
        console.log('opa, fui ativado')
    }

    return(
    <>
    <p>Clicke para disparar um evento</p>
    <button onClick={MeuEvento}>Ativar</button>
    </>
)
}
export default Evento