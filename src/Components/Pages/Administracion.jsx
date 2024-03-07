import React from 'react';
//import CrearProducto from '../Sections/CrearProducto';
import ListadoProductos from '../Sections/ListadoProductos';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Administration = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='container my-3 py-3'>
                <Button variant='primary' onClick={()=>{navigate("/crear-producto")}}>Crear Producto</Button>
            </div>
            <ListadoProductos/>
            
        </div>
    );
};

export default Administration;