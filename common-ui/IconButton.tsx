import { styled } from './stitches.config';

export const IconButton = styled('button', {
    border: 'none',
    background: 'inherit',
    borderRadius: '$1',
    outline: 'none',
    padding: '$1',
    cursor: 'pointer',
    '&:hover': {
        background: '$backgroundHover'
    }
});
