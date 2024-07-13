import './App.css';
import Landing from './components/Landing/landing';
import Info from './components/info/info';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/PageNotFound/notFound';
import Logo from './Img/Logo.svg'
// import Avatar from './Img/avatar.svg'
function App() {

  return (
    <Router>
      <div className="App">
        <header className="NavBar">
          <Link className="link" to="/">
            <img src={Logo} alt="SVG" />
            Helal Atef</Link>
          <Link className="link" to="/info" >
            {/* <img src={Avatar} alt="SVG" /> */}
            Info</Link>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <div className="footer">
          <p>Designed and Developed by <span>Helal Atef</span></p>
          <p>© Helal Atef · 2024</p>
        </div>

      </div>
    </Router>
  );
}

export default App;
