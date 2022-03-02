import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Navbar from './Navbar';
import Cart from './Cart';
import CartContextProvider from './CartContext';
import CartWidget from './CartWidget';

const Home = () => {
    return (
        <>
        <CartContextProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:filtro' element={<ItemListContainer />} />
        <Route path='/item/:precio' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart' element={<CartWidget />} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
        </>
    );
};

export default Home;
