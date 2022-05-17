import { ReactNode, useState } from 'react';
import { BiLinkExternal, BiMenu } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { styled} from '../common-ui/stitches.config';
import { IconButton } from '../common-ui/IconButton';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Flex } from '../common-ui/Flex';
import { Copyright } from '../common-ui/Copyright';
import { ISection } from '../types';


const StyledSidebar = styled('div', {
    borderRight: '1px solid $border',
    overflowY: 'scroll',
    width: '$sidebarWidth',
    '@lt-md': {
        width: '100vw',
        borderRight: 'none',
    },
});

const Show = styled('div', {
    variants: {
        show: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none'
            }
        }
    },
    '@lt-md': {
        borderBottom: '1px solid $border',
    },
});

const SectionTitle = styled('h2', {
    padding: '$2 $5',
    fontSize: '$3',
    color: '$textDark',
    fontFamily: '$title'
});

const ArticleLink = styled('a', {
    padding: '$2 $5',
    color: '$text',
    fontSize: '$2',
    textDecoration: 'none',
    fontWeight: '400',

    '&:hover': {
        color: '$textHover'
    },

    variants: {
        active: {
            true: {
                background: '$backgroundActive',
                borderRight: '4px solid $secondary6',
                color: '$textActive',
                fontWeight: '500',
                '&:hover': {
                    color: '$textHover'
                }
            }
        }
    }

});


interface ISidebarProps {
    toc: ISection[];
}

const Sidebar = ({ toc }: ISidebarProps) => {

    const router = useRouter();
    const [show, setShow] = useState(false);

    return (
        <StyledSidebar>
            <Flex direction='row' mainAxis='space-between' crossAxis='center' css={{ padding: '$2 $5' }}>
                <div>
                    <Logo />
                </div>
                <Flex gap='2'>
                    <ThemeToggle />
                    <IconButton css={{ '@gt-sm': { display: 'none' } }} onClick={() => setShow(!show)}><BiMenu /></IconButton>
                </Flex>
            </Flex>

            <Show show={show} css={{ '@gt-sm': { display: 'block' } }}>
                <Flex direction='column'>

                    {
                        toc.map(section => (
                            <Flex direction='column' css={{ marginBottom: '$4' }} key={section.slug}>
                                <SectionTitle>{section.title}</SectionTitle>
                                <Flex direction='column'>
                                    {
                                        section.articles.map(article => (
                                            <ArticleLink key={article.slug} href={`/${section.slug}/${article.slug}`} active={`/${section.slug}/${article.slug}` === router.asPath}>{article.title}</ArticleLink>
                                        ))
                                    }
                                </Flex>

                            </Flex>
                        ))
                    }

                    <Flex direction='column' css={{ marginBottom: '$4' }}>

                        <SectionTitle>Misc</SectionTitle>
                        <Flex direction='column'>
                            <ArticleLink href='https://airbotics.io' target='_blank' active={false}>Airbotics&ensp;<BiLinkExternal /></ArticleLink>
                            <ArticleLink href='https://discord.gg/W2TR4WXUqv' target='_blank' active={false}>Discord&ensp;<BiLinkExternal /></ArticleLink>
                            <ArticleLink href='https://github.com/Airbotics' target='_blank' active={false}>GitHub&ensp;<BiLinkExternal /></ArticleLink>
                        </Flex>
                    </Flex>

                    <Copyright css={{ padding: '$2 $5' }} />

                </Flex>
            </Show>

        </StyledSidebar>
    );
}


interface IContentProps {
    children: ReactNode;
}

const Content = ({ children }: IContentProps) => {

    const Wrapper = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        overflowY: 'scroll'
    });

    const StyledContent = styled('div', {
        width: '100%',
        maxWidth: '756px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '$8 $5 0 $5',
        boxSizing: 'border-box'
    });


    return (
        <Wrapper>
            <StyledContent>{children}</StyledContent>
        </Wrapper>
    )
}



interface IProps {
    toc: ISection[];
    children: ReactNode;
}

export const Layout = ({ toc, children }: IProps) => {

    const StyledLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        '@lt-md': {
            flexDirection: 'column'
        }
    });

    return (
        <StyledLayout>
            <Sidebar toc={toc} />
            <Content>{children}</Content>
        </StyledLayout>
    )
};

