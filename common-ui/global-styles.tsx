
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
    body: {
        height: '100vh',
        minHeight: '100vh',
        overflowX: 'hidden',
        color: '$text',
        fontFamily: '$body',
        fontSize: '$3',
        letterSpacing: '.000001px',
        fontWeight: 'normal',
        backgroundColor: '$background',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    },
    '*': {
        margin: '0px',
        padding: '0px',
        outline: 'none',
    },
    'ul': {
        listStyle: 'none'
    }
});

export default globalStyles;