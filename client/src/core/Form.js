import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className="form">
            <form>
                <h1>Create Certificate</h1>
            <div class="form-group">
                    <label for="name-input">Name</label>
                    <input type="text" class="form-control" id="name-input" placeholder="Enter Name and surname"/>
                </div>
                <div class="form-group">
                    <label for="name-input">Email</label>
                    <input type="email" class="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="born-input">Born</label>
                    <input type="date" class="form-control" id="born-input"/>
                </div>
                <div class="form-group">
                    <label for="inputState">Course</label>
                    <select id="inputState" class="form-control">
                        <option selected>Web Developer</option>
                        <option>Full Stack</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                    </select>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default Form
