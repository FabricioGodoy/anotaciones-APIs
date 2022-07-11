import React, { useState, useEffect } from 'react';
import "./apiAhoraDieciocho.css"


 const ApiAhoraDieciocho = () => {
  
    const [ producto, setProducto ] = useState ([])
    const URL = `http://localhost:4000/ahoraDieciocho`

    const obtenerDatos = async () => {
     const datos = await fetch (URL)
     const datosJson = await datos.json()
     setProducto(datosJson)
     console.log(datosJson)
    }
 
    useEffect (()=> {
     obtenerDatos()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
 
   return (
     <> 
       {
         producto && producto.map ((index) => (
           <p key={index.id} className="parrafo">{index.alias}</p>
           <p key={index.id} className="parrafo">{index.name}</p>
       ))
       } 
     </>
   );
  

}

export default ApiAhoraDieciocho
