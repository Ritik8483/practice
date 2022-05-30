import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Class from './components/Class';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Student from './components/Student';
import AddtoCart from './components/AddtoCart';
import { Toaster } from 'react-hot-toast';
import MultiForm from './multiform/MultiForm';
import MainForm from './formPractice/MainForm';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/class' element={<Class/>} />
          <Route path='/student' element={<Student/>} />
          <Route path='/cart' element={<AddtoCart/>} />
          <Route path='/multiform' element={<MultiForm/>} />
          <Route path='/mainForm' element={<MainForm/>} />
          <Route path='*' element={<Navigate to='/home'/>} />
        </Routes>
      </Router>
      <Toaster/>
    </div>
  );
}

export default App;
