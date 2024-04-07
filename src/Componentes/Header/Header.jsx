import { useState } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

function Header() {

    const [colorPrimario, setColorPrimario] = useState();
    const [colorSecundario, setColorSecundario] = useState();
    const [colorCuarto, setColorCuarto] = useState();
    const [colorQuinto, setColorQuinto] = useState();
    const [iconoClass, setIconoClass] = useState('bi bi-sun-fill');
    const [abrirMenu, setAbrirMenu] = useState(false);
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

        const nuevoColorQuinto = colorQuinto === '#1c1c1c' ? '#DCDCDC' : '#1c1c1c';
        document.documentElement.style.setProperty('--color-quinto', nuevoColorQuinto);
        setColorQuinto(nuevoColorQuinto);

        setIconoClass(iconoClass === 'bi bi-moon-stars-fill' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill')
    }

    function handleAbrirMenu() {
        setAbrirMenu(!abrirMenu);
    } 

    return(
        <header className='header-seccion'>
            <nav className={`header-nav ${abrirMenu ? 'active' : ''}`}>
                <ScrollLink to="perfil" smooth={true} duration={500} onClick={handleAbrirMenu} className='header-etiqueta'> {t('header.inicio')} </ScrollLink>
                <ScrollLink to="sobremi" smooth={true} duration={500} onClick={handleAbrirMenu} className='header-etiqueta'> {t('header.sobremi')} </ScrollLink>
                <ScrollLink to="proyecto" smooth={true} duration={500} onClick={handleAbrirMenu} className='header-etiqueta'> {t('header.proyecto')} </ScrollLink>
                <ScrollLink to="contacto" smooth={true} duration={500} onClick={handleAbrirMenu} className='header-etiqueta'> {t('header.contacto')} </ScrollLink>
            </nav>
            <div className='header-menu'>
                <i onClick={handleAbrirMenu} className={`bi bi-list ${abrirMenu ? 'bi bi-x-circle-fill' : 'bi bi-list'}`}></i>
            </div>
            <div className='header-idiomafondo'>
                <i onClick={cambiarLenguaje} className="bi bi-translate"></i>
                <i onClick={cambiarColor} className={iconoClass}></i>
            </div>
        </header>
    )
}

export default Header;