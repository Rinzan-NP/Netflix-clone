import './App.css'
import Banner from './components/Banner/Banner'
import MovieRow from './components/MovieRow/MovieRow'
import Navbar from './components/Navbar/Navbar'
import {baseUrl, baseImage, api_key} from '../../constants/constant'

function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <MovieRow title="Trending"/>
    </>
  )
}

export default App
