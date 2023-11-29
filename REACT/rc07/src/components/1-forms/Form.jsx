import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    // console.log(e.target.value)
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    username:${username},
    email:${email},
    password:${password}
    `)
    setUsername("")
    setEmail("")
    setPassword("")

  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">FORMS</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username : <span> {username} </span>
        </label>
        <input
          onChange={handleUsername}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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

export default Form;
