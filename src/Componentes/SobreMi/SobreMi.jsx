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


function SobreMi( {id} ) {

    return(
        <section id={id} className='ancho sobre-mi'>
            <h1 className='etiqueta-abrir'>sobre mi</h1>
            <p>Estudiante de Ingeniería en Sistemas con título intermedio en Analista en Sistemas.También estoy haciendo cursos autodidactas para convertirme en desarrollador web.</p>
            <p>Mi viaje en la informática comenzó en la universidad, donde exploré C, C#, y Python, junto con SQL Server para proyectos de base de datos. En FreeCodeCamp, obtuve certificados en desarrollo web, abarcando HTML, CSS, JavaScript, React y mas...</p>
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
            <p className='etiqueta-cerrar'>sobre mi</p>
        </section>
    )
}

export default SobreMi;