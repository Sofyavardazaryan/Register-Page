import "./profilePage.css";
import { useLocation, useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlerLogout = () => {
    navigate("/registerpage", { replace: true, state: null });
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <h1>{state?.login}</h1>
      <h1>{state?.password}</h1>
      <h1>{state?.firstName}</h1>
      <h1>{state?.lastName}</h1>
      <h1>{state?.age}</h1>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
};
