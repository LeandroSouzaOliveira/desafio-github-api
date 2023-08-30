import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Begin from "./routes/Home/Begin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Begin />} />
          <Route path="/begin" element={<Begin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
