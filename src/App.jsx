import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export function App() {
  const Home = () => <h1>Home</h1>;
  const Movie = () => <h1>Movie</h1>;
  const NotFound = () => <h1>404 - Not Found</h1>;
  return (
    <Router>
      <header>
        {/* <h1 className={styles.title}>Movies</h1> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/movie">Movie</Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie" element = {<Movie/>} ></Route>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
