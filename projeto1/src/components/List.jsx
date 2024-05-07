import Item from "./Item"

function List(){
    return(
        <>
        <ul>
            <Item marca='Ferrari' ano_lancamento={1998}/>
            <Item marca='sandero' ano_lancamento={2021}/>
            <Item ano_lancamento={2017}/>
            <Item marca='Mustang' />
        </ul>
        </>
)
}
export default List