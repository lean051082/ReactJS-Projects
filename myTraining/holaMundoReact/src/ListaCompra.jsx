import { useState } from "react";

function ListaCompra() {
  const [listaProductos, setListaProductos] = useState([]);

  const agregarProducto = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const myInput = myForm.querySelector("input");
    setListaProductos([...listaProductos, myInput.value]);
  };

  return (
    <>
      <form onSubmit={(e) => agregarProducto(e)}>
        <input type="text" />
        <button>Añadir producto</button>
      </form>
      <p>Productos:</p>
      <ul>
        {listaProductos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListaCompra;
