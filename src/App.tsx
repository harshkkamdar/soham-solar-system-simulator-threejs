import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import Portfolio from './pages/Portfolio';
import Providers from './Providers';

function App() {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route path="/solar-system" element={
            <div className='w-screen h-screen overflow-hidden'>
              <SolarSystem />
            </div>
          } />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Providers>
    </Router>
  );
}

export default App;