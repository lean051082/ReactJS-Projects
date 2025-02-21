import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [message, setMessage] = useState({ text: "", error: false });

  const validateFields = (e) => {
    e.preventDefault();
    if (userName === "" || userPass === "") {
      setMessage({ text: "Los campos no pueden estar vacíos", error: true });
    } else if (userName === "admin" && userPass === "1234") {
      setMessage({ text: "Bienvenido a la sección privada", error: false });
    } else {
      setMessage({ text: "Usuario o contraseña incorrectos", error: true });
      setUserName("");
      setUserPass("");
    }
  };

  const messageStyle = {
    backgroundColor: message.error === true ? "Red" : "Green",
  };

  return (
    <>
      <form onSubmit={validateFields}>
        <label>User Name:</label>
        <input
          id="i_userName"
          type="text"
          placeholder="userName"
          onChange={(e) => {
            setUserName(e.target.value);
            setMessage({ text: "", error: false });
          }}
          value={userName}
        />
        <label>User Pass:</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setUserPass(e.target.value);
            setMessage({ text: "", error: false });
          }}
          value={userPass}
        />
        <button>Log in</button>
      </form>
      <p style={messageStyle}>{message.text}</p>
    </>
  );
}

export default Login;
