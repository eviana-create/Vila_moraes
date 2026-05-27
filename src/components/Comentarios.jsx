import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";

import { db } from "../firebase";

function Comentarios({ postId }) {

  const [comentarios, setComentarios] = useState([]);
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");

  useEffect(() => {

    const q = query(
      collection(db, "comentarios"),
      orderBy("data", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const lista = [];

      snapshot.forEach((doc) => {

        const dados = doc.data();

        if (dados.postId === postId) {

          lista.push({
            id: doc.id,
            ...dados
          });

        }

      });

      setComentarios(lista);

    });

    return () => unsubscribe();

  }, [postId]);

  async function enviarComentario() {

    if (!nome || !texto) return;

    await addDoc(collection(db, "comentarios"), {
      nome,
      texto,
      postId,
      data: serverTimestamp()
    });

    setNome("");
    setTexto("");

  }

  return (

    <div
      style={{
        marginTop: "20px"
      }}
    >

      <h3
        style={{
          marginBottom: "15px",
          color: "#4caf50"
        }}
      >
        💬 Comentários
      </h3>

      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "10px",
          border: "none",
          background: "#1f1f1f",
          color: "#fff"
        }}
      />

      <textarea
        placeholder="Escreva um comentário..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          width: "100%",
          height: "100px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "#1f1f1f",
          color: "#fff",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={enviarComentario}
        style={{
          background: "#4caf50",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Enviar Comentário
      </button>

      <div
        style={{
          marginTop: "25px"
        }}
      >

        {comentarios.map((comentario) => (

          <div
            key={comentario.id}
            style={{
              background: "#1f1f1f",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "15px"
            }}
          >

            <h4
              style={{
                marginBottom: "8px",
                color: "#4caf50"
              }}
            >
              {comentario.nome}
            </h4>

            <p
              style={{
                color: "#ccc",
                lineHeight: "1.7"
              }}
            >
              {comentario.texto}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Comentarios;