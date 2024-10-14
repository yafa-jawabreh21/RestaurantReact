import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Chefs from './components/Chefs';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Routes>
        <Route path="/Chefs/#section2" element={<Chefs />} />
      </Routes> */}
    </div>
  );
}

export default App;
