import { styled } from '../stitches.config';

export const StyledLink = styled('a', {
    marginTop: '$2',
    textDecoration: 'none',
    color: '$secondary6',
    fontSize: '$6',
    letterSpacing: '-0.025em',

    '&:hover': {
        color: '$secondary7',
    }
});