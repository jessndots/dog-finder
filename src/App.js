import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './Nav/Nav';
import DogDetails from './DogDetails/DogDetails';
import DogList from './DogList/DogList';

import duke from './pics/duke.jpg'
import perry from './pics/perry.jpg'
import tubby from './pics/tubby.jpg'
import whiskey from './pics/whiskey.jpg'


function App({dogs}) {
  const names = dogs.map(dog => dog.name)
  return (
    <div>
      <Nav names={names}/>
      <Switch>
        <Route path="/dogs/:name" >
          <DogDetails dogs={dogs}/>
        </Route>
        <Route path="/dogs" >
          <DogList  dogs={dogs}/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>

  );

}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
