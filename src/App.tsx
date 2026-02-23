import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Process from './pages/Process';
import BusinessModel from './pages/BusinessModel';
import Finder from './pages/Finder';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/finder" element={<Finder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
