import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Screens/login';
import Dashboard from './Screens/dashboard';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
     </BrowserRouter>
  )
}

export default App;
