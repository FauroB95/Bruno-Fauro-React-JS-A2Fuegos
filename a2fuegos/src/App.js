import './App.css';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

    return (
    <>
    <Navbar />
    {/*<div className="container-card">
    <ItemListContainer />                      corresponde al desafio de la clase 6
    </div>*/}
    <ItemDetailContainer />

    <div>
        <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="hola imagen del fondo"></img>
    </div>
    </>
    );
}

export default App;

/*
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

    return (
    <>
    <Navbar />
    <div className="container-card">
    <ItemListContainer />
    </div>

    <div>
        <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="hola"></img>
    </div>
    </>
    );
}

export default App;
*/