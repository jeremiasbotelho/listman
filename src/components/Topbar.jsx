import { Bars3Icon } from "@heroicons/react/24/outline";
import { TopbarConfig } from "../settings/TopbarConfig";

function Topbar({ isSidebarOpen, setIsSidebarOpen, colors }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center p-2 md:hidden"
      style={{
        backgroundColor: colors.background.main,
        color: colors.text.primary,
        height: `${TopbarConfig.TOPBAR_HEIGHT}px`,
      }}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 rounded-md"
        style={{
          color: colors.text.primary,
        }}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Topbar;
