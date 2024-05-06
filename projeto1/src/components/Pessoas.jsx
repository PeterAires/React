function Pessoas({nome, idade, profissao, foto}){
return(
    <>
    <img src={foto} alt={nome} />
    <h2>nome {nome}</h2>
    <p>idade: {idade}</p>
    <p> profissao {profissao}</p>
    </>
)
}
export default Pessoas