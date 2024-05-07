import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
return(
    <>
        <li>{marca} - {ano_lancamento}</li>
    </>
)
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca:'faltou a marca',
    ano_lancamento:'nao foi informado'
}

export default Item