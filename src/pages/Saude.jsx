import { Link } from "react-router-dom";

function Saude() {
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

      {/* TOPO */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px"
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "15px",
            color: "#2196f3"
          }}
        >
          🩺 Saúde na Comunidade
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8"
          }}
        >
          A comunidade Vila Moraes receberá uma importante
          ação social com participação de profissionais da saúde
          e apoio do SUS, promovendo atendimento, orientação
          e cuidado para os moradores.
        </p>
      </div>

      {/* CARD PRINCIPAL */}
      <div
        style={{
          background: "#1f1f1f",
          borderRadius: "20px",
          overflow: "hidden",
          maxWidth: "1100px",
          margin: "0 auto",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}
      >

        {/* IMAGEM */}
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
          alt="Ação Social de Saúde"
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover"
          }}
        />

        {/* CONTEÚDO */}
        <div style={{ padding: "30px" }}>

          <h2
            style={{
              color: "#2196f3",
              marginBottom: "20px"
            }}
          >
            💙 Atendimento e Orientação
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.9",
              marginBottom: "20px"
            }}
          >
            A iniciativa busca aproximar os moradores
            do acesso à saúde através de ações comunitárias,
            orientações preventivas e atendimento social.
          </p>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.9",
              marginBottom: "20px"
            }}
          >
            Profissionais voluntários estarão presentes
            para auxiliar a população com informações,
            acolhimento e cuidados básicos de saúde.
          </p>

          {/* LISTA */}
          <div
            style={{
              background: "#181818",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "25px"
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              ✅ Serviços previstos
            </h3>

            <ul
              style={{
                color: "#ccc",
                lineHeight: "2"
              }}
            >
              <li>🩺 Orientações de saúde</li>
              <li>💉 Avaliações básicas</li>
              <li>❤️ Atendimento comunitário</li>
              <li>📋 Informações sobre SUS</li>
              <li>👨‍⚕️ Apoio de profissionais voluntários</li>
            </ul>
          </div>

          {/* BOTÕES */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px"
            }}
          >

            <a
              href="https://wa.me/5511956934179"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25d366",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              WhatsApp →
            </a>

            <Link
              to="/"
              style={{
                background: "#2196f3",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Voltar ←
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Saude;