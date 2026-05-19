import { Link } from "react-router-dom";

function Marmitas() {
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
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
          alt="Projeto Marmita Solidária"
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
            🍛 Marmita Solidária
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
            Alimentando famílias, fortalecendo a solidariedade
            e levando esperança para a comunidade.
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

        {/* SOBRE */}
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
            O projeto Marmita Solidária nasceu da união
            entre moradores, voluntários e parceiros da
            comunidade Vila Moraes com o objetivo de ajudar
            famílias em situação de vulnerabilidade.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            A iniciativa realiza a distribuição de refeições
            para pessoas que precisam de apoio, levando não
            apenas alimento, mas também acolhimento,
            dignidade e esperança.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "17px"
            }}
          >
            O projeto representa a força da solidariedade
            e do cuidado coletivo dentro da comunidade.
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
              🍲 Alimentação
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Distribuição de refeições
              para famílias e moradores
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
            <h2 style={{ color: "#4caf50" }}>
              ❤️ Solidariedade
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Uma corrente do bem formada
              por voluntários e parceiros
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
            <h2 style={{ color: "#2196f3" }}>
              🤝 União
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              O projeto fortalece os laços
              entre moradores e promove
              apoio coletivo.
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
            📸 Ações Solidárias
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2e?q=80&w=1200&auto=format&fit=crop"
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

        {/* CONTADORES */}
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
              +1000
            </h2>

            <p style={{ color: "#ccc" }}>
              Marmitas Distribuídas
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
              +80
            </h2>

            <p style={{ color: "#ccc" }}>
              Famílias Ajudadas
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
                color: "#2196f3"
              }}
            >
              +40
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

        </div>

      </div>
    </div>
  );
}

export default Marmitas;