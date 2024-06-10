import { useState } from "react"

function Counter(){
    var [count, AddOrSub] = useState(0)

    function plusone(){
        AddOrSub(count+1)
    }

    function minusone(){
        AddOrSub(count-1)
    }
    return(
        <div>
            <h1>Click Counter</h1>
            <h1>{count}</h1>
            <button onClick={plusone}>+</button>
            <button onClick={minusone}>-</button>
        </div>
    )
}

export default Counter