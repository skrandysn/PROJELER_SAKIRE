import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("Mounting");
    getUser();
  }, []); //! user

  console.log(user);
  return (
    <div>
      <h1>
        {user?.name?.first} {user?.name?.last}
      </h1>
      <img className="rounded-circle" src={user?.picture?.large} alt="random" />
      <h4>{user?.email}</h4>
      <h5>{user?.phone}</h5>
      <p>{new Date(user?.dob?.date).toLocaleDateString("tr-TR")}</p>
      <button onClick={getUser} className="btn btn-success">
        {" "}
        Get User
      </button>
    </div>
  );
};

export default User;
