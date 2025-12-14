import "./loginPage.css";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handlerLogin = (e) => {
    e.preventDefault();
    const [login, password] = e.target;

    if (
      (login.value === location.state?.login ||
        login.value === location.state?.email) &&
      password.value === location.state?.password
    ) {
      navigate("/profilepage", { state: location.state });
    } else {
      navigate("/registerpage");
    }
  };

  return (
    <form onSubmit={handlerLogin}>
      <h1>Login</h1>
      <input type="text" placeholder="login or email" />
      <input type="password" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
};
