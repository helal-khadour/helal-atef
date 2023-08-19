import './App.css';
import Landing from './components/Landing/landing';
import Info from './components/info/info';
import BakerDashboard from './components/projects/Details/BakerDashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/PageNotFound/notFound';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="NavBar">
          <Link className="link" to="/">Helal Atef</Link>
          <Link className="link" to="/info" >Info</Link>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project/1" element={<BakerDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <div className="footer">
          <p>Designed and Developed by <span>Helal Atef</span></p>
          <p>© Helal Atef · 2023</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
