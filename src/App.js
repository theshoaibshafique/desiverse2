import './App.css';
import Home from './components/Home';
import MidSection from './components/MidSection';
import Register from './components/Register';
import UniqueAvatars from './components/UniqueAvatars';

function App() {
  return (
    <div className="App">
      <Home />
      <MidSection />
      <UniqueAvatars />
      <Register />
    </div>
  );
}

export default App;
