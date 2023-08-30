import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <main>
      <section className="container">
        <Link to="/search">
          <button className="begin-card-btn" type="submit">
            {text}
          </button>
        </Link>
      </section>
    </main>
  );
}
