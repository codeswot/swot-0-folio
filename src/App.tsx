import "./App.css";
import { IntroWindow } from "./components/IntroWindow";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
     <div className="body">
     <IntroWindow/>
      <h1>Hello </h1>
      <h1>Hello </h1>
      <h1>Hello </h1>
     </div>
      
    </div>
  );
}

export default App;
