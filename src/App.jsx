import "./App.css";
import NavBar from "./components/NavBar";
import RouterSetup from "./Router/RouterSetup";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <div className="hidden md:block">
          <NavBar />
        </div>

        <RouterSetup />
      </BrowserRouter>
    </>
  );
}

export default App;
