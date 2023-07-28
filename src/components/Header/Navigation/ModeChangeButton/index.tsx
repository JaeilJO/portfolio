import { BsLightbulbFill } from "react-icons/bs";
import { useTheme } from "next-themes";
function ModeChangeButton() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <li>
      <button
        onClick={toggleMode}
        className="text-yellow-300 duration-200 hover:text-yellow-200 ransition-colors dark:text-white dark:hover:text-yellow-200"
      >
        <BsLightbulbFill />
      </button>
    </li>
  );
}

export default ModeChangeButton;
