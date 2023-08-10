import Header from "./Component/Header";
import Home from "./Pages/Home";
import FHome from "./website/FHome";
import AuthProvider from "./context/Authcontext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  var x = null;
  return (
    <>
      <Router>
        <AuthProvider>
          {/* {x == null ? <>  <FHome /> </> : <><Home /></>} */}

          {sessionStorage.getItem("admin_token") ?
            <>
              <Home />
            </>
            :
            <>
              <FHome />
            </>}

        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
