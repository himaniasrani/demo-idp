import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorize from './components/Authorize/Authorize';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chameleon Idp Demo App.
        </p>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<p>Home</p>}>
          </Route>
          <Route path="/authorize" element={<Authorize/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
