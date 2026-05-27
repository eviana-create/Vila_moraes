import { Link } from "react-router-dom";

import HortaInteracoes from "../components/HortaInteracoes";
import LikeButton from "../components/LikeButton";

/* FOTOS */
import foto1 from "../assets/horta/foto1.jpeg";
import foto2 from "../assets/horta/foto2.jpeg";
import foto3 from "../assets/horta/foto3.jpeg";
import foto4 from "../assets/horta/foto4.jpeg";
import foto5 from "../assets/horta/foto5.jpeg";

function Horta() {
  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh",
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

        <img
          src={foto3}
          alt="Horta Comunitária"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)"
          }}
        />

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
              color: "#4caf50"
            }}
          >
            🌱 Horta Comunitária
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#eee",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8"
            }}
          >
            Cultivando alimentos, esperança e união
            para fortalecer a comunidade Vila Moraes.
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
            marginBottom: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}
        >

          <h2
            style={{
              color: "#4caf50",
              fontSize: "35px",
              marginBottom: "20px"
            }}
          >
            🌿 Sobre o Projeto
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "18px"
            }}
          >
            A horta comunitária da Vila Moraes representa união,
            sustentabilidade e cuidado com a comunidade.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "18px"
            }}
          >
            O projeto reúne moradores, voluntários e parceiros
            em ações que incentivam alimentação saudável,
            consciência ambiental e fortalecimento dos laços
            comunitários.
          </p>

          <br />

          <p
            style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "18px"
            }}
          >
            Além do cultivo de alimentos naturais,
            a iniciativa também promove educação ambiental
            e integração social entre jovens e famílias.
          </p>

        </section>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            marginBottom: "50px"
          }}
        >

          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >

            <h2 style={{ color: "#4caf50" }}>
              🥬 Alimentação Saudável
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Produção de alimentos naturais
              para incentivar hábitos mais saudáveis.
            </p>

          </div>

          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >

            <h2 style={{ color: "#ff9800" }}>
              🤝 Trabalho Coletivo
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              A comunidade unida trabalhando
              em conjunto pelo bem coletivo.
            </p>

          </div>

          <div
            style={{
              background: "#1f1f1f",
              padding: "25px",
              borderRadius: "18px",
              textAlign: "center"
            }}
          >

            <h2 style={{ color: "#2196f3" }}>
              🌎 Sustentabilidade
            </h2>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.8"
              }}
            >
              Incentivo à preservação ambiental
              e consciência ecológica.
            </p>

          </div>

        </div>

        {/* FEED COMUNITÁRIO */}
        <section
          style={{
            marginBottom: "60px"
          }}
        >

          <h2
            style={{
              fontSize: "35px",
              marginBottom: "30px",
              color: "#4caf50",
              textAlign: "center"
            }}
          >
            🌱 Feed da Horta
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px"
            }}
          >

            {[
              {
                foto: foto1,
                usuario: "Projeto Horta",
                texto:
                  "União da comunidade em mais uma ação especial 🌿",
                likes: 124,
                comentarios: 18
              },

              {
                foto: foto2,
                usuario: "Voluntários",
                texto:
                  "Colheita realizada com sucesso 🥬❤️",
                likes: 210,
                comentarios: 34
              },

              {
                foto: foto3,
                usuario: "Empresa Parceira",
                texto:
                  "Profissionais ensinando sobre sustentabilidade 🌎",
                likes: 89,
                comentarios: 12
              },

              {
                foto: foto4,
                usuario: "Comunidade",
                texto:
                  "Plantando esperança para o futuro 🌱",
                likes: 167,
                comentarios: 21
              },

              {
                foto: foto5,
                usuario: "Horta Solidária",
                texto:
                  "Mais um dia incrível de trabalho coletivo 🤝",
                likes: 301,
                comentarios: 45
              }

            ].map((post, index) => (

              <div
                key={index}
                style={{
                  background: "#1f1f1f",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
                }}
              >

                {/* TOPO */}
                <div
                  style={{
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}
                >

                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "#4caf50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold"
                    }}
                  >
                    🌱
                  </div>

                  <div>

                    <h3
                      style={{
                        margin: 0,
                        fontSize: "17px"
                      }}
                    >
                      {post.usuario}
                    </h3>

                    <span
                      style={{
                        color: "#aaa",
                        fontSize: "14px"
                      }}
                    >
                      Vila Moraes
                    </span>

                  </div>

                </div>

                {/* FOTO */}
                <img
                  src={post.foto}
                  alt="Postagem"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover"
                  }}
                />

                {/* TEXTO */}
                <div
                  style={{
                    padding: "18px"
                  }}
                >

                  <p
                    style={{
                      color: "#ddd",
                      lineHeight: "1.7"
                    }}
                  >
                    {post.texto}
                  </p>

                  {/* AÇÕES */}
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginTop: "15px",
                      color: "#bbb",
                      fontSize: "15px"
                    }}
                  >

                    <LikeButton postId={`post-${index}`} />

                    <span
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      📤 Compartilhar
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* INTERAÇÕES FIREBASE */}
        <HortaInteracoes />

        {/* NÚMEROS */}
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
                color: "#4caf50"
              }}
            >
              +500
            </h2>

            <p style={{ color: "#ccc" }}>
              Hortaliças Cultivadas
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
                color: "#ff9800"
              }}
            >
              +100
            </h2>

            <p style={{ color: "#ccc" }}>
              Famílias Impactadas
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

          {/*}
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
            Participar do Projeto →
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
            */}
        </div>

      </div>
    </div>
  );
}

export default Horta;