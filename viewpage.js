import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./people.json";

function Viewpage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const selectedPerson = data.people.find((p) => p.id === parseInt(id));
    setPerson(selectedPerson);
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={person.avatar}
        alt={`${person.first_name} ${person.last_name}`}
      />
      <h1>id:{person.id}</h1>
      <p>First-Name:{person.first_name}</p>
      <p>Last-Name: {person.last_name}</p>
      <p>Email-id: {person.email}</p>
    </div>
  );
}

export default Viewpage;
