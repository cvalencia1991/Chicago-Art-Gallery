import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme';
import DetailPage from './components/DetailPage';
import Gallery from './components/Gallery';
import References from './components/References';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/Details" element={<DetailPage />} />
        <Route path="/About me" element={<Aboutme />} />
        <Route path="/References" element={<References />} />
      </Routes>
    </>
  );
}

export default App;
