import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const onChangeLogin = (key) => (e) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onClickToSave = () => {
    localStorage.setItem("login", JSON.stringify(login));
    window.location.reload();
  };

  return (
    <div className="login-page">
      <div className="login_box">
        <div className="login_form">
          <input
            placeholder="Type your name"
            className="login_field_name"
            onChange={onChangeLogin("name")}
          ></input>
          <input
            placeholder="*******"
            className="login_field_password"
            onChange={onChangeLogin("password")}
          ></input>
          <button onClick={onClickToSave}>Login</button>
        </div>
      </div>
    </div>
  );
}
