import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


const productos = [
  {
      key: "1",
      nombre:"Cuchillo Carnicero",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "3500",
      stock: "10",
      imagen:"https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg",
  },
  {   
      key: "2",
      nombre:"Cuchillo Ciervo",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "7000", 
      stock: "8", 
      imagen:"./src/assets/Cuchillo mango de ciervo.jpg",
  },
  {
      key: "3", 
      nombre:"Disco Arado c/Tapa",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "7000", 
      stock: "5", 
      imagen:"./Imagenes/Disco para cocinar.jpg",
  },
  {
      key: "4", 
      nombre:"Juego de Palitas", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "2500", 
      stock: "20", 
      imagen:"./Imagenes/Palita y desparramador.jpg",
  },
  {
      key: "5", 
      nombre:"Juego de Asador",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.", 
      precio: "2500", 
      stock: "30", 
      imagen:"./Imagenes/Juego de asado.jpg",
  },
  {
      key: "6", 
      nombre:"Estaca reforzada",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.", 
      precio: "6000", 
      stock: "15", 
      imagen:"./Imagenes/Estaca para asado.jpg",
  },
  {
      key: "7", 
      nombre:"Guantes Ignifugos",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.", 
      precio: "2500", 
      stock: "9", 
      imagen:"./Imagenes/Guantes ignifugos.jpg",
  },
  {
      key: "8", 
      nombre:"Delantal de Jean", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "1500", 
      stock: "20", 
      imagen:"./Imagenes/Delantal cocinero.webp",
  },
  {
      key: "9", 
      nombre:"Brasero de hierro", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "2000", 
      stock: "15", 
      imagen:"./Imagenes/Brasero.jpg",
  },
  {
      key: "10", 
      nombre:"Parrilla movil negra", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "18000", 
      stock: "10", 
      imagen:"./Imagenes/Parrilla movil.jpg",
  },
  {
      key: "11", 
      nombre:"Asador movil full", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "70000", 
      stock: "5", 
      imagen:"./Imagenes/Asador redondo.jpg",
  },
  {
      key: "12", 
      nombre:"Espada Galetto", 
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure voluptatem laborum beatae, provident in possimus maxime quia, facere delectus esse asperiores natus excepturi? Ipsum, nostrum? Omnis inventore quaerat unde.",
      precio: "800", 
      stock: "50", 
      imagen:"./src/assets/Espadas Galeto.jpg",
  }
]; 

const App = () => {
  return (
    <>
    <Navbar />
    {
        productos.map(estrellas =>
            <ItemListContainer
                  posicion={estrellas.key} 
                  foto={estrellas.imagen}
                  nombre={estrellas.nombre}
                  descripcion={estrellas.descripcion}
                  stock={estrellas.stock}
                  precio={estrellas.precio}
          />
        )
      }
    <div className="App">
      HOLA MUNDO!
      <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="hola"></img>
    </div>
    </>
  );
}

export default App;
