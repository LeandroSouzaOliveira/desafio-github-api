import "./style.css";
import { ProfileDTO } from "../../models/profile";

type Props = {
  profile: ProfileDTO;
};

export default function CardInfo({ profile }: Props) {
  return (
    <div className="container">
      <div className="information-card">
        <div className="information-card-content">
          <img src={profile.avatar_url} alt="Foto do Perfil" />
          <div className="information-form-content">
            <h3>Informações</h3>
            <form className="form-content">
              <div className="form-content-input">Perfil: {profile?.url}</div>
              <div className="form-content-input">
                Seguidores: {profile?.followers}
              </div>
              <div className="form-content-input">
                Localidade: {profile?.location}
              </div>
              <div className="form-content-input">Nome: {profile?.name}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
