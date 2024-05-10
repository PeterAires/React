import Button from "./Button"
function Evento(){
    function MeuEvento(){
        console.log('Primeiro Evento')
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return(
    <>
    <p>Clicke para disparar um evento</p>
    <Button event={MeuEvento} text='Primeiro Evento'/>
    <Button event={segundoEvento} text='Segundo Evento'/>
    
    </>
)
}
export default Evento