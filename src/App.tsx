import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import SolarSystem from './components/SolarSystem';
import Providers from './Providers';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const title = location.pathname === '/solar-system' 
      ? 'Solar System Simulator'
      : 'Aspiring Physics Researcher - Soham Mehta';
    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Providers>
        <TitleManager />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/solar-system" element={<SolarSystem />} />
        </Routes>
      </Providers>
    </Router>
  );
}

export default App;