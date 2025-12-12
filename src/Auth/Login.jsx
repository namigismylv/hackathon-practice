import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();


    if (!email || !password) {
      setMessage("Email və şifrə daxil edilməlidir!");
      setIsSuccess(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessage("Email düzgün formatda deyil!");
      setIsSuccess(false);
      return;
    }

    if (password.length < 6) {
      setMessage("Şifrə ən az 6 simvol olmalıdır!");
      setIsSuccess(false);
      return;
    }

    setMessage("Giriş edilir...");
    setIsSuccess(false);

    try {
      const response = await axios.post(`${BASE_URL}/Auth/login`, {
        email,
        password,
      });

      if (response.data.isSuccess && response.data.data.token) {
        const token = response.data.data.token;
        const userName = response.data.data.userName;

        localStorage.setItem("authToken", token);

        setMessage(`Uğurlu giriş! Xoş gəldiniz, ${userName}.`);
        setIsSuccess(true);

        console.log("Token:", token);
      } else {
        setMessage("Giriş uğursuz oldu. Naməlum xəta.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.[0] ||
        error.response?.data?.data ||
        error.response?.data?.message ||
        "Giriş zamanı xəta baş verdi.";

      setMessage(`Xəta (${error.response?.status || "500"}): ${errorMessage}`);
      setIsSuccess(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>👤 İstifadəçi Girişi (Login)</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Şifrə:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Giriş Et
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "15px", color: isSuccess ? "green" : "red" }}>
          {message}
        </p>
      )}

   
    </div>
  );
};

export default Login;
