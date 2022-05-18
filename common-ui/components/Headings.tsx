import { styled } from '../stitches.config';

export const Heading = styled('h1', {
    fontFamily: '$title',
    fontSize: '$8',
    fontWeight: '600',
    letterSpacing: '-0.05em',
    color: '$textDark'
});

export const SubHeading = styled('p', {
    marginTop: '$2',
    marginBottom: '$7',
    fontSize: '$6',
    letterSpacing: '-0.025em',
});