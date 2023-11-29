import React from "react";
import { useState } from "react";

const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleFormData = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    username:${username},
    email:${email},
    password:${password}
    `);

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">FORMS</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username : <span> {username} </span>
        </label>
        <input
          onChange={handleFormData}
          type="text"
          className="form-control"
          id="username"
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span>{email}</span>
        </label>
        <input
          onChange={handleFormData}
          type="email"
          className="form-control"
          id="email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={handleFormData}
          type="password"
          className="form-control"
          id="password"
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};

export default FormWithObject;
