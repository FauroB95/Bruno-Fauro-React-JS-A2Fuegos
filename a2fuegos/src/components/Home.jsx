import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:filtro' element={<ItemListContainer />} />
        <Route path='/item/:precio' element={<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter>
        </>
    );
};

export default Home;
