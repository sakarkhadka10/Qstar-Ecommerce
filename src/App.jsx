import { Slide, ToastContainer } from "react-toastify";
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />

        <RouterSetup />
      </BrowserRouter>
    </>
  );
}

export default App;
