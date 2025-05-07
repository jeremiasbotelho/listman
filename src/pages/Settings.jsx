import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";

function Settings() {
  return (
    <div className="p-4 md:p-6">
      <Tabs />
      <Outlet />
    </div>
  );
}

export default Settings;
