import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

// import Footer from "./components/Common/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='' element={""} />
          <Route path='' element={""} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
}

export default App;
