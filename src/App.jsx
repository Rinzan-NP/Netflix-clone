import "./App.css";
import Banner from "./components/Banner/Banner";
import MovieRow from "./components/MovieRow/MovieRow";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/footer'
import {
  trending,
  action,
  ComedyMovies,
  Documentaries,
  HorrorMovies,
  RomanceMovies,
  ActionMovies,
} from "./urls";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <MovieRow title="Trending" url={trending} />
      <MovieRow title="Actions" url={action} />
      <MovieRow title="Comedy Movies" url={ComedyMovies} />
      <MovieRow title="Documentaries" url={Documentaries} />
      <MovieRow title="Horror Movies" url={HorrorMovies} />
      <MovieRow title="Romance Movies" url={RomanceMovies} />
      <MovieRow title="Action Movies" url={ActionMovies} />
      <Footer/>
    </>
  );
}

export default App;
