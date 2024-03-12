import { useTranslation } from 'react-i18next';
import './Contacto.css'

function Contacto( {id} ) {

    const { t } = useTranslation();

    return (
        <form id={id} className='contacto-form ancho '>
            <h1 className='etiqueta-abrir'>{t("header.contacto")}</h1>
            <p className='contacto-parrafo'>{t("contacto.contactoparrafo1")} <span className='manito'>👋</span></p>
            <p className='contacto-parrafo'>{t("contacto.contactoparrafo2")} <a className='contacto-email' href='mailto:facundogarcia1999@outlook.com' target='_blak' rel="noopener noreferrer">facundogarcia1999@outlook.com</a></p>
            <p className='etiqueta-cerrar'>{t("header.contacto")}</p>
        </form>
    )
}

export default Contacto;