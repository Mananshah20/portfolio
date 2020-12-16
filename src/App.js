
import './App.css';

import Projects from "./components/Projects"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Layer1 from "./components/Layer1"
import Section1 from "./components/Section1"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="App">
      <Section1></Section1>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
