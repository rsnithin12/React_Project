import "./App.css";
import Loginform from "./project/loginform.js";
import Homepage from "./project/homepage.js";
import Viewpage from "./project/viewpage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/viewpage" element={<Viewpage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
