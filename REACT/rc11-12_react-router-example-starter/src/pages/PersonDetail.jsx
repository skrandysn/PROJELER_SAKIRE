import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  //   const { state:person } = useLocation();
  //   console.log(state);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [person, setPerson] = useState({});

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("User can not be found");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
