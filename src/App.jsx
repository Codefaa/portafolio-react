
import './App.css';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';
import Perfil from './Componentes/Perfil/Perfil';
import Proyecto from './Componentes/Proyectos/Proyecto';
import SobreMi from './Componentes/SobreMi/SobreMi';

function App() {


  return (
    <div className="App">

        <Header />
        <Perfil id='perfil'/>
        <SobreMi id='sobremi'/>
        <Proyecto id='proyecto'/>
        <Contacto id='contacto'/>
        <Footer />

    </div>
  );
}

export default App;
