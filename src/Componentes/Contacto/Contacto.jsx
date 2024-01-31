import { useTranslation } from 'react-i18next';
import './Contacto.css'

function Contacto( {id} ) {

    const { t } = useTranslation();

    return (
        <div id={id} className='ancho contacto'>
            <h1 className='etiqueta-abrir'>{t("header.contacto")}</h1>
            <p>{t("contacto.contactoparrafo1")} <span className='manito'>👋</span></p>
            <p>{t("contacto.contactoparrafo2")} <a className='email' href='mailto:facundogarcia1999@outlook.com' target='_blak' rel="noopener noreferrer">facundogarcia1999@outlook.com</a></p>
            <p className='etiqueta-cerrar'>{t("header.contacto")}</p>
        </div>
    )
}

export default Contacto;