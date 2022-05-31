import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import StateComp from './components/StateComp';
import TestUseeffect from './components/TestUseeffect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category' element={<Category />} />
          <Route path='detail/:idMeal' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
