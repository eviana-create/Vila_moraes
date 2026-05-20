import { Link } from "react-router-dom";

function ProjetoPascoa() {
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
          src="https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=1600&auto=format&fit=crop"
          alt="Projeto Páscoa Solidária"
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
              marginBottom: "20px"
            }}
          >
            🐰 Projeto Páscoa Solidária
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
            Levando alegria, carinho e esperança
            para as crianças e famílias da comunidade.
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
              color: "#ff9800",
              marginBottom: "20px",
              fontSize: "35px"
            }}
          >
            ❤️ Sobre o Projeto
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            O Projeto Páscoa Solidária nasceu com o
            objetivo de proporcionar momentos especiais
            para as crianças da comunidade Vila Moraes.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            A ação reúne moradores, voluntários e parceiros
            em uma corrente de solidariedade que leva
            alegria, carinho e esperança através da
            distribuição de chocolates, brincadeiras e atividades.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            Mais do que doces, o projeto entrega
            amor, acolhimento e memórias inesquecíveis
            para muitas famílias da comunidade.
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
              🍫 Chocolates
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Distribuição de ovos de Páscoa
              e doces para as crianças
              da comunidade.
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
            <h2 style={{ color: "#e91e63" }}>
              🎉 Diversão
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Brincadeiras, música e atividades
              especiais para tornar o dia
              ainda mais inesquecível.
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
              ❤️ Solidariedade
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Uma ação construída pela união
              da comunidade e pelo apoio
              de voluntários e parceiros.
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
            📸 Momentos Especiais
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1200&auto=format&fit=crop"
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
            <h2
              style={{
                fontSize: "45px",
                color: "#ff9800"
              }}
            >
              +500
            </h2>

            <p style={{ color: "#ccc" }}>
              Chocolates Distribuídos
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
            <h2
              style={{
                fontSize: "45px",
                color: "#e91e63"
              }}
            >
              +100
            </h2>

            <p style={{ color: "#ccc" }}>
              Crianças Participantes
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
            <h2
              style={{
                fontSize: "45px",
                color: "#4caf50"
              }}
            >
              +30
            </h2>

            <p style={{ color: "#ccc" }}>
              Voluntários
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

          <Link
            to="/"
            style={{
              background: "#2196f3",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Voltar →
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ProjetoPascoa;