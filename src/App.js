import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workouts' element={<Home />} />
          <Route path='/programs' element={<Home />} />

          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
