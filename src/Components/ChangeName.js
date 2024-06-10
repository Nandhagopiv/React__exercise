import React, { useState } from 'react';
function ChangeName(){
    var [name,cgnName] = useState("Nandhuu")

    function changeName(){
        if (name === "Nandhuu"){          
        cgnName("Gopi")
        } else{
          cgnName("Nandhuu")
        }
    }

    return(
      <div>
        <h1>Click to Change Names</h1>
        <h1>{name}</h1>
        <button onClick={changeName}>Change</button>
      </div>
    )
}

export default ChangeName