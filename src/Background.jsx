// import React from 'react'

function Background() {

  const setBackground=(colour)=>{
    document.body.style.backgroundColor = colour;
  }
  

  return (
    <div className='container'>
        <div className='buttons'>
            <button onClick={()=>setBackground('red')} className="btn btn-danger m-2">Red</button>
            <button onClick={()=>setBackground('green')} className="btn btn-success m-2">Green</button>
            <button onClick={()=>setBackground('orange')} className="btn btn-warning m-2">Orange</button>
            <button onClick={()=>setBackground('blue')} className="btn btn-primary m-2">Blue</button>
            <button onClick={()=>setBackground('white')} className="btn btn-light m-2">White</button>
        </div>
    </div>
  )
}

export default Background