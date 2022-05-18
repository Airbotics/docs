import { useTheme } from 'next-themes';
import { BiSun, BiMoon } from 'react-icons/bi';
import { IconButton } from './IconButton';

export const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();

    return (
        <IconButton
            color='neutral'
            onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        >{theme === 'dark' ? <BiMoon /> : <BiSun />}
        </IconButton>
    )

}
