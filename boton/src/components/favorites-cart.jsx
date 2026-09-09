import { useState } from 'react';

export default function FavoritesCart() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Laptop', favorito: false },
    { id: 2, nombre: 'Mouse Inalámbrico', favorito: false },
    { id: 3, nombre: 'Teclado Mecánico', favorito: false },
    { id: 4, nombre: 'Monitor 4K', favorito: false },
  ]);

  const alternarFavorito = (id) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, favorito: !producto.favorito }
          : producto
      )
    );
  };

  const favoritos = productos.filter((producto) => producto.favorito);

  return (
    <section>
      <h2>Ejercicio 5: Carrito de Favoritos</h2>
      <div>
        <h3>Lista de Productos</h3>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre}{' '}
              <button onClick={() => alternarFavorito(producto.id)}>
                {producto.favorito ? 'Quitar favorito' : 'Añadir favorito'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Tus Favoritos</h3>
        {favoritos.length === 0 ? (
          <p>Aún no tienes favoritos</p>
        ) : (
          <ul>
            {favoritos.map((producto) => (
              <li key={producto.id}>{producto.nombre}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
