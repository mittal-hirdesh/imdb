
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './page/home/home.jsx';
import MovieList from './components/movie_list/movielist'
import Movie from './page/movie_detail/movie.jsx';
function App() {
    return(
    <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList/>} ></Route>
                <Route path="/*"element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div> 
    );
}

export default App
 