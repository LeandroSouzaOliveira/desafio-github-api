import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Begin from "./routes/Home/Begin";
import Search from "./routes/Search";
import Information from "./routes/Search/Information";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Begin />} />
          <Route path="/begin" element={<Begin />} />
        </Route>
        <Route path="search" element={<Search />} >
          <Route path="information" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
