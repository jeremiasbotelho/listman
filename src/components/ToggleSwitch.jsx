import { useState } from "react";

function ToggleSwitch({ id, label, checked, onChange, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <label
      htmlFor={id}
      className="block p-3 rounded-md mb-1 cursor-pointer"
      onMouseEnter={() => {
        console.log(`Hover ${id}: true`);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log(`Hover ${id}: false`);
        setIsHovered(false);
      }}
      style={{
        backgroundColor: isHovered
          ? colors.background.hoverColor
          : colors.background.main,
      }}
    >
      <div className="flex items-center">
        <span
          className="text-sm font-medium flex-1"
          style={{ color: colors.text.primary }}
        >
          {label}
        </span>
        <div className="relative inline-block w-10 h-6 mr-2">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="absolute opacity-0 w-full h-full cursor-pointer z-10"
          />
          <span
            className="block w-10 h-6 rounded-full"
            style={{
              backgroundColor: checked
                ? colors.toggle.active
                : colors.toggle.inactive,
            }}
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                checked ? "translate-x-4" : ""
              }`}
            />
          </span>
        </div>
      </div>
    </label>
  );
}

export default ToggleSwitch;
