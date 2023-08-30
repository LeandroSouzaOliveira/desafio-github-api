import { Outlet } from "react-router-dom";
import SearchHome from "../../../components/SearchHome";
import Header from "../../../components/Header";

export default function Search() {
  return (
    <>
      <Header />
      <main>
        <section>
          <SearchHome />
        </section>
      </main>
      <Outlet />
    </>
  );
}
