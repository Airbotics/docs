
import { BiPencil } from 'react-icons/bi';
import { styled } from '../common-ui/stitches.config';
import { IArticle } from '../types';

export const EditSource = ({ article }: { article: IArticle }) => {

    const StyledEditWrapper = styled('div', {
        margin: '$9 0'
    });

    const StyledEdit = styled('a', {
        color: '$text',
        textDecoration: 'none',
        fontWeight: '400',
        display: 'inline-flex',
        alignItems: 'center',

        '&:hover': {
            color: '$textHover'
        },
    })

    const source = `https://github.com/Airbotics/docs/edit/main/content/${article.section}/${article.slug}.md`;


    return (
        <StyledEditWrapper>
            <StyledEdit target='_blank' href={source}>Edit this page on GitHub&ensp;<BiPencil /></StyledEdit>
        </StyledEditWrapper>
    );
}
