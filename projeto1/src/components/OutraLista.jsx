function OutraLista({itens}){
    return(
        <>
        <h3>Lista de coisas boas:</h3>
        { itens.length > 0 ? (
            itens.map((itens, index) => (
                <p key={index}>{itens}</p>
            )))
            : (
                <p>nao ha itens na lista</p>
            )
        }

        </>
    )
}
//criamos um map em cada um dos itens,,, esse indez ai em cima é para evitar um erro, bassicamente uma gambiarra para atribuir um id para cada item (o que nao é o recomendado)
export default OutraLista