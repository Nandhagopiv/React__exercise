import { useState } from "react"

function Random() {
    var [randomNum,setstate] = useState(Math.floor(Math.random()*10)+1)

    function randomGen() {
        setstate(Math.floor(Math.random()*10)+1)
    }
    return(
        <div>
            <h1>RandomNum Generator</h1>
            <h1>{randomNum}</h1>
            <button onClick={randomGen}>Random Number</button>
        </div>
    )
}

export default Random