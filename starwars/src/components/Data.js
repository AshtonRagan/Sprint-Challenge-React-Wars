import React, { useState, useEffect } from "react";
import Axios from "axios";
import MakeCard from "./MakeCard";

function Data() {
  const [getpeople, setpeople] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);

        const getpeople = res.data.results;
        setpeople(getpeople);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {getpeople.map((e, index) => {
        return <MakeCard key={index} name={e.name} bday={e.birth_year} />;
      })}
    </div>
  );
}
export default Data;
