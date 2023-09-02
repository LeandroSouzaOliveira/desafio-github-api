import { Link } from "react-router-dom";
import "./style.css";

export default function CardBegin() {
  return (
    <div className="begin-card">
      <div className="begin-card-content">
        <h1>Desafio Github API</h1>
        <h3>DevSuperior - Escola de programação</h3>
      </div>
      <Link to="/search">
        <button className="begin-card-btn btn" type="submit">
          Começar
        </button>
      </Link>
    </div>
  );
}
