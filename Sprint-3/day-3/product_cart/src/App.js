import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { TshirtProduct } from "./Pages/TshirtProduct";
import Mobile from "./Pages/MobileProduct";
import { JeansProduct } from "./Pages/JeansProduct";
import LoginPage from "./Pages/LoginPage";
import { AuthRequired } from "./HOC/AuthRequired";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/tshirt"
          element={
            <AuthRequired>
              <TshirtProduct />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/mobile"
          element={
            <AuthRequired>
              <Mobile />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/jeans"
          element={
            <AuthRequired>
              <JeansProduct />
            </AuthRequired>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
