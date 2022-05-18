import { styled } from '../stitches.config';

export const Flex = styled('div', {
    display: 'flex',
    variants: {
        direction: {
            'row': {
                flexDirection: 'row',
            },
            'column': {
                flexDirection: 'column',
            }
        },
        wrap: {
            'wrap': {
                flexWrap: 'wrap'
            },
            'no-wrap': {
                flexWrap: 'nowrap',
            }
        },
        mainAxis: {
            'start': {
                justifyContent: 'flex-start'
            },
            'center': {
                justifyContent: 'center'
            },
            'end': {
                justifyContent: 'flex-end'
            },
            'stretch': {
                justifyContent: 'stretch'
            },
            'space-between': {
                justifyContent: 'space-between'
            },
            'space-around': {
                justifyContent: 'space-around'
            }
        },
        crossAxis: {
            'start': {
                alignItems: 'flex-start'
            },
            'center': {
                alignItems: 'center'
            },
            'end': {
                alignItems: 'flex-end'
            },
            'stretch': {
                alignItems: 'stretch'
            }
        },
        gap: {
            1: {
                gap: '5px'
            },
            2: {
                gap: '10px'
            },
            3: {
                gap: '15px'
            }
        }
    }
});