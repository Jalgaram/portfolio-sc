import './App.scss';
import Intro from './components/Intro';
import About_me from './components/About_me';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <About_me />
      <Contact />
    </div>
  );
}

export default App;
