import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import CategoryDetail from './components/CategoryDetail';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer';

const App = () => {

    return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/category/:filtro" element={<CategoryDetail />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
    </Routes>
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
    {/*<div className="container-card">
    <ItemListContainer />                      corresponde al desafio de la clase 6
    </div>*//*}

    <div>
        <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="hola"></img>
    </div>
    </>
    );
}

export default App;
*/