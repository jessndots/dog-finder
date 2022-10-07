import React from "react";
import './DogList.css'

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Dogs</h1>
      {dogs.map(dog => {
        return (
          <div key={dog.name}>
            <h2>{dog.name}</h2>
            <img className="DogList-img" src={dog.src} alt={`Dog named ${dog.name}`} />
            <p><b>Age: </b>{dog.age}<br/>
            </p>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default DogList;