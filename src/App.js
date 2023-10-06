import Movies from './Movies'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from "./MovieDetails"

import fast from './images/fast.jpg'
import thor from './images/thor.jpg'
import spider from './images/spiderMan.webp'
import jurassic from './images/jurassic.webp'
import maveric from './images/maveric.webp'
import jumanji from './images/jumanji.webp'
import venom from './images/venom.webp'
import teenage from './images/teenage.webp'


var imageArray = [
  {
    id: 1,
    imag: fast,
    moviename: "Fast & Furious 5",
    description: "Vin Diesel, Paul Walker and a reunion of franchise all-stars are hunted across Rio de Janeiro by a relentless federal agent (Dwayne Johnson) as they attempt an insane $100 million heist."

  },
  {
    id: 2,
    imag: thor,
    moviename: "Thor",
    description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."
  },
  {
    id: 3,
    imag: spider,
    moviename: "Spider-Man: Far From Home",
    description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."
  },
  {
    id: 4,
    imag: jurassic,
    moviename: "Jurassic World: Fallen Kingdom",
    description: "Owen and Claire return to the ruins of the Jurassic World theme park to rescue the remaining dinosaurs from a looming volcanic extinction."
  },
  {
    id: 5,
    imag: maveric,
    moviename: "Top Gun: Maverick",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those"
  },
  {
    id: 6,
    imag: jumanji,
    moviename: "Jumanji: The Next Level",
    description: "In Jumanji:The Next Level, the gang is back (Dwayne Johnson, Jack Black, Kevin Hart and Karen Gillan) but the game has changed."
  },
  {
    id: 7,
    imag: venom,
    moviename: "Venom",
    description: "Tom Hardy stars as the lethal protector and anti-hero Venom - one of Marvel's most enigmatic and complex characters."
  },
  {
    id: 8,
    imag: teenage,
    moviename: "Teenage Mutant Ninja Turtles",
    description: "The Teenage Mutant Ninja Turtles are bigger and better than ever in this blockbuster hit loaded with nonstop action and laughs! When New York City is in trouble, it's up to these four ninja-fighting, pizza-loving brothers to save it. Aided by determined reporter April O'Neil (Megan Fox) and their wise master Splinter, these unlikely heroes must face their ultimate nemesis - the evil Shredder."
  }
]

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Movies imageArray={imageArray} />} ></Route>
        <Route path='/details/:id' element={<MovieDetails imageArray={imageArray} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
