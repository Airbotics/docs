import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { getTutorialBySlug, getToc } from '../../core/utils';
import { Layout } from '../../components/Layout';
import { ISection, IArticleLink, IArticle } from '../../types';
import { EditSource } from '../../components/EditSource';
import { styled } from '../../common-ui/stitches.config';
import { Flex } from '../../common-ui/Flex';
import { Heading, SubHeading } from '../../common-ui/Headings';
import { Img } from '../../components/Img';


const flattenArticles = (toc: ISection[]): IArticleLink[] => {
    const articles: IArticleLink[] = [];
    toc.forEach(section => {
        section.articles.forEach(article => {
            articles.push({
                title: article.title,
                slug: `/${section.slug}/${article.slug}`
            })

        })
    });
    return articles;
}

const getPrevAndNext = (flattened: IArticleLink[], article: IArticle) => {
    const idx = flattened.findIndex((object: any) => {
        return object.slug === `/${article.section}/${article.slug}`;
    })

    const prev = idx === 0 ? null : flattened[idx - 1];
    const next = idx === flattened.length - 1 ? null : flattened[idx + 1];

    return {
        prev,
        next
    }
}

interface IPrevAndNext {
    prev: IArticleLink;
    next: IArticleLink;
}

const PrevAndNext = ({ prev, next }: IPrevAndNext) => {

    const StyledWrapper = styled(Flex, {
        margin: '$7 0',
    });

    const StyledLink = styled('a', {
        marginTop: '$2',
        textDecoration: 'none',
        color: '$secondary6',
        fontSize: '$6',
        letterSpacing: '-0.025em',

        '&:hover': {
            color: '$secondary7',
        }
    });

    return (
        <StyledWrapper direction='row' mainAxis='space-between'>

            {
                prev ? (
                    <Flex direction='column'>
                        <p>Prev</p>
                        <StyledLink href={prev.slug}>{prev.title}</StyledLink>
                    </Flex>
                ) : <div></div>
            }

            {
                next && (
                    <Flex direction='column' css={{ textAlign: 'right' }}>
                        <p>Next</p>
                        <StyledLink href={next.slug}>{next.title}</StyledLink>
                    </Flex>
                )
            }

        </StyledWrapper>
    )
};

const Divider = styled('div', {
    borderTop: '1px solid $border',
    marginTop: '$7'
});

const StyledCode = styled(SyntaxHighlighter, {
    borderRadius: '$2',
});


const CustomCode = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <StyledCode
            // style={styles.atomDark}
            language={match[1]}
            PreTag='div'
            {...props}
        >{String(children).replace(/\n$/, '')}</StyledCode>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
}

const mdComponents = {
    code: CustomCode,
    img: (props: any) => <Img {...props}/> // NOTE react-markdown wants a component 
};

const StyledReactMarkdown = styled(ReactMarkdown, {
    'h2': {
        color: '$textDark',
        fontFamily: '$title',
        marginTop: '$7',
        marginBottom: '$2'
    },
    li: {
        listStyle: 'outside',
        padding: '$1 0'
    }
});


interface IProps {
    toc: ISection[];
    article: IArticle;
}

const Component = ({ toc, article }: IProps) => {

    const { prev, next } = getPrevAndNext(flattenArticles(toc), article);

    return (
        <Layout toc={toc}>
            <Heading>{article.title}</Heading>
            <SubHeading>{article.subtitle}</SubHeading>
            {/* <p>{article.time}</p> */}
            <StyledReactMarkdown components={mdComponents}>{article.content}</StyledReactMarkdown>

            <Divider />

            <PrevAndNext prev={prev!} next={next!} />

            <EditSource article={article} />
        </Layout>
    )
}

export default Component;





export const getStaticProps = ({ params }: any) => ({
    props: {
        toc: getToc(),
        article: getTutorialBySlug(params.section, params.slug)
    }
});


export const getStaticPaths = () => {
    const sections = getToc();
    const paths: any = [];

    sections.forEach(section => {
        section.articles.forEach(article => {
            paths.push({
                params: {
                    section: section.slug,
                    slug: article.slug,
                },
            });
        })
    });

    return {
        paths,
        fallback: false,
    };
};
