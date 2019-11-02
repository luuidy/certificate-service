import React, {useState} from 'react'
import axios from 'axios'
import './Form.css'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

const Form = () => {
    const [certificate, setCertificate] = useState({
        name: '',
        email: '',
        born: '',
        course: 'Web-Developer'
    })
    const [code, setCode] = useState(null)

    const {name, email, born, course} = certificate

    const handleChange = e => setCertificate({...certificate, [e.target.name]: e.target.value})
    
    const submit = async e => {
        e.preventDefault()
        const result = await instance.post('/certificate/create', certificate)
        setCertificate({
            name: '',
            email: '',
            born: '',
            course: 'Web-Developer'
        })
        setCode(result.data.id_certificate)
    }
    return (
        <div className="form">
            <form onSubmit={submit}>
                {code && 
                <>
                    <div 
                    className="alert alert-info" 
                    style={{textAlign: 'center'}}>
                        <h5>
                            Your certificate code is: <strong>{code}</strong>
                        </h5>
                    <small className="form-text text-muted"><strong>don't forget this code</strong></small>
                    </div>
                </>
                }
                <h1>Create Certificate</h1>
            <div className="form-group">
                    <label htmlFor="name-input">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name-input"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    placeholder="Enter Name and surname"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name-input">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="name-input" 
                    onChange={handleChange}
                    name="email"
                    value={email}
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="born-input">Born</label>
                    <input 
                    type="date" 
                    onChange={handleChange}
                    name="born"
                    value={born}
                    className="form-control" 
                    id="born-input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputState">Course</label>
                    <select id="inputState" name="course" onChange={handleChange} value={course} className="form-control">
                        <option>Web Developer</option>
                        <option>Full Stack</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                    </select>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default Form
