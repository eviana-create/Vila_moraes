import { useEffect, useState } from "react";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot
} from "firebase/firestore";

import { db } from "../firebase";

function LikeButton({ postId }) {

  const [likes, setLikes] = useState(0);
  const [curtido, setCurtido] = useState(false);

  useEffect(() => {

    const ref = doc(db, "likes_horta", postId);

    const unsubscribe = onSnapshot(ref, async (snapshot) => {

      if (snapshot.exists()) {

        setLikes(snapshot.data().likes || 0);

      } else {

        await setDoc(ref, {
          likes: 0
        });

      }

    });

    return () => unsubscribe();

  }, [postId]);

  async function curtir() {

    if (curtido) return;

    const ref = doc(db, "likes_horta", postId);

    await updateDoc(ref, {
      likes: increment(1)
    });

    setCurtido(true);

  }

  return (

    <span
      onClick={curtir}
      style={{
        cursor: "pointer",
        color: curtido ? "#ff4d6d" : "#bbb",
        fontWeight: "bold"
      }}
    >
      ❤️ {likes}
    </span>

  );

}

export default LikeButton;