import { useState, useEffect } from 'react';
import Axios from "axios";
import "./apiDoceCuotas.css"

const URL = " http://localhost:4000/doceCuotas"

 const ApiDoceCuotas = () => {
   const [producto, setProducto] = useState ([])
   useEffect(() => {
    Axios.get (URL)
    .then (res => {
      setProducto(res.data)
      
      console.log( res.data)
    })
   
   },[]);

   const limit = 3;
   let limitador = producto.slice(0, limit)

   return(
    <>
      { !limitador ? "cargando..." : limitador.map( (p)=>{
        return (
          <ul key={p.id} className="productos">
            <li>{p.id}</li>
            <li>{p.name}</li>
            <li>{p.alias}</li>
          </ul>

        )
      })}
    </>
   )
}
export default ApiDoceCuotas
