import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    await loginStore.fetchUserToken(userName, password);
    navigate("/react-project-with-mobx/products");
  };

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>): void =>
    setUserName(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void =>
    setPassword(event.target.value);

  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={userName}
            onChange={onChangeUserName}
          />
          <label htmlFor="floatingInput">UserName</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          onClick={onLogin}
          className="btn btn-primary w-100 py-2"
          type="button"
        >
          Sign in
        </button>
      </form>
    </main>
  );
});

export default Login;
