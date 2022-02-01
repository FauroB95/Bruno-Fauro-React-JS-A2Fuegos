import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


//Funcion flecha, que crea un componente que retorna/da como resultado un div.
const Navbar = () => {
    return (
        <div>
            <nav className="colorNabvar navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">A2Fuegos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Registracion</a>
        </li>
        <CartWidget />
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

//Con esta estructura exporta el"Navbar" o lo que fuera.
export default Navbar;