import { BsLightbulbFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
function ModeChangeButton() {
    const { theme, setTheme } = useTheme();

    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <li>
            <button
                onClick={toggleMode}
                className="text-neutral-900 duration-200 hover:text-yellow-200 dark:text-neutral-50 dark:hover:text-yellow-200 text-[1.6rem] "
            >
                <BsLightbulbFill />
            </button>
        </li>
    );
}

export default ModeChangeButton;
