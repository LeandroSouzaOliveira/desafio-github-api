import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

type FormData = {
  profileUser: string;
};

export default function CardSearch() {
  const [formData, setFormData] = useState<FormData>({ profileUser: "" });
  const [sendUser, setSendUser] = useState<string>("");

  useEffect(() => {
    setSendUser(formData.profileUser);
  }, [formData.profileUser]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, profileUser: event.target.value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="search-card">
        <div className="search-card-content">
          <p>Encontre um perfil Github</p>
          <input
            name="profileUser"
            value={formData.profileUser}
            type="text"
            placeholder="Usuário Github"
            onChange={handleInputChange}
          />
        </div>
        <Link to={`/search/information/${sendUser}`}>
          <button className="begin-card-btn btn" type="submit">
            Encontrar
          </button>
        </Link>
      </div>
    </form>
  );
}
