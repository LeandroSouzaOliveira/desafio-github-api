import "./style.css";
import perfilImg from "../../assets/computer.png";

export default function SearchInfo() {
  return (
    <section>
      <div className="container">
        <div className="information-card">
          <div className="information-card-content">
            <img src={perfilImg} alt="Perfil" />
            <div className="information-form-content">
              <h3>Informações</h3>
              <form className="form-content">
                <div className="form-content-input">Perfil:</div>
                <div className="form-content-input">Seguidores:</div>
                <div className="form-content-input">Localidade:</div>
                <div className="form-content-input">Nome:</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
