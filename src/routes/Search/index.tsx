import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import CardSearch from "../../components/CardSearch";

export default function Search() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <CardSearch />
        </section>
      </main>
      <Outlet />
    </>
  );
}
