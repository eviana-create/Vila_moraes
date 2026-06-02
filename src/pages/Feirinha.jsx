import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

/* SUBSTITUA PELAS SUAS FOTOS */
import foto1 from "../assets/feirinha/foto1.jpeg";
import foto2 from "../assets/feirinha/foto2.jpeg";
import foto3 from "../assets/feirinha/foto3.jpeg";
import foto4 from "../assets/feirinha/foto4.jpeg";
import foto5 from "../assets/feirinha/foto5.jpeg";
import foto6 from "../assets/feirinha/foto6.jpeg";

function Feirinha() {

  const fotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6
  ];

  const [likesFotos, setLikesFotos] = useState(() => {
    return JSON.parse(
      localStorage.getItem("likesFotosFeirinha")
    ) || Array(fotos.length).fill(0);
  });

  const [comentariosFotos, setComentariosFotos] =
    useState(() => {
      return JSON.parse(
        localStorage.getItem("comentariosFotosFeirinha")
      ) || Array(fotos.length)
        .fill(null)
        .map(() => []);
    });

  const [nome, setNome] = useState("");
  const [comentario, setComentario] =
    useState("");

  const [fotoSelecionada, setFotoSelecionada] =
    useState(null);

  function curtirFoto(index) {

    const novosLikes = [...likesFotos];

    novosLikes[index] += 1;

    setLikesFotos(novosLikes);

    localStorage.setItem(
      "likesFotosFeirinha",
      JSON.stringify(novosLikes)
    );

  }

  function abrirComentario(index) {

    setFotoSelecionada(index);

  }

  function enviarComentario() {

    if (
      fotoSelecionada === null ||
      !nome.trim() ||
      !comentario.trim()
    ) {
      alert(
        "Preencha nome e comentário"
      );
      return;
    }

    const novoComentario = {
      nome,
      comentario,
      data:
        new Date().toLocaleDateString(
          "pt-BR"
        )
    };

    const novaLista = [...comentariosFotos];

    novaLista[fotoSelecionada] = [
      novoComentario,
      ...novaLista[fotoSelecionada]
    ];

    setComentariosFotos(novaLista);

    localStorage.setItem(
      "comentariosFotosFeirinha",
      JSON.stringify(novaLista)
    );

    setNome("");
    setComentario("");

  }

  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh"
      }}
    >

      <Navbar />

      <Container>

        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "15px"
          }}
        >
          🛍️ Feirinha Solidária
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            lineHeight: "1.8"
          }}
        >
          Registro da Feirinha Solidária da
          Comunidade Vila Moraes.
          Compartilhe sua experiência,
          deixe seu comentário e acompanhe
          os momentos deste importante evento.
        </p>

{/* ESTATÍSTICAS DA GALERIA */}

<div
  style={{
    background: "#1f1f1f",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    marginBottom: "30px"
  }}
>
  <h3>
    📸 {fotos.length} Fotos
  </h3>

  <p style={{ color: "#ccc" }}>
    ❤️ {likesFotos.reduce((a, b) => a + b, 0)} Curtidas
  </p>

  <p style={{ color: "#ccc" }}>
    💬 {
      comentariosFotos.reduce(
        (total, foto) => total + foto.length,
        0
      )
    } Comentários
  </p>
</div>

        {/* GALERIA */}

        <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px"
  }}
>

  {fotos.map((foto, index) => (

    <div
      key={index}
      style={{
        background: "#1f1f1f",
        borderRadius: "15px",
        overflow: "hidden"
      }}
    >

      <img
  src={foto}
  alt={`Foto ${index + 1}`}
  onClick={() => setFotoSelecionada(index)}
  style={{
    width: "100%",
    height: "280px",
    objectFit: "cover",
    cursor: "pointer"
  }}
/>

      <div
        style={{
          padding: "15px"
        }}
      >

        <button
          onClick={() =>
            curtirFoto(index)
          }
          style={{
            background: "#e91e63",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          ❤️ {likesFotos[index]}
        </button>

        <button
          onClick={() =>
            abrirComentario(index)
          }
          style={{
            marginLeft: "10px",
            background: "#2196f3",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          💬 {
            comentariosFotos[index]
              ?.length || 0
          }
        </button>

      </div>

      <div
        style={{
          padding: "15px"
        }}
      >

        {comentariosFotos[index]
          ?.slice(0, 3)
          .map((c, i) => (

            <div
              key={i}
              style={{
                marginBottom: "10px",
                color: "#ccc"
              }}
            >
              <strong>
                {c.nome}
              </strong>

              <br />

              {c.comentario}
            </div>

          ))}

      </div>

    </div>

  ))}

</div>

{fotoSelecionada !== null && (

  <div
    style={{
      background: "#1f1f1f",
      padding: "25px",
      borderRadius: "20px",
      marginTop: "30px"
    }}
  >

    <h2>
  💬 Comentários da Foto {
    fotoSelecionada + 1
  }
</h2>

<p
  style={{
    color: "#ccc",
    marginBottom: "15px"
  }}
>
  Compartilhe sua experiência sobre esta foto.
</p>

    <input
      type="text"
      placeholder="Seu nome"
      value={nome}
      onChange={(e) =>
        setNome(e.target.value)
      }
      style={{
        width: "100%",
        padding: "15px",
        marginTop: "15px",
        borderRadius: "10px",
        border: "none"
      }}
    />

    <textarea
      placeholder="Seu comentário"
      value={comentario}
      onChange={(e) =>
        setComentario(e.target.value)
      }
      rows="4"
      style={{
        width: "100%",
        padding: "15px",
        marginTop: "15px",
        borderRadius: "10px",
        border: "none"
      }}
    />

    <button
      onClick={enviarComentario}
      style={{
        marginTop: "15px",
        background: "#4caf50",
        color: "#fff",
        border: "none",
        padding: "15px 25px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      Enviar Comentário
    </button>

    <button
  onClick={() => setFotoSelecionada(null)}
  style={{
    marginLeft: "10px",
    background: "#666",
    color: "#fff",
    border: "none",
    padding: "15px 25px",
    borderRadius: "10px",
    cursor: "pointer"
  }}
>
  Fechar
</button>

  </div>

)}

      </Container>

      <Footer />

    </div>
  );
}

export default Feirinha;