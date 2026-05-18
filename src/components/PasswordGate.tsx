// src/components/PasswordGate.tsx
import { useState, useEffect } from "react";

const PASSWORD = "JP!2026Lp#June";
const STORAGE_KEY = "lp_auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "ok") {
      setAuthed(true);
    }
  }, []);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "ok");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      fontFamily: "sans-serif",
    }}>
      <div style={{
        border: "4px solid black",
        padding: "48px",
        maxWidth: "400px",
        width: "100%",
        boxShadow: "8px 8px 0 0 black",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "8px" }}>
          女性自身プレミアムLP
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "32px" }}>
          制作中のページです。パスワードを入力してください。
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="パスワード"
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid black",
            fontSize: "1rem",
            marginBottom: "12px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        {error && (
          <p style={{ color: "red", marginBottom: "12px", fontSize: "0.875rem" }}>
            パスワードが違います
          </p>
        )}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            background: "black",
            color: "white",
            border: "2px solid black",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          入る
        </button>
      </div>
    </div>
  );
}