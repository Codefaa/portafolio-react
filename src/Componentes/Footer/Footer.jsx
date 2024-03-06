import './Footer.css'

function Footer() {

    return(
        <footer className='ancho fin'>
            <nav className='contacto-enlaces'>
                <a className='link' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noopener noreferrer" data-texto="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className='link' href="https://github.com/Codefaa" target='_blank' rel="noopener noreferrer" data-texto="GitHub"><i className="bi bi-github"></i></a>
                <a className='link' href="https://drive.google.com/file/d/1pvy-ho58gIYw24o9P1e9qKEibd80QfYO/view?usp=sharing" target='_blank' rel="noopener noreferrer" data-texto="CV"><i className="bi bi-file-person-fill"></i></a>
            </nav>
            <p>Facundo Garcia</p>
        </footer>
    )
}

export default Footer;