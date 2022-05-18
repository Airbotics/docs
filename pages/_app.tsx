import { ThemeProvider, useTheme } from 'next-themes';
import { KBarProvider, KBarPortal, KBarPositioner } from 'kbar';
import globalStyles from '../common-ui/global-styles';
import { lightTheme, darkTheme } from '../common-ui/stitches.config';
import {
    StyledKBarSearch,
    StyledKBarAnimator,
    RenderResults
} from '../common-ui/components/CommandPalette';


const MyApp = ({ Component, pageProps }: any) => {

    globalStyles();

    // const { theme, setTheme } = useTheme();

    const actions = [
        {
            id: 'register-interest',
            name: 'Register interest',
            keywords: 'sign, up, register, interest, access, early, alpha',
            perform: () => window.open('https://7jrye3vr8l8.typeform.com/to/jbAucOxc', '_blank')
        },
        {
            id: 'discord',
            name: 'Join Discord server',
            keywords: 'contact, discord, community, forum',
            perform: () => window.open('https://discord.com/invite/W2TR4WXUqv', '_blank')
        },
        {
            id: 'github',
            name: 'Go to GitHub',
            keywords: 'github, code, open source',
            perform: () => window.open('https://github.com/Airbotics', '_blank')
        },
        {
            id: 'book-call',
            name: 'Talk to the founders',
            keywords: 'talk, chat, call, founders',
            perform: () => window.open('https://calendly.com/airbotics/15min', '_blank')
    
        },
        {
            id: 'email',
            name: 'Email us',
            keywords: 'contact, email',
            perform: () => window.open('mailto:hello@airbotics.io', '_blank')
        },
        // {
        //     id: 'theme',
        //     name: 'Toggle theme',
        //     keywords: 'theme',
        //     perform: () => {
        //         if(theme === 'dark') {
        //             setTheme('light')
        //         } else {
                    
        //             setTheme('dark')
        //         }
        //     }
        // },
    ];


    return (
        <ThemeProvider
            disableTransitionOnChange
            attribute='class'
            value={{ light: lightTheme.className, dark: darkTheme.className }}
            defaultTheme='system'
        >
            <KBarProvider actions={actions}>
                <KBarPortal>
                    <KBarPositioner>
                        <StyledKBarAnimator>
                            <StyledKBarSearch autoFocus placeholder='What can we help you with today?' />
                            <RenderResults />
                        </StyledKBarAnimator>
                    </KBarPositioner>
                </KBarPortal>
                <Component {...pageProps} />
            </KBarProvider>
        </ThemeProvider>
    )
}

export default MyApp;