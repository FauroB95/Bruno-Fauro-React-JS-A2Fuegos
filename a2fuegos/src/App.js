import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

const App = () => {
//la funcion APP tiene un estado, que se va a llamar "PRODUCOSENLAWEB" Y SU FUNCION PARA SETEAR EL ESTADO VA A SER "SETPRODUCTOSENLAWEB".Esto tiene
//useEffect que se comportar como el componente DidMount (que se va a ejecutar una sola vez) y vamos a hacer la mmanada a la API, con una funcion que 
//se declara arriba y se llama "getProductosEnLaWeb"




    return (
    <>
    <Navbar />
    <div className="container-card">
    <ItemListContainer />
    <ItemList />

    </div>

    <div>
        <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="hola"></img>
    </div>
    </>
    );
}

export default App;
