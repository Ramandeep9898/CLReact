import "./App.css";
import { Documentation } from "./Pages/Documentation";
import { Route, Routes } from "react-router-dom";
import { Header } from "./CLComponents/Header/Header";
import { SideBar } from "./CLComponents/Sidebar/Sidebar";
import { TypographyDoc } from "./documentation/TypographyDoc";
import { ListDoc } from "./documentation/ListDoc";
import { IconDoc } from "./documentation/IconDoc";
import { CardDoc } from "./documentation/CardDoc";
import { BadgeDoc } from "./documentation/BadgeDoc";
import { AvatarDoc } from "./documentation/AvatarDoc";
import { ButtonDoc } from "./documentation/ButtonDoc";
import { AlertDoc } from "./documentation/AlertDoc";

function App() {
  return (
    <>
      <Header />
      <div className="flex-row w-full h-88">
        <SideBar />
        <div className="main-container">
          <Routes>
            <Route path="/typography" element={<TypographyDoc />} />
            <Route path="/list" element={<ListDoc />} />
            <Route path="/icon" element={<IconDoc />} />
            <Route path="/card" element={<CardDoc />} />
            <Route path="/badge" element={<BadgeDoc />} />
            <Route path="/avatar" element={<AvatarDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/alert" element={<AlertDoc />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
