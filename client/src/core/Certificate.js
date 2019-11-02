import React, {useState} from 'react'
import './certificate.css'
import Certification from '../components/Certification'

const Certificate = () => {
    const [certification, setCertification] = useState(null)
    return (
        <div>
            {!certification && (
            <div className="get-certificate">
            <form>
                <h1>Get Certificate</h1>
               <div className="form-group">
                    <label htmlFor="code-input">Certificate Code</label>
                    <input type="number" className="form-control" id="code-input"/>
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
