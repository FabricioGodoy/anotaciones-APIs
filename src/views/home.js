import  {useState, useEffect } from 'react';

function Home(){
    return(
    <div>

        <h1> HOME</h1>
       
        <form action="/apiDigimon" className="inline">
            <button >ir a APIs</button>
        </form>
        
        <form action="/contador" className="inline">
            <button >ir al Contador</button>
        </form>
        
        <form action="/api" className="inline">
            <button >ir a la API nueva</button>
        </form>

    </div>
    )
}

export default Home;