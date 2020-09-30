import React from 'react'

const handleMouseOver = (e: any) => {
 console.log('Moused Over',e.clientX, e.clientY);
}
const MouseOver = (props: any) => (
 
 <div onMouseOver={handleMouseOver}>
     {props.children}
 </div>   

)


export {MouseOver}