import { useState } from 'react';
import './Header.css';

import { useTranslation } from 'react-i18next';

function Header() {

    const [colorPrimario, setColorPrimario] = useState();
    const [colorSecundario, setColorSecundario] = useState();
    const [colorCuarto, setColorCuarto] = useState();
    const [iconoClass, setIconoClass] = useState('bi bi-moon-stars-fill');
    const {t, i18n} = useTranslation();

    function cambiarLenguaje () {
        
        const nuevoIdioma = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nuevoIdioma);
    }

    function cambiarColor() {
        
        const nuevoColorPrimario = colorPrimario === '#222222' ? '#EDEDED' : '#222222';
        document.documentElement.style.setProperty('--color-primario', nuevoColorPrimario);
        setColorPrimario(nuevoColorPrimario);

        const nuevoColorSecundario = colorSecundario === '#1c1c1cA8' ? '#DCDCDCA8' : '#1c1c1cA8';
        document.documentElement.style.setProperty('--color-secundario', nuevoColorSecundario);
        setColorSecundario(nuevoColorSecundario);

        const nuevoColorCuarto = colorCuarto === '#FFFFFF' ? '#000000' : '#FFFFFF';
        document.documentElement.style.setProperty('--color-cuarto', nuevoColorCuarto);
        setColorCuarto(nuevoColorCuarto);

        setIconoClass(iconoClass === 'bi bi-moon-stars-fill' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill')
        
    }



    return(
        <header className='header'>
            <nav className='header-nav'>
                <a className='header-etiqueta' href="#perfil">{t('header.inicio')}</a>
                <a className='header-etiqueta'href="#sobremi">{t('header.sobremi')}</a>
                <a className='header-etiqueta' href="#proyecto">{t('header.proyecto')}</a>
                <a className='header-etiqueta'href="#contacto">{t('header.contacto')}</a>
            </nav>
            <div className='header-idiomafondo'>
                <i onClick={cambiarLenguaje} className="bi bi-translate"></i>
                <i onClick={cambiarColor} className={iconoClass}></i>
            </div>
        </header>
    )
}

export default Header;