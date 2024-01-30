import './Contacto.css'

function Contacto( {id} ) {

    return (
        <div id={id} className='ancho contacto'>
            <h1 className='etiqueta-abrir'>contacto</h1>
            <p>Mi bandeja de entrada está siempre abierta para consultas, proyectos o si simplemente querés pasar a saludar. ¡Te responderé lo antes posible! <span className='manito'>👋</span></p>
            <p>Podes escribirme en: <a className='email' href='#' target='_blak'>facundogarcia1999@outlook.com</a></p>
            <p className='etiqueta-cerrar'>contacto</p>
        </div>
    )
}

export default Contacto;