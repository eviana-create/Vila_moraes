import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* IMPORTS DAS FOTOS */
import foto1 from "../assets/marmitas/foto1.jpeg";
import foto2 from "../assets/marmitas/foto2.jpeg";
import foto3 from "../assets/marmitas/foto3.jpeg";
import foto4 from "../assets/marmitas/foto4.jpeg";
import foto5 from "../assets/marmitas/foto5.jpeg";
import foto6 from "../assets/marmitas/foto6.jpeg";
import foto7 from "../assets/marmitas/foto7.jpeg";
import foto8 from "../assets/marmitas/foto8.jpeg";

/* IMPORT DO VIDEO */
import videoMarmita from "../assets/marmitas/marmita-solidaria.mp4";

function Marmitas() {

  const [imagemAberta, setImagemAberta] = useState(null);

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
          src={foto1}
          alt="Projeto Marmita Solidária"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.45)"
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
            marginBottom: "50px"
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
            📸 Ações Solidárias do Projeto
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
          >

            {[
              foto1,
              foto2,
              foto3,
              foto4,
              foto5,
              foto6,
              foto7,
              foto8
            ].map((foto, index) => (

              <SwiperSlide key={index}>

                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "18px",
                    background: "#1f1f1f",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
                  }}
                >

                  <img
                    src={foto}
                    alt={`Ação Solidária ${index + 1}`}
                    onClick={() => setImagemAberta(foto)}
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                  />

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </section>

        {/* VÍDEO */}
        <section
          style={{
            marginBottom: "50px"
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
            🎥 Vídeo da Ação
          </h2>

          <div
            style={{
              background: "#1f1f1f",
              padding: "20px",
              borderRadius: "20px"
            }}
          >

            <video
              controls
              width="100%"
              preload="metadata"
              style={{
                borderRadius: "15px",
                maxHeight: "700px",
                objectFit: "cover"
              }}
            >
              <source
                src={videoMarmita}
                type="video/mp4"
              />

              Seu navegador não suporta vídeo.
            </video>

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
            href="https://wa.me/5511953013378"
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

      {/* MODAL FOTO */}
      {imagemAberta && (

        <div
          onClick={() => setImagemAberta(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px"
          }}
        >

          <img
            src={imagemAberta}
            alt="Imagem ampliada"
            style={{
              maxWidth: "95%",
              maxHeight: "95%",
              borderRadius: "15px"
            }}
          />

        </div>

      )}

    </div>
  );
}

export default Marmitas;