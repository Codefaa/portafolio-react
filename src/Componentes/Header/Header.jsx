import './Header.css';

function Header() {

    return(
        <header className='header'>
            <nav className='header-nav'>
                <a className='header-etiqueta' href="#perfil">inicio</a>
                <a className='header-etiqueta'href="#sobremi">sobre mi</a>
                <a className='header-etiqueta' href="#proyecto">proyecto</a>
                <a className='header-etiqueta'href="#contacto">contacto</a>
            </nav>
            <div className='header-idiomafondo'>
                <i className="bi bi-translate"></i>
                <i className="bi bi-moon-stars-fill"></i>
            </div>
        </header>
    )
}

export default Header;