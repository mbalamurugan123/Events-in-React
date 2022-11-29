// import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Main from './pages/main';
import Tec_reg1 from './pages/tec_reg1';
import Tec_reg2 from './pages/tec_reg2';
import Tec_reg3 from './pages/tec_reg3';
import Tec_reg4 from './pages/tec_reg4';
import Tec_reg5 from './pages/tec_reg5';
import Tec_reg6 from './pages/tec_reg6';
import Tec_reg7 from './pages/tec_reg7';
import Tec_reg8 from './pages/tec_reg8';
import Tec_reg9 from './pages/tec_reg9';
import Tec_reg10 from './pages/tec_reg10';
import Reg from './pages/reg';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tec_reg1" element={<Tec_reg1 />} />
        <Route path="/tec_reg2" element={<Tec_reg2 />} />
        <Route path="/tec_reg3" element={<Tec_reg3 />} />
        <Route path="/tec_reg4" element={<Tec_reg4 />} />
        <Route path="/tec_reg5" element={<Tec_reg5 />} />
        <Route path="/tec_reg6" element={<Tec_reg6 />} />
        <Route path="/tec_reg7" element={<Tec_reg7 />} />
        <Route path="/tec_reg8" element={<Tec_reg8 />} />
        <Route path="/tec_reg9" element={<Tec_reg9 />} />
        <Route path="/tec_reg10" element={<Tec_reg10 />} />
        <Route path="/reg" element={<Reg/>}/>
      </Routes>
    </div>
  );
}

export default App;
