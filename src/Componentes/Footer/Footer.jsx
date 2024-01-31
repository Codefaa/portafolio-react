import './Footer.css'

function Footer() {

    return(
        <footer className='ancho fin'>
            <nav className='contacto-enlaces'>
                <a className='link' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noopener noreferrer" data-texto="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className='link' href="https://github.com/Codefaa" target='_blank' rel="noopener noreferrer" data-texto="GitHub"><i className="bi bi-github"></i></a>
                <a className='link' href="https://drive.google.com/file/d/1Q-__h3wF8XzF1fcFg8mXic1jkZCEvu9r/view?usp=drive_link" target='_blank' rel="noopener noreferrer" data-texto="CV"><i className="bi bi-file-person-fill"></i></a>
            </nav>
            <p>Facundo Garcia</p>
        </footer>
    )
}

export default Footer;