import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "30px 20px",
        background: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>
        © {new Date().getFullYear()} Comunidade Vila Moraes
      </p>

      <p>
        Juntos construindo uma comunidade melhor.
      </p>

      <div>
        <Link
          to="/politica-privacidade"
          style={{
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}

export default Footer;