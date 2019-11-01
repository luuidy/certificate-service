import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const [certificate, setCertificate] = useState({
        name: '',
        email: '',
        born: '',
        course: ''
    })
    const {name, email, born, course} = certificate

    const handleChange = e => setCertificate({...certificate, [e.target.name]: e.target.value})
    
    const submit = e => {
        e.preventDefault()
        console.log(certificate)
    }
    return (
        <div className="form">
            <form onSubmit={submit}>
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
