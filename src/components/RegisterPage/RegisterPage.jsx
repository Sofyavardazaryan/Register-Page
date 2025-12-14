import "./registerPage.css";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      age: e.target[2].value,
      login: e.target[3].value,
      password: e.target[4].value,
      email: e.target[5].value,
    };

    navigate("/loginpage", { state: newUser });
    // console.log(newUser);
    e.target.reset();
  };
  return (
    <form className="register" onSubmit={handlerSubmit}>
      <h1>Register</h1>
      <input type="text" placeholder="firstName" />
      <input type="text" placeholder="lastName" />
      <input type="text" placeholder="age" />
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="email" />
      <button>Submit</button>
    </form>
  );
};
