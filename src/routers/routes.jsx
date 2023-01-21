import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productosconfig } from "../pages/Productosconfig";
import { Home } from "../pages/Home";
import { Navbarbotton } from "../Components/Navbarbotton";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <div className="leftMenu">
        <Navbarbotton />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba" element={<Productosconfig />} />
        
      </Routes>
    </BrowserRouter>
  );
}
