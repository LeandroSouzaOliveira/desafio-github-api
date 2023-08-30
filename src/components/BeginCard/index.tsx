import Button from '../Button';
import './style.css';

export default function BeginCard() {
  return (
    <main>
      <section className="container">
        <div className="begin-card">
          <div className="begin-card-content">
            <h1>Desafio Github API</h1>
            <h3>DevSuperior - Escola de programação</h3>
          </div>
          <Button />
        </div>
      </section>
    </main>
  );
}
