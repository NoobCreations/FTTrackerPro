import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import '../src/css/mobileHome.css'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path = '/' 
          element = {<Home />}>
        </Route> 
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
