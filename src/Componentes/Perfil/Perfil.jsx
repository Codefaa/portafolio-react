import './Perfil.css'
import perfil from '../../Imagenes/perfil.webp'
import { useTranslation } from 'react-i18next';

function Perfil( {id} ) {

    const { t } = useTranslation();
 
    return(
        <section id={id} className='perfil-seccion ancho '>

            <figure className='perfil-figure'>
                <img className='perfil-foto' src={perfil} alt="perfil" />
            </figure>

            <div className='perfil-datos'>
                <h1 className='perfil-nombre'>{t("perfil.nombre")} <span className='manito'>👋</span></h1>
                <h2 className='perfil-carrera'>{t("perfil.carrera")}</h2>
                <p className='perfil-descripcion'>{t("perfil.descripcion")}</p>
                <nav className='footer-enlaces'>
                    <a className='footer-link' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noopener noreferrer" data-texto="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a className='footer-link' href="https://github.com/Codefaa" target='_blank' rel="noopener noreferrer" data-texto="GitHub"><i className="bi bi-github"></i></a>
                    <a className='footer-link' href="https://drive.google.com/file/d/1qXx3FdsZLtImfOgoTSg-MEEhL7BVbdYW/view?usp=sharing" target='_blank' rel="noopener noreferrer" data-texto="CV"><i className="bi bi-file-person-fill"></i></a>
                </nav>
            </div>

        </section>
    )
}

export default Perfil;