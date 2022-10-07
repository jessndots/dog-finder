import React from "react";
import { useParams } from "react-router-dom";

import './DogDetails.css'

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dets = dogs.find(element => element.name === name);
  return (
    <div>
      <h1>{dets.name}</h1>
      <img src={dets.src} alt={`Dog named ${dets.name}`} className="DogDetails-img" />
      <p>
        <b>Age: </b>{dets.age}<br />
        <b>About: </b>
        {dets.facts[0]} {dets.facts[1]} {dets.facts[2]}
      </p>
    </div>
  )
}

export default DogDetails;