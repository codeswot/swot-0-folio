import "./App.css";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./Pages/Home/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App ">
      <NavBar/>
      
     <div>
     <Router>     
      <Routes>
        <Route  element={<HomeScreen/>} path="/">
          
        </Route>
        {/* <Route path="/create">
          <Create />
        </Route> */}
      </Routes>
   
  </Router>
     
     </div>
      
    </div>
    

   
  
  );
}

export default App;
