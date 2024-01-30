import './Proyecto.css'
import coffee from '../Imagenes/coffee.png'
import quote from '../Imagenes/quote.png'
import markdown from '../Imagenes/markdown.png'
import drummachine from '../Imagenes/drummachine.png'
import calculadora from '../Imagenes/calculadora.png'
import clock from '../Imagenes/clock.png'

function Proyecto( {id} ) {

    return(
        <section id={id} className='ancho proyecto'>
            <h1 className='etiqueta-abrir'>proyecto</h1>
            <p>Si puedes imaginarlo, puedes programarlo.</p>
            <div className="proyecto-carta">
                <div className="carta">
                    <img className='carta-imagen' src={coffee} alt="coffee" />
                    <div className='carta-contenido'>
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Coffee</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Coffee</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={quote} alt="quote" />
                    <div className='carta-contenido'>
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Quote</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Quote</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={markdown} alt="markdown" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Markdown</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Markdown</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={drummachine} alt="drummachine" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Drum Machine</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Drum Machine</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                   <img className='carta-imagen' src={calculadora} alt="calculadora" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Calculator</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Calculator</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={clock} alt="clock" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>Clock</h3>
                        <h5 className='carta-parrafo'>Descripcion de la aplicacion Clock</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>               
            </div>
            <p><a className='codepen-enlace' href="https://codepen.io/Codefaa/pens/public" target='_blank'>Ver mas...</a></p>
            <p className='etiqueta-cerrar'>proyecto</p>
        </section>
    )
}

export default Proyecto;