import './Footer.css'

function Footer() {

    return(
        <footer className='footer-seccion ancho'>
            <nav className='footer-enlaces'>
                <a className='footer-link' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noopener noreferrer" data-texto="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className='footer-link' href="https://github.com/Codefaa" target='_blank' rel="noopener noreferrer" data-texto="GitHub"><i className="bi bi-github"></i></a>
                <a className='footer-link' href="https://drive.google.com/file/d/1CyvacuplrcDdHsjXRy0ItnbJ5hkD-nQk/view?usp=sharing" target='_blank' rel="noopener noreferrer" data-texto="CV"><i className="bi bi-file-person-fill"></i></a>
            </nav>
            <p className='footer-nombre'>Facundo Garcia</p>
        </footer>
    )
}
 
export default Footer;