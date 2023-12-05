import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //? Absolute path (tam adres vermek) / varsa router tam adres olarak kabul ediyor bu yüzden tam adres veriyoruz
              //? bulunduğun yerden nokta atışı bir yere gitmek istersen Absolute daha uygun
              // onClick={() => navigate(`/people/${id}`)}
              //! relative path (göreceli adres vermek) / yoksa router  bulunduğumuz yere göre kabul ediyor ve bu yüzden bulunduğumuz yere göre adres veriyoruz
              //! Nested formatta ilerliyorsak relative daha uygun
              onClick={() => navigate(`${id}`,{state:person})}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
              {/* <Link to={`/people/${id}`}> Deneme</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
