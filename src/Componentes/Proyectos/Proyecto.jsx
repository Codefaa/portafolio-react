import './Proyecto.css'
import coffee from '../Imagenes/coffee.png'
import quote from '../Imagenes/quote.png'
import markdown from '../Imagenes/markdown.png'
import drummachine from '../Imagenes/drummachine.png'
import calculadora from '../Imagenes/calculadora.png'
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
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                    <img className='carta-imagen' src={quote} alt="quote" />
                    <div className='carta-contenido'>
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/ExMXdxg" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.quote")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcionquote")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
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
                    <img className='carta-imagen' src={drummachine} alt="drummachine" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/oNVebOZ" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.drummachine")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripciondrummachine")}</h5>
                        <div className='carta-tecnologias'>
                            <button className="carta-boton">React</button>
                        </div>
                    </div>
                </div>
                <div className="carta">
                   <img className='carta-imagen' src={calculadora} alt="calculadora" />
                    <div className="carta-contenido">
                        <a className='carta-enlace' href="https://codepen.io/Codefaa/pen/xxBLVYL" target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                        <h3 className='carta-titulo'>{t("proyecto.calculator")}</h3>
                        <h5 className='carta-parrafo'>{t("proyecto.descripcioncalculator")}</h5>
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