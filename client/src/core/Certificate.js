import React, {useState} from 'react'
import './certificate.css'
import Certification from '../components/Certification'

const Certificate = () => {
    const [certification, setCertification] = useState(null)
    const [code, setCode] = useState('')

    const change = e => {
        setCode(e.target.value)
    }

    const submit = e =>{
        e.preventDefault()
        console.log(code)
    }
    return (
        <div>
            {!certification && (
            <div className="get-certificate">
            <form onSubmit={submit}>
                <h1>Get Certificate</h1>
               <div className="form-group">
                    <label htmlFor="code-input">Certificate Code</label>
                    <input type="number" onChange={change} value={code} className="form-control" id="code-input"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            )}
            {certification && <Certification/>}
        </div>
    )
}

export default Certificate
