import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Process from './pages/Process';
import Finder from './pages/Finder';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <FloatingContact />
      <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/finder" element={<Finder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
