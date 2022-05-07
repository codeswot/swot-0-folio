import "./App.css";
import { IntroWindow } from "./components/IntroWindow";
import { NavBar } from "./components/NavBar";
import { HiChevronDoubleDown } from 'react-icons/hi';


function App() {
  return (
    <div className="App">
      <NavBar />
     <div className="body">
       <div className="intro-section">
       <IntroWindow/>
       <div className="scroll-indicator"> <HiChevronDoubleDown/> </div>
       </div>
       <div className="about-section"></div>
       <div className="experience-section"></div>
        <div className="projects-section"></div>
     </div>
      
    </div>
  );
}

export default App;
