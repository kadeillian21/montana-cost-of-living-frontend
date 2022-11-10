import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
import { CitiesShow } from "./CitiesShow";
import { MontanaCitiesMap } from "./MontanaCitiesMap";
import { CitiesIndex } from "./CitiesIndex";

function App() {
  return (
    <BrowserRouter>
      <Header className="sticky content" />
      <Routes>
        <Route path="/cities" element={<CitiesIndex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cities/:cityId" element={<CitiesShow />} />
        <Route path="/" element={<MontanaCitiesMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
