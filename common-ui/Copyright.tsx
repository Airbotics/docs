import { styled } from './stitches.config'

// TODO react prop types
export const Copyright = (props: any) => {

    const StyledCopyright = styled('p', {
        fontSize: '$1'
    });

    return <StyledCopyright {...props}>Copyright &copy; Airbotics {new Date().getFullYear()}</StyledCopyright>;

}