import { Register, Login, Main } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;