import { styled } from '../stitches.config';

export const AInternal = styled('a', {
    color: '$link',
    textDecoration: 'none'
});

export const AExternal = ({ href, children }: any) => {
    const Styled = styled('a', {
        color: '$link',
        textDecoration: 'none'
    });
    return <Styled href={href} target='_blank' rel='noopener noreferrer'>{children}</Styled>;
}