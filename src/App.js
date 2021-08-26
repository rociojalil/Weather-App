
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">         
      <BrowserRouter>
      <Route exact path="/home" component={Home} />
      </BrowserRouter>
 
      <br />
    </div>
  );
}

export default App;
