import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <div className="App" >
          <Home/>
      </div>
      <div class="fixed left-0 right-0 top-0 bottom-0 bg-zinc-950 -z-50"></div>
    </div>
  );
}

export default App;