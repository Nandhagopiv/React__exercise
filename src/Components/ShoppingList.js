import { useState } from "react"

const ShoppingList = () => {
    const [item,setitem] = useState()
    const [list,setlist] = useState([])

const handle = (event) => {
    setitem(event.target.value)
}

const click = () => {
    setlist([...list,item])
    setitem("")
}

    return(
        <>
            <h1>Shopping List</h1>
            <input value={item} onChange={handle}></input>
            <button onClick={click}>Add</button>
            <ul>
                {list.map((data)=> {
                    return <li>{data}</li>
                })}
            </ul>
        </>
    )
}

export default ShoppingList