import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className="form">
            <form>
                <h1>Create Certificate</h1>
            <div className="form-group">
                    <label htmlFor="name-input">Name</label>
                    <input type="text" className="form-control" id="name-input" placeholder="Enter Name and surname"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name-input">Email</label>
                    <input type="email" className="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="born-input">Born</label>
                    <input type="date" className="form-control" id="born-input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputState">Course</label>
                    <select id="inputState" className="form-control">
                        <option defaultChecked>Web Developer</option>
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
