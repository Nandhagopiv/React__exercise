import { useState } from "react"

function Form() {
    const [fName, setfName] = useState()
    const [pass, setpass] = useState()
    const [result, setResult] = useState()
    const [show, setshow] = useState(false)
    let temUserName = "Nandhuu"
    let password = "1234"
    console.log("UserName:",temUserName,"Password:",password);

    function handlefName(event) {
        setfName(event.target.value)
    }

    function handlepass(e) {
        setpass(e.target.value)
    }

    function click(e) {
        e.preventDefault()
        let userName = fName
        if (temUserName === userName && password === pass) {
            setResult(`Hello, ${fName} Login Sucessful`)
            setshow("true")
        } else {
            setResult("Login Failed")
        }
    }

    return (
        <>
            < br></br>
            <h1>Form</h1>
            <form style={{ display: show ? "none" : "block" }}>
                <label>User Name: </label><input onChange={handlefName}></input><br></br><br></br>
                <label>Password: </label><input onChange={handlepass}></input><br></br><br></br>
                <button onClick={click}>Click</button>
            </form>
            <h1>{result}</h1>
        </>
    )
}

export default Form