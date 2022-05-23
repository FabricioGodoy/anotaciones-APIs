import { useState, useEffect } from 'react';


const Api = () =>{

    const URL = "https://jsonplaceholder.typicode.com/photos";
    const [ jeyson, setJeyson] = useState();

    const fetiche = async () =>{
        const res = await fetch(URL);
        const resJson = await res.json()
        setJeyson(resJson)
        console.log(resJson)
    } 
    useEffect(() => {
        fetiche()
      }, []);


    return(
    <div>
        
            <form action="/" className="inline">
                <button >ir al HOME</button>
            </form>
            <form action="/contador" className="inline">
                <button >ir al Contador</button>
            </form>
            <form action="/apiDigimon" className="inline">
                <button >ir a APIs</button>
            </form>
        
        <h1>Mapeo de array</h1>
        <ul>
            {!jeyson ? "cargando.." : jeyson.map(
                (jeyson)=>{
                    return(
                        
                        <ul>
                            <li className='listado'> ID usuario: {jeyson.id} \\ Título: {jeyson.title}</li>
                           <li className='listado'> Imagen: {jeyson.url}</li>
                        </ul>
                    )
                   
                }
            )}
       
        </ul>
    </div>
    )
}

export default Api;