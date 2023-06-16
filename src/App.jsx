// import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";



export function App() {
  const NotFound = () => <h1>404 - Not Found</h1>;
  return (
    <Router>
      <header>
      <Link to="/"><h1 className={styles.title}> Movies </h1></Link>
        
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element = {<MovieDetails/>} ></Route>
          <Route path="/" element = {<LandingPage/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
