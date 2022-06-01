import Login from './components/Login'
import Register from './components/Register'
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
