import { useState, useEffect } from 'react';

 const ApiDigimon = () => {
    
    const  [juegos, setJuegos] = useState()
    const URL = "https://digimon-api.vercel.app/api/digimon"
   
    const fetchear = async () => {
      const respuesta = await fetch(URL)
      const respuestaEnJson = await respuesta.json()
      setJuegos(respuestaEnJson)
     // console.log (respuestaEnJson)
    }
    useEffect(() => {
      fetchear()
    }, []);
  
    return (
    <div>
        
        <form action="/" className="inline">
            <button >ir al HOME</button>
        </form>
        <form action="/usoestado" className="inline">
            <button >ir al Contador</button>
        </form>
        <form action="/api" className="inline">
            <button >ir a la API nueva</button>
        </form>
        
        <h1>Mapeo de Digimon</h1>
        <ul>
       
            {!juegos ? "Cargan2..." : juegos.map ( (juego)=>{
          return(
            <ul key={juego.name}>
                <img src={juego.img} alt='imagen digimon'/>
                <li className='listado'>{juego.name}</li>
                <li className='listado'>{juego.level}</li>
            </ul>
          )
            })
            }
      </ul>
    </div>
     ) 
}
export default ApiDigimon;   