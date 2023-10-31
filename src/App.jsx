import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginForm/LoginForm';



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/register" element={<Register />} />  
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />  
    </Router>

  );
}

export default App
