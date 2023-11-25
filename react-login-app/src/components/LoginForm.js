import React, { useState } from "react";
import Input from "./input";
import Button from "./Button";
import firebase from "../firebase"; // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      // Lógica de autenticación con Firebase
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Si el inicio de sesión es exitoso, podrías redirigir a otra página o realizar otras acciones
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2> Login </h2>{" "}
      <Input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <Input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <Button onClick={handleLogin} disabled={loading}>
        {" "}
        {loading ? "Logging In..." : "Login"}{" "}
      </Button>{" "}
      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          {" "}
          {error}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default LoginForm;
