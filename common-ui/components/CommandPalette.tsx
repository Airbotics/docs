import { BiRightArrowAlt } from 'react-icons/bi';
import { KBarAnimator, useMatches, KBarResults } from 'kbar';
import { styled } from '../stitches.config';


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
