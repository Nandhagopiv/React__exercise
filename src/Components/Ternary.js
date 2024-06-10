import { useState } from "react"

function Ternary(){
    const [col, setcol] = useState(true)

function changecol(){
    setcol(!col)
}

    return(
        <>
            <div style={{width:"200px",height:"200px", backgroundColor: col?"red":"green"}}></div>
            <button onClick={changecol}>Change Color</button>
        </>
    )
}

export default Ternary