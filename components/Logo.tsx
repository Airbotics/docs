// import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export const Logo = () => {

    const { theme } = useTheme();

    return <Link href='/'><img src={theme === 'dark' ? '/imgs/logo-dark-theme.png' : '/imgs/logo-light-theme.png'} width='136' height='48' /></Link>;

}