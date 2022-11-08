import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Login } from "./Login";
import { Footer } from "./Footer";
import { CitiesShow } from "./CitiesShow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cities/:cityId" element={<CitiesShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
