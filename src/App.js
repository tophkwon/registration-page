import './App.css';
import React, { useState } from 'react';
import { validateEmail } from '../src/utils';

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have atleast 8 characters.</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8
    );
  };

  const clearForm = () => {
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword({ 
      value: "", 
      isTouched: false, 
    }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created.');
    clearForm();
  };

  return (
    <div className="RegisterField">
      <form onSubmit={handleSubmit}>
        <h2>Register an account</h2>
        <div className="Field">
          <label>First Name: </label>
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="John"
            name="firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="Field">
          <label>Last Name: </label>
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Doe"
            name="lastname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="Field">
          <label>Email Address<sup>*</sup>: </label>
          <input
            id="email"
            class="form-field"
            type="email"
            placeholder="jdoe@gmail.com"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="Field">
          <label>Password<sup>*</sup>: </label>
          <input
            id="password"
            class="form-field"
            type="password"
            placeholder="password"
            name="password"
            value={password.value}
            onChange={(e) => {
              setPassword({ ...password, value: e.target.value });
            }}
            onBlur={(e) => {
              setPassword({ ...password, isTouched: true });
            }}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </div>
        <div>
        <button type="submit" disabled={!getIsFormValid()}>
          Create account
        </button>
        </div>
      </form>
    </div>
  )
}

export default App;
