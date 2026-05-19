import { Link } from "react-router-dom";

function ProjetoCrianca() {
  return (
    <div
      style={{
        background: "#121212",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial",
        paddingBottom: "50px"
      }}
    >

      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: "500px",
          overflow: "hidden"
        }}
      >

        {/* IMAGEM */}
        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop"
          alt="Projeto Um Dia de Criança"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)"
          }}
        />

        {/* TEXTO */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "90%"
          }}
        >
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "20px",
              color: "#fff"
            }}
          >
            🎈 Projeto Um Dia de Criança
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#ddd",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8"
            }}
          >
            Transformando um simples dia em uma lembrança
            inesquecível para as crianças da comunidade.
          </p>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >

        {/* HISTÓRIA */}
        <section
          style={{
            background: "#1f1f1f",
            padding: "35px",
            borderRadius: "20px",
            marginBottom: "35px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}
        >
          <h2
            style={{
              color: "#4caf50",
              marginBottom: "20px",
              fontSize: "35px"
            }}
          >
            ❤️ Como Tudo Começou
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            O Projeto Um Dia de Criança nasceu do sonho
            de amigos que cresceram juntos na comunidade
            Vila Moraes desde os anos 90.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            Unidos pela amizade, pelo carinho com a comunidade
            e pela vontade de proporcionar alegria às crianças,
            o grupo transformou um sonho em realidade.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            Com apoio de moradores, voluntários e parceiros,
            o projeto leva diversão, alimentação, presentes
            e momentos especiais que ficam marcados na memória
            de muitas famílias.
          </p>
        </section>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            marginBottom: "40px"
          }}
        >

          {/* CARD */}
          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: "#ff9800" }}>
              🎁 Presentes
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Distribuição de brinquedos,
              doces e lembranças para
              as crianças da comunidade.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: "#2196f3" }}>
              🎨 Recreação
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Brincadeiras, atividades,
              música e diversão para criar
              momentos inesquecíveis.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: "#4caf50" }}>
              ❤️ União
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              O projeto fortalece os laços
              entre moradores, famílias e
              voluntários da comunidade.
            </p>
          </div>

        </div>

        {/* GALERIA */}
        <section
          style={{
            marginBottom: "40px"
          }}
        >
          <h2
            style={{
              fontSize: "35px",
              marginBottom: "25px",
              color: "#ff9800",
              textAlign: "center"
            }}
          >
            📸 Momentos do Projeto
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

          </div>
        </section>

        {/* CONTADOR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "50px"
          }}
        >

          <div
            style={{
              background: "#1f1f1f",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ fontSize: "45px", color: "#4caf50" }}>
              +300
            </h2>

            <p style={{ color: "#ccc" }}>
              Crianças Impactadas
            </p>
          </div>

          <div
            style={{
              background: "#1f1f1f",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ fontSize: "45px", color: "#ff9800" }}>
              +50
            </h2>

            <p style={{ color: "#ccc" }}>
              Voluntários
            </p>
          </div>

          <div
            style={{
              background: "#1f1f1f",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >
            <h2 style={{ fontSize: "45px", color: "#2196f3" }}>
              +10
            </h2>

            <p style={{ color: "#ccc" }}>
              Anos de Projeto
            </p>
          </div>

        </div>

        {/* BOTÕES */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >

          <a
            href="https://wa.me/5511950968892"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25d366",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Quero Ajudar →
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjetoCrianca;