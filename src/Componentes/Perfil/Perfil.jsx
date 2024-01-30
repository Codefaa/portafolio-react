import './Perfil.css'
import perfil from '../Imagenes/perfil.jpg'

function Perfil( {id} ) {

    return(
        <section id={id} className='ancho perfil'>
            <div className='foto'>
                <img className='foto-perfil' src={perfil} alt="perfil" />
            </div>
            <div className='perfil-datos'>
                <h1>Soy Facundo Garcia <span className='manito'>👋</span></h1>
                <h2>Ingeniero en Sistemas</h2>
                <p>Nacido en <small>🇦🇷</small> Argentina y viviendo en Buenos Aires, en busca de nuevos desafíos y experiencias.</p>
                <div className='contacto-enlaces'>
                    <a className='link' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' data-texto="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a className='link' href="https://github.com/Codefaa" target='_blank' data-texto="GitHub"><i className="bi bi-github"></i></a>
                    <a className='link' href="https://drive.google.com/file/d/1Q-__h3wF8XzF1fcFg8mXic1jkZCEvu9r/view?usp=drive_link" target='_blank' data-texto="CV"><i className="bi bi-file-person-fill"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Perfil;