import { Link } from "react-router-dom";

/* IMPORT DA IMAGEM LOCAL */
import sabespImg from "../assets/sabesp.png";

function Avisos() {
  const avisos = [
    {
      titulo: "💧 Regularização de Água",
      data: "Urgente",
      descricao:
        "Projeto em parceria com a SABESP para regularização de débitos, instalação de caixas d’água e novos registros para moradores da comunidade. Procurar a Presidente Monica Melchiades na Associação, Rua Nova Jesusalém, Nº ",
      imagem: sabespImg
    },

    {
      titulo: "🎓 Cursos para Jovens",
      data: "Em Andamento",
      descricao:
        "Novas oportunidades de cursos profissionalizantes e ações voltadas à capacitação de jovens da comunidade.",
      imagem:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      titulo: "❤️ Ação Social",
      data: "Em Breve",
      descricao:
        "Ajude o Projeto Criança por um Dia com doações de brinquedos, roupas, ajuda financeira ou voluntariado.",
      imagem:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
    },

    {
      titulo: "🌱 Horta Comunitária",
      data: "02 de Agosto de 2026",
      descricao:
        "A horta comunitária continua crescendo com a participação dos moradores e voluntários da Vila Moraes.",
      imagem:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div
      style={{
        background: "#121212",
        minHeight: "100vh",
        color: "#fff",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      {/* TÍTULO */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "15px"
          }}
        >
          📢 Central de Avisos
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8"
          }}
        >
          Fique por dentro das ações, melhorias,
          projetos sociais, eventos e comunicados
          importantes da comunidade Vila Moraes.
        </p>
      </div>

      {/* LISTA DE AVISOS */}
      <div
        style={{
          display: "grid",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {avisos.map((aviso, index) => (
          <div
            key={index}
            style={{
              background: "#1f1f1f",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}
          >
            {/* IMAGEM */}
            <img
              src={aviso.imagem}
              alt={aviso.titulo}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            {/* CONTEÚDO */}
            <div style={{ padding: "25px" }}>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#4caf50"
                }}
              >
                {aviso.titulo}
              </h2>

              <small
                style={{
                  color: "#999"
                }}
              >
                {aviso.data}
              </small>

              <p
                style={{
                  marginTop: "15px",
                  color: "#ccc",
                  lineHeight: "1.8"
                }}
              >
                {aviso.descricao}
              </p>

              {/* BOTÃO */}
              <Link
                to="/"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  background: "#4caf50",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "15px"
                }}
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avisos;