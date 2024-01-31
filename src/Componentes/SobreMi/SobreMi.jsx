import './SobreMi.css'
import html from '../Imagenes/html.png'
import css from '../Imagenes/css.png'
import js from '../Imagenes/js.png'
import react from '../Imagenes/react.png'
import bootstrap from '../Imagenes/bootstrap.png'
import sass from '../Imagenes/sass.png'
import csharp from '../Imagenes/csharp.png'
import python from '../Imagenes/python.png'
import sql from '../Imagenes/sql.png'
import { useTranslation } from 'react-i18next'


function SobreMi( {id} ) {

    const { t } = useTranslation();

    return(
        <section id={id} className='ancho sobre-mi'>
            <h1 className='etiqueta-abrir'>{t("header.sobremi")}</h1>
            <p>{t("sobremi.sobremiparrafo1")}</p>
            <p>{t("sobremi.sobremiparrafo2")}</p>
            <div className='habilidades'>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={html} alt="html" />
                    <h3 className='habilidades-titulo'>HTML</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={css} alt="css" />
                    <h3 className='habilidades-titulo'>CSS</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={js} alt="js" />
                    <h3 className='habilidades-titulo'>JavaScript</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={react} alt="react" />
                    <h3 className='habilidades-titulo'>React</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={bootstrap} alt="bootstrap" />
                    <h3 className='habilidades-titulo'>Bootstrap</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={sass} alt="sass" />
                    <h3 className='habilidades-titulo'>Sass</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={csharp} alt="csharp" />
                    <h3 className='habilidades-titulo'>C#</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={python} alt="python" />
                    <h3 className='habilidades-titulo'>Python</h3>
                </div>
                <div className="habilidades-card">
                    <img className='habilidades-imagen' src={sql} alt="sql" />
                    <h3 className='habilidades-titulo'>SQL Server</h3>
                </div>
            </div>
            <p className='etiqueta-cerrar'>{t("header.sobremi")}</p>
        </section>
    )
}

export default SobreMi;