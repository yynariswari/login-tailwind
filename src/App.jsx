import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container kecil biar tidak melebar full */}
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Div baru di atas form */}
        <div className="bg-yellow-200 px-6 py-3 rounded-lg shadow text-center">
          {/* Form Login */}
          <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-xl shadow-lg w-full"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
              Welcome to Jayjay Login
            </h2>

            {/* Username */}

            <label
              style={{
                color: "#2563eb",
                fontWeight: "500",
                marginBottom: "4px",
                display: "block",
                textAlign: "left", //
                width: "100%", //
              }}
            >
              Username
            </label>

            <input
              type="text"
              placeholder="Insert username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onMouseEnter={(e) => (e.target.style.borderColor = "#3b82f6")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#9ca3af")}
              onFocus={(e) => (e.target.style.borderColor = "#1e40af")}
              onBlur={(e) => (e.target.style.borderColor = "#9ca3af")}
              style={{
                border: "2px solid #9ca3af",
                padding: "12px",
                borderRadius: "8px",
                width: "100%",
                marginBottom: "16px",
                outline: "none", //
              }}
            />

            {/* Password */}
            <p></p>
            <label
              style={{
                color: "#2563eb",
                fontWeight: "500",
                marginBottom: "4px",
                display: "block",
                textAlign: "left", //
                width: "100%", //
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Insert Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onMouseEnter={(e) => (e.target.style.borderColor = "#3b82f6")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#9ca3af")}
              onFocus={(e) => (e.target.style.borderColor = "#1e40af")}
              onBlur={(e) => (e.target.style.borderColor = "#9ca3af")}
              style={{
                border: "2px solid #9ca3af",
                padding: "12px",
                borderRadius: "8px",
                width: "100%",
                marginBottom: "24px",
                outline: "none",
              }}
            />

            {/* Button */}
            <p></p>
            <button
              type="submit"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
              onMouseDown={(e) => (e.target.style.backgroundColor = "#1e40af")}
              onMouseUp={(e) => (e.target.style.backgroundColor = "#2563eb")}
              onFocus={(e) => (e.target.style.backgroundColor = "#2563eb")}
              onBlur={(e) => (e.target.style.backgroundColor = "#3b82f6")}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontWeight: "600",
                borderRadius: "8px",
                border: "none",
                outline: "none", // ⬅️ ini kuncinya
                appearance: "none", // ⬅️ dan ini
                cursor: "pointer",
                transition: "background-color 0.15s ease",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
