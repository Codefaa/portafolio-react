import './Menu.css'

function Menu( props ) {


    return(
        
        <div>
            <i onClick={props.handleAbrirMenu} className={`bi bi-list ${props.abrirMenu ? 'bi bi-x-circle-fill' : 'bi bi-list'}`}></i>
        </div>
    )
}

export default Menu;