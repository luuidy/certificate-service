import React from 'react'
import './certificate.css'
import Certification from '../components/Certification'

const Certificate = () => {
    return (
        <div>
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
            <Certification/>
        </div>
    )
}

export default Certificate
