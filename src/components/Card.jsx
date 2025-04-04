import { useState, useContext } from 'react';
import './Card.scss';
import CarritoContext from '../contexts/CarritoContext';

const Card = ({ producto }) => {
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext);
  const [imagenActual, setImagenActual] = useState(producto.foto1);

  // Imagen por defecto si el campo está vacío o undefined
  const getImagenSrc = (imagen) => {
    return imagen ? imagen : './imagenes/logofun1.webp'
  };

  const handleImagenChange = (imagen) => {
    setImagenActual(imagen);
  };

  const handleAgregar = () => {
    agregarProductoAlCarritoContext(producto);
  };

  return (
    <div className="card-container"> 
      {/* Botones para cambiar la imagen */}
      <div className="botones-imagenes">
        <button className="boton-music" onClick={() => handleImagenChange(producto.foto1)}>MÚSICO</button>
        <button className="boton-music" onClick={() => handleImagenChange(producto.foto2)}>GUITARRA</button>
        <button className="boton-music" onClick={() => handleImagenChange(producto.foto3)}>CARACTERÍSTICAS</button>
      </div>

      {/* Contenedor de la card */}
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img className="card__image" src={getImagenSrc(imagenActual)} alt={producto.nombre} />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{producto.nombre}</h2>
            <div className="card__description">
              <p>{producto.descripcion}</p>
              <button className="boton-card" onClick={handleAgregar}>Agregar al Carrito</button>
            </div> 
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
