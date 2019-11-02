import React, {useState} from 'react'
import axios from 'axios'
import './certificate.css'
import Certification from '../components/Certification'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

const Certificate = () => {
    const [certification, setCertification] = useState(null)
    const [code, setCode] = useState('')

    const change = e => {
        setCode(e.target.value)
    }

    const submit = async e =>{
        e.preventDefault()
        const result = await instance.post('/certificate/get', {code: code})
        setCode('')
        console.log(result.data)
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
