import { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });

        setLoading(false);
        setLogged(true);
      } else {
        setLoading(false);
      }
    });
  }, []);

  function Register(name, email, password) {
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    setAuthLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        let data = {
          uid: user.uid,
          name: name,
          email: email,
          createAt: new Date(),
        };

        await setDoc(doc(db, "users", user.uid), data);

        setUser(data);
        setLogged(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setAuthLoading(false);
      });
  }

  function Login(email, password) {
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }
    setAuthLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await getDoc(doc(db, "users", user.uid)).then((newData) => {
          let data = {
            uid: user.uid,
            name: newData.data().name,
            email: email,
          };
          setUser(data);
          setLogged(true);
          setLoading(false);
          setAuthLoading(false);
        });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setAuthLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, Register, Login, logged, loading, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
