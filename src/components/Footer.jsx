import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        background: "#0d0d0d",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #333"
      }}
    >

      <h3
        style={{
          color: "#4caf50",
          marginBottom: "15px"
        }}
      >
        Comunidade Vila Moraes
      </h3>


      <p
        style={{
          color: "#ccc",
          maxWidth: "600px",
          margin: "0 auto 25px auto",
          lineHeight: "1.7"
        }}
      >
        Um espaço dedicado à união dos moradores,
        divulgação de projetos sociais, ações comunitárias
        e fortalecimento da nossa comunidade.
      </p>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <Link
          to="/politica-privacidade"
          style={{
            color: "#4caf50",
            textDecoration: "none"
          }}
        >
          Política de Privacidade
        </Link>


        <a
          href="https://wa.me/5511950968892"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#25d366",
            textDecoration: "none"
          }}
        >
          Contato WhatsApp
        </a>


        <Link
          to="/associacao"
          style={{
            color: "#2196f3",
            textDecoration: "none"
          }}
        >
          Associação
        </Link>


      </div>


      <p
        style={{
          marginTop: "30px",
          fontSize: "13px",
          color: "#777"
        }}
      >
        © {new Date().getFullYear()} Comunidade Vila Moraes.
        Todos os direitos reservados.
      </p>


    </footer>
  );
}

export default Footer;