import './SobreMi.css'
import { useTranslation } from 'react-i18next'
import habilidades from '../../data/habilidades.json';


function SobreMi( {id} ) {

    const { t } = useTranslation();

    return(
        <section id={id} className='sobremi-seccion ancho'>
            <h1 className='etiqueta-abrir'>{t("header.sobremi")}</h1>
            <p className='sobremi-parrafo'>{t("sobremi.sobremiparrafo1")}</p>
            <p className='sobremi-parrafo'>{t("sobremi.sobremiparrafo2")}</p>
            
            <div className='sobremi-habilidades'>
                {habilidades && habilidades.map((habilidad) => (
                <figure className="habilidades-card">
                    <img className='habilidades-imagen' src={habilidad.imagen} alt="html" />
                    <h3 className='habilidades-titulo'>{habilidad.titulo}</h3>
                </figure>
                ))}
            </div>

            <p className='etiqueta-cerrar'>{t("header.sobremi")}</p>
        </section>
    )
}

export default SobreMi;