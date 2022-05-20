import React, { useState, useEffect } from 'react'


function UsoEstado(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Click nº ${count}`;
      });

  return (
    <div>
      <h1>Clickeaste {count} veces</h1>
      <button onClick={() => setCount(count + 1)} className="clickeador">
        CLICKEA ACA
      </button>
     
      <form action="/" className="inline">
            <button >ir al HOME</button>
        </form>
        <form action="/apiDigimon" className="inline">
            <button >ir a APIs</button>
        </form>
        <form action="/api" className="inline">
            <button >ir a la API nueva</button>
        </form>
    </div>
 );
}
export default UsoEstado;
