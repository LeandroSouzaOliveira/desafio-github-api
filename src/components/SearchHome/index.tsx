import Button from "../Button";
import "./style.css";

export default function SearchHome() {
  return (
    <main>
      <section className="container">
        <div className="search-card">
          <div className="search-card-content">
            <p>Encontre um perfil Github</p>
            <input type="text" placeholder="Usuário Github" />
          </div>
            <Button text="Encontrar" />
        </div>
      </section>
    </main>
  );
}
