import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const columns= [
  { title: 'ID', field: 'id', type: 'numeric'},
  { title: 'SKU', field: 'sku', type: 'numeric'},
  { title: 'Name', field: 'name' },
  { title: 'Position', field: 'position', type: 'numeric'},
  { title: 'Description', field: 'description'},
  { title: 'Availability', field: 'availability'},
  { title: 'Condition', field: 'condition'},
  { title: 'Price', field: 'price'},
  { title: 'Link', field: 'link'},
  { title: 'Image_Link', field: 'image_link'},
  { title: 'Brand', field: 'brand'}
];
const baseUrl="http://localhost:4000/doceCuotas";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function App() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [productoSeleccionado, setProductoSeleccionado]=useState({
    id: "",
    sku: "",
    name: "",
    position: "",
    description: "",
    availability: "",
    condition: "",
    price: "",
    link: "",
    image_link: "",
    brand: "",
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setProductoSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, productoSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+productoSeleccionado.id, productoSeleccionado)
    .then(response=>{
      var dataNueva= data;
      // eslint-disable-next-line
      dataNueva.map((producto)=>{
        if(producto.id===productoSeleccionado.id){
          producto.sku=productoSeleccionado.sku;
          producto.name=productoSeleccionado.name;
          producto.position=productoSeleccionado.position;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/"+productoSeleccionado.id)
    .then(response=>{
      setData(data.filter(producto=>producto.id!==productoSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarProducto=(producto, caso)=>{
    setProductoSeleccionado(producto);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Producto</h3>
      <TextField className={styles.inputMaterial} label="ID" name="id" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="SKU" name="sku" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Name" name="name" onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Position" name="position" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Producto</h3>
      <TextField className={styles.inputMaterial} label="ID" name="id" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.id}/>
      <br />
      <TextField className={styles.inputMaterial} label="SKU" name="sku" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.sku}/>          
<br />
<TextField className={styles.inputMaterial} label="Name" name="name" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.name}/>
      <br />
<TextField className={styles.inputMaterial} label="Position" name="position" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.position}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el Producto <b>{productoSeleccionado && productoSeleccionado.producto}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Crear Producto</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Lista de Productos"  
          actions={[
            {
              icon: 'C',
              tooltip: 'Editar Producto',
              onClick: (event, rowdata) => seleccionarProducto(rowdata, "Editar")
            },
            {
              icon: 'E',
              tooltip: 'Eliminar Producto',
              onClick: (event, rowdata) => seleccionarProducto(rowdata, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />


        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default App;
