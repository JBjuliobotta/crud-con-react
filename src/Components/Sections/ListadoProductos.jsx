import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const ListadoProductos = () => {

    const [productos, setProductos]=useState([]);

    const API=import.meta.env.VITE_API;

    const getProductos = async()=> {
        try {
            const response = await fetch (`${API}/productos`);
            console.log("RESPONSE-->", response);
            const resJson = await response.json();
            console.log("RESJSON-->", resJson);
            setProductos(resJson);
        } catch (error) {
            console.log("Error->", error);
        }
    }
    useEffect(()=>{
        getProductos();
    },[]);
    console.log("State productos-->", productos);
  return (
    <div>
      <h2>Listado de Productos</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ListadoProductos;
