import './Proyecto.css'
import coffee from '../Imagenes/coffee.png'
import commerce  from '../Imagenes/e-commerce.png'
import commerceMern from '../Imagenes/e-commerce-mern.png'
import peliculas from '../Imagenes/peliculas-app.png'
import markdown from '../Imagenes/markdown.png'
import clock from '../Imagenes/clock.png'
import { useTranslation } from 'react-i18next'

function Proyecto( {id} ) {

    const { t } = useTranslation();

    return(
        <section id={id} className='ancho proyecto'>
            <h1 className='etiqueta-abrir'>{t("header.proyecto")}</h1>
            <p className='proyecto-parrafo-frase'>{t("proyecto.frase")}</p>
            <div className="proyecto-carta">
                <div className="carta">
                    <img className='carta-imagen' src={coffee} alt="coffee" />
                    <div className='carta-contenido'>
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/QWoKErW" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.coffee")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcioncoffe")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">HTML</button>
                            <button className="carta-boton">CSS</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={commerce} alt="ecommerce" />
                    <div className='carta-contenido'>
                        <a className='carta-enlace' href="https://codefaa.github.io/e-commerce-apifakestore/" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.ecommerce")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionecommerce")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={commerceMern} alt="ecommerceMern" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://frontend-mern-e-commerce.onrender.com" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.ecommerceMern")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionecommerceMern")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">MongoDB</button>
                            <button className="carta-boton">Express</button>
                            <button className="carta-boton">React</button>
                            <button className="carta-boton">NodeJS</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={peliculas} alt="peliculas" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://frontend-mern-us62.onrender.com" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.peliculas")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionpeliculas")}</h5>
                        <div className='carta-tecnologias'>
                        <button className="carta-boton">MongoDB</button>
                            <button className="carta-boton">Express</button>
                            <button className="carta-boton">React</button>
                            <button className="carta-boton">NodeJS</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                   <img className='carta-imagen' src={markdown} alt="markdown" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/gOExOXa" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.markdown")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionmarkdown")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={clock} alt="clock" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/MWxvpyP" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.clock")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionclock")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>               
            </div>
            <p><a className='codepen-enlace' href="https://codepen.io/Codefaa/pens/public" target='_blank' rel="noopener noreferrer">{t("proyecto.vermas")}</a></p>
            <p className='etiqueta-cerrar'>{t("header.proyecto")}</p>
        </section>
    )
}

export default Proyecto;