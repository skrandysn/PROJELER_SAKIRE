import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
  };
  //   const [info, setInfo] = useState({ ***(state leri bir arada oluşturduk)***  
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     password: "",
  //   });

  //     const {firstname,lastname,email,password}=info

  //  const handleChange =()=>{
  //   setInfo({...info,[e.target.id]:e.target.value})
  //  }

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form
          onSubmit={handleSubmit}
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className=" peer"
              placeholder=" "
              required=""
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="floating_text">First Name</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              name="floating_text"
              type="text"
              placeholder=" "
              required
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              placeholder=" "
              className=" peer"
              name="floating_email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              placeholder=" "
              className=" peer"
              name="floating_password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="btn-danger flex justify-between text-center items-center"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
