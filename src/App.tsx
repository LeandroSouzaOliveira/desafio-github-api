import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Begin from "./routes/Home/Begin";
import Search from "./routes/Search";
import Information from "./routes/Search/Information";
import NotFound from "./routes/Search/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Begin />} />
        </Route>
        <Route path="search" element={<Search />} >
          <Route path="information" element={<Information />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
