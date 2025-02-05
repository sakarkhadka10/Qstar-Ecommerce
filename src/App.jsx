import { Slide, ToastContainer } from "react-toastify";
import "./App.css";
import RouterSetup from "./Router/RouterSetup";
import { BrowserRouter } from "react-router-dom";
import DesktopNav from "./components/Desktop/DesktopNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="hidden md:block">{/* <DesktopNav /> */}</div>
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
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
