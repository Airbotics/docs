import { createStitches } from '@stitches/react';
import { slate } from '@radix-ui/colors';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    media: {
        xs: '(max-width: 599px)',
        sm: '(min-width: 600px) and (max-width: 959px)',
        md: '(min-width: 960px) and (max-width: 1279px)',
        lg: '(min-width: 1280px) and (max-width: 1919px)',
        xl: '(min-width: 1920px) and (max-width: 5000px)',
        'lt-sm': '(max-width: 599px)',
        'lt-md': '(max-width: 959px)',
        'lt-lg': '(max-width: 1279px)',
        'lt-xl': '(max-width: 1919px)',
        'gt-xs': '(min-width: 600px)',
        'gt-sm': '(min-width: 960px)',
        'gt-md': '(min-width: 1280px)',
        'gt-lg': '(min-width: 1920px)'
    },
    theme: {

        colors: {

            primary6: '#ff8800',

            secondary1: '#04131A',
            secondary2: '#0C3147',
            secondary3: '#144A74',
            secondary4: '#1E5DA0',
            secondary5: '#286CCB',
            secondary6: '#3477F5',
            secondary7: '#5594FA',
            secondary8: '#78AFFE',
            secondary9: '#9CC8FF',
            secondary10: '#C2DFFF',
            secondary11: '#E9F4FF',
            secondary12: '#04131A',
        },
        fonts: {
            title: 'Quicksand, sans-serif',
            body: 'Lato, sans-serif',
            code: 'Fira Code, monospace;'
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        fontWeights: {
            400: '400',
            500: '500',
            600: '600',
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {
            logoheight: '48px',
            sidebarWidth: '250px'
        },
        borderWidths: {},
        borderStyles: {},
        radii: {
            1: '4px',
            2: '8px',
            3: '12px',
        },
        shadows: {},
        zIndices: {},
        transitions: {},

    },
});


export const lightTheme = createTheme({
    colors: {
        background: slate.slate1,
        backgroundHover: slate.slate4,
        backgroundActive: '$secondary11',
        border: slate.slate6,
        text: slate.slate11,
        textDark: slate.slate12,
        textActive: '$secondary2',
        textHover: '$secondary1',
    },
});

export const darkTheme = createTheme({
    colors: {
        background: slate.slate12,
        backgroundHover: slate.slate11,
        backgroundActive: '$secondary3',
        border: slate.slate11,
        text: slate.slate7,
        textDark: slate.slate1,
        textActive: '$secondary11',
        textHover: '$secondary11',
    },
});