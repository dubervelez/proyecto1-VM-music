import './styles/App.scss';
import Login from "./components/Login";
import Index from './pages/Index';
import Admin from './pages/Admin';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
