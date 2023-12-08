import './App.css'
import Banner from './components/Banner/Banner'
import MovieRow from './components/MovieRow/MovieRow'
import Navbar from './components/Navbar/Navbar'
import {trending} from './urls'


function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <MovieRow title="Trending" url={trending}/>
    </>
  )
}

export default App
