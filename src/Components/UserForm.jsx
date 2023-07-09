import React from 'react';


const UserForm = props => {
    const datosInp = props.datosInp;
    const seteaInp = props.seteaInp;

    const onChange = e => {

        seteaInp(
            {
                ...datosInp,
                [e.target.name]: e.target.value
            });

    };

    return (

        <form>
            <div className="form-group">
                <label>Firstname: </label>
                <input type="text" onChange={onChange} name="firstName" />
            </div>
            <div className="form-group">
                <label>Lastname: </label>
                <input type="text" onChange={onChange} name="lastName" />
            </div>
            <div className="form-group">
                <label>Email Address: </label>
                <input type="email" onChange={onChange} name="email" />
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" onChange={onChange} name="password" />
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input type="password" onChange={onChange} name="password2" />
            </div>
            {/* <input type="submit" value="Create User" /> */}

        </form>

    );
};

export default UserForm;

