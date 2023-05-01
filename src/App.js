import './App.css';
import MoviePage from './components/MoviePage/MoviePage';
import MoviesList from './components/MoviesList/MoviesList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
