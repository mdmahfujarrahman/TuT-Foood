import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
      <div className="container mx-auto app">
          <Header></Header>

          <Routes>
              <Route path="/" element={<Restaurant/>}></Route>
              <Route path="/about" element={<About />}></Route>
          </Routes>
      </div>
  );
}

export default App;
