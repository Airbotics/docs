import { ThemeProvider } from 'next-themes';
import { BiRightArrowAlt } from 'react-icons/bi';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, useMatches, KBarResults } from 'kbar';
import globalStyles from '../common-ui/global-styles';
import { lightTheme, darkTheme } from '../common-ui/stitches.config';
import { styled } from '../common-ui/stitches.config';

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
    //     perform: () => alert('todo')
    // },
];



export const StyledKBarSearch = styled('input', {
    background: '$background',
    padding: '$3 $4',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid $border',
    caretColor: '$primary6',
    width: '100%',
    boxSizing: 'border-box',
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
    '& ::placeholder': {
        color: '$text',
        opacity: 1
    }
});


export const StyledKBarAnimator = styled(KBarAnimator, {
    background: '$background',
    width: '450px',
    borderRadius: '$2',
    boxShadow: 'rgba(59, 130, 246, 0.5) 0px 0px 86px 0px',
});

const StyledResultsItem = styled('div', {
    color: '$text',
    display: 'flex',
    padding: '$1',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '$1',
    variants: {
        active: {
            true: {
                background: '$backgroundHover'
            }
        }
    }
});

const StyledKBarResults = styled('div', {
    padding: '$3 $4'
});

export const RenderResults = () => {

    const { results } = useMatches();

    return (
        <StyledKBarResults>
            <KBarResults
                items={results}
                onRender={({ item, active }) =>
                    typeof item === 'string' ? (
                        <StyledResultsItem><BiRightArrowAlt />&emsp;{item}</StyledResultsItem>
                    ) : (
                        <StyledResultsItem active={active}><BiRightArrowAlt />&emsp;{item.name}</StyledResultsItem>
                    )
                }
            />
        </StyledKBarResults>
    );
}

const MyApp = ({ Component, pageProps }: any) => {

    globalStyles();

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