import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
