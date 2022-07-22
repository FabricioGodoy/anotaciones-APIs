import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Button,
} from "reactstrap";

/* consumo API */
/* const [producto, setProducto] = useState([]);
const URL = `http://localhost:4000/ahoraDoce`;
const obtenerDatos = async () => {
  const datos = await fetch(URL);
  const datosJson = await datos.json();
  setProducto(datosJson);
  console.log(datosJson);
};
useEffect(() => {
  obtenerDatos();
}, []); */

/* Logica código */

const Tablero = () => {
  const [producto, setProducto] = useState([]);
  const URL = `http://localhost:4000/doceCuotas`;
  const obtenerDatos = async () => {
    const datos = await fetch(URL);
    const datosJson = await datos.json();
    setProducto(datosJson);
    console.log(datosJson);
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  const state = {
    data: producto,
    form: {
      id: '',
      SKU:'',
      Name: ''
    },
    modalInsertar: false,
  }
  const handleChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  };

   const [mostrar, setMostrar] = useState(false) 


  return (
    <>
      <Container>
        <br></br>
        <Button color="success" className="muestra" onClick={()=>setMostrar(true)}> Insertar artículo</Button>
        <br></br>

        <Table>
          <thead>
            <tr>
              <th>ID:</th>
              <th>SKU:</th>
              <th>Name:</th>
              <th>Action:</th>
            </tr>
          </thead>

          <tbody>
            {producto.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.alias}</td>
                <td>{elemento.name}</td>
                <td>
                  <Button color="primary">Editar</Button>
                </td>
                <td>
                  <Button color="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Modal isOpen={/* state.modalInsertar */ mostrar}>
        <ModalHeader>
          <div>
            {" "}
            <h3> Insertar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value= {producto.length+1}/>
          </FormGroup>
          <FormGroup>
            <label>SKU:</label>
            <input className="form-control" name="alias" type="text" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Name:</label>
            <input className="form-control" name="name" type="text" onChange={handleChange}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button color="danger" onClick={()=>setMostrar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Tablero;

/* const Tablero = () => {
  const [producto, setProducto] = useState([]);
  const URL = `http://localhost:4000/ahoraDoce`;

  const obtenerDatos = async () => {
    const datos = await fetch(URL);
    const datosJson = await datos.json();
    setProducto(datosJson);
    console.log(datosJson);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return 
    <>
     producto && producto.map ((index) => (
                  <div key={index.id}>
                    <p  className="parrafo">{index.id}</p>
                    <p className="parrafo">{index.alias}</p>
                    <p  className="parrafo">{index.name}</p>
                  </div>
              ))
    </>;
};

export default Tablero; */
