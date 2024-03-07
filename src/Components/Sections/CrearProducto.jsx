import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { useState } from "react";
//import { validarCategoria } from "../Helpers/validaciones";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const CrearProducto = () => {
  /*const [nombre, setNombre]=useState('');
const [descripcion, setDescripcion]=useState('');  
const [categoria, setCategoria]=useState('');    */

//UTILIZAMOS LA VARIABLE DE ENTORNO

  const API=import.meta.env.VITE_API;
  console.log("API-->", API);


  //utilizamos useNavigate de react router dom
  const navigate = useNavigate();
  //inicio confing formik

  const ProductoEsquema = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "Mín.  4 caracteres")
      .max(20, "Máx. 20 caracteres")
      .required("El nombre del producto es requerido"),
    descripcion: Yup.string()
      .min(4, "Mín. 4 caracteres")
      .max(200, "Máx. 200 caracteres")
      .required("Es requerida una descripción del producto"),
    categoria: Yup.string().required("La categoría es requerida"),
  });

  const valoresIniciales = {
    nombre: "",
    descripcion: "",
    categoria: "",
  };

  const formik = useFormik({
    initialValues: valoresIniciales,
    validationSchema: ProductoEsquema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit:  (values) => {
      console.log("values de formik-->", values);
      Swal.fire({
        title: "Estás seguro de guardar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Gardar!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          try{
            const response = await fetch(`${API}/productos`,{
              method: "POST",
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            });
            //console.log("RESPONSE", response);
            //console.log(response.status);
            if(response.status === 201){
              formik.resetForm();
              Swal.fire({
                title: "Éxito!",
                text: "Se creó un nuevo producto",
                icon: "success"
              });
            }
          } catch (error) {
            console.log("ERROR-->", error);
          }



       
        }
      });
      
  }
  });
  //fin config formik

  /*const handleSubmit=(e)=> {
  e.preventDefault();
  console.log("desde submit");
  const nuevoProducto = {
    nombre: nombre,
    descripcion: descripcion,
    categoria: categoria
  }
    console.log("Nuevo Producto --> ", nuevoProducto);
  
}*/

  return (
    <div className="container py-3 my-3">
      
      <Button variant="secondary" onClick={()=>navigate(-1)} /*se puede usar -1 o /administracion */>Atras</Button>
      <div className="text-center">
        <h2>Crear Productos</h2>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del producto"
            minLength={4}
            maxLength={20}
            /*value={nombre}
            onChange={(e)=>{
              setNombre(e.currentTarget.value);
            }}*/
            name="nombre"
            {...formik.getFieldProps("nombre")}
            className={clsx(
              "form-control",
              {
                "is-invalid": formik.touched.nombre && formik.errors.nombre,
              },
              {
                "is-valid": formik.touched.nombre && !formik.errors.nombre,
              }
            )}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.nombre}</span>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={4}
            placeholder="Ingrese una descripción del producto"
            minLength={4}
            maxLength={200}
            /*value={descripcion}
            onChange={(e)=>{
              setDescripcion(e.currentTarget.value);
            }}*/
            name="descripcion"
            {...formik.getFieldProps("descripcion")}
            className={clsx(
              "form-control",
              {
                "is-invalid":
                  formik.touched.descripcion && formik.errors.descripcion,
              },
              {
                "is-valid":
                  formik.touched.descripcion && !formik.errors.descripcion,
              }
            )}
          />
          {formik.touched.descripcion && formik.errors.descripcion && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.descripcion}</span>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            aria-label="Default select example" /*value={categoria} onChange={(e)=>{
              let resultado=validarCategoria(e.currentTarget.value);
              console.log("resultado de validar", resultado);
              setCategoria(e.currentTarget.value);}}
              className={clsx("form-select", {
                "is-valid": validarCategoria(categoria)
              } ,
              {
                "is-invalid": !validarCategoria(categoria)
              }
              )}*/
            name="categoria"
            {...formik.getFieldProps("categoria")}
            className={clsx(
              "form-control",
              {
                "is-invalid":
                  formik.touched.categoria && formik.errors.categoria,
              },
              {
                "is-valid":
                  formik.touched.categoria && !formik.errors.categoria,
              }
            )}
          >
            <option value="">Seleccione una Categoría</option>
            <option value="Bebida">Bebidas</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Limpieza">Limpieza</option>
          </Form.Select>
          {formik.touched.categoria && formik.errors.categoria && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.categoria}</span>
            </div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Producto
        </Button>
      </Form>
    </div>
  );
};

export default CrearProducto;
