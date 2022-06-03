import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Earn from "./components/Earn";
import Exchange from "./components/Exchange";
import LicensesandRegistrations from "./components/LicensesandRegistrations";
import Prime from "./components/Prime";
import Security from "./components/Security";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/earn" element={<Earn />}></Route>
          <Route exact path="/exchange" element={<Exchange />}></Route>
          <Route
            exact
            path="/licensesandregistrations"
            element={<LicensesandRegistrations />}
          ></Route>
          <Route exact path="/prime" element={<Prime />}></Route>
          <Route exact path="/security" element={<Security />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
