import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productosconfig } from "../pages/Productosconfig";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productosconfig />} />
      </Routes>
    </BrowserRouter>
  );
}
