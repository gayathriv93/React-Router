import './App.css';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />

        <Route path="Signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
