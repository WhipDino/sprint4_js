import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import DadosComponentes from './components/DadosComponentes';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<DadosComponentes />} />
      </Routes>
    </Router>
  );
}
