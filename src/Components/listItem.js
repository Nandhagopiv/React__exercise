import { useState } from "react"

function Listitem(props){
    const [checked, setchecked] = useState(false)

function changing(){
    setchecked(!checked)
}

    return(
        <>
            <div>
                <input onChange={changing} type="checkbox"></input>
                <span style={{textDecoration: checked?"line-through":"none"}}>{props.activity}</span>
            </div>
        </>
    )
}

export default Listitem