import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";

function HortaInteracoes() {

  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  /* CARREGAR COMENTÁRIOS */
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "comentarios_horta"),
      (snapshot) => {

        const lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            ...doc.data()
          });
        });

        setComentarios(lista);
      }
    );

    return () => unsubscribe();

  }, []);

  /* ENVIAR COMENTÁRIO */
  async function enviarComentario() {

    if (!comentario.trim()) return;

    await addDoc(collection(db, "comentarios_horta"), {
      texto: comentario,
      criadoEm: serverTimestamp()
    });

    setComentario("");

  }

  return (
    <section
      style={{
        marginBottom: "60px"
      }}
    >

      <h2
        style={{
          color: "#4caf50",
          fontSize: "35px",
          marginBottom: "25px",
          textAlign: "center"
        }}
      >
        💬 Comentários da Comunidade
      </h2>

      {/* INPUT */}
      <div
        style={{
          background: "#1f1f1f",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px"
        }}
      >

        <textarea
          placeholder="Escreva um comentário..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          style={{
            width: "100%",
            minHeight: "120px",
            background: "#121212",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "15px",
            fontSize: "16px",
            resize: "none",
            outline: "none"
          }}
        />

        <button
          onClick={enviarComentario}
          style={{
            marginTop: "15px",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Enviar Comentário
        </button>

      </div>

      {/* LISTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        {comentarios.map((item) => (

          <div
            key={item.id}
            style={{
              background: "#1f1f1f",
              padding: "20px",
              borderRadius: "15px"
            }}
          >

            <p
              style={{
                color: "#ddd",
                lineHeight: "1.7"
              }}
            >
              {item.texto}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HortaInteracoes;