import React, { useState } from 'react';
import Passwordser from './Passwordser';

const PasswordGenerator = () => {
  const [state, setState] = useState({
    Password: '',
    Length: 20,
    Symbols: false,
    Number: false,
    uppercase: false,
    lowercase: false,
  });

  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordObj = Passwordser.getpassword(state);
    const password = Passwordser.generatepassword(passwordObj, state.Length);
    setState({ ...state, Password: password });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-danger text-white text-center">
                <h4>Password Generator</h4>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Generated Password</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="password"
                        name="Password"
                        className="form-control"
                        value={state.Password}
                        onChange={updateInput}
                      />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => navigator.clipboard.writeText(state.Password)}>Copy</button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="length" className="form-label">Length</label>
                    <input
                      type="number"
                      id="length"
                      name="Length"
                      className="form-control"
                      value={state.Length}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="Symbols"
                      name="Symbols"
                      className="form-check-input"
                      checked={state.Symbols}
                      onChange={updateCheck}
                    />
                    <label htmlFor="Symbols" className="form-check-label">Include Symbols</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="Number"
                      name="Number"
                      className="form-check-input"
                      checked={state.Number}
                      onChange={updateCheck}
                    />
                    <label htmlFor="Number" className="form-check-label">Include Numbers</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="lowercase"
                      name="lowercase"
                      className="form-check-input"
                      checked={state.lowercase}
                      onChange={updateCheck}
                    />
                    <label htmlFor="lowercase" className="form-check-label">Include Lowercase</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="uppercase"
                      name="uppercase"
                      className="form-check-input"
                      checked={state.uppercase}
                      onChange={updateCheck}
                    />
                    <label htmlFor="uppercase" className="form-check-label">Include Uppercase</label>
                  </div>
                  <button type="submit" className="btn btn-danger">Generate</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
