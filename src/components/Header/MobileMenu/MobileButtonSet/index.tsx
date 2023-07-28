import { useTheme } from 'next-themes';
import Link from 'next/link';
import { BsGithub, BsLightbulbFill } from 'react-icons/bs';

function MobileButtonSet() {
    const { theme, setTheme } = useTheme();

    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <li className={' m-4  flex gap-4'}>
            <button
                className="h-full p-1 text-4xl text-yellow-300 duration-200 hover:text-yellow-200 dark:text-white dark:hover:text-yellow-200"
                onClick={toggleMode}
            >
                <BsLightbulbFill />
            </button>
            <Link
                href={'https://github.com/JaeilJO'}
                className={`h-full p-1 text-4xl duration-200 hover:text-stone-400`}
            >
                <BsGithub />
            </Link>
        </li>
    );
}

export default MobileButtonSet;
