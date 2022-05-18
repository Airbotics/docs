import type { NextPage } from 'next';
import GitHubButton from 'react-github-btn';
import { slate } from '@radix-ui/colors';
import { Layout } from '../components/Layout';
import { AExternal } from '../common-ui/components/A';
import { getToc } from '../core/utils';
import { Heading, SubHeading } from '../common-ui/components/Headings';
import { Flex } from '../common-ui/components/Flex';
import { styled } from '../common-ui/stitches.config'
import { Img } from '../components/Img';
import { ISection } from '../types';

const FeaturedCard = ({ gradient, children, ...props }: any) => {

    const StyledCard = styled('div', {
        borderRadius: '$2',
        padding: '$4 $5',
        background: gradient,
        '& p': {
            color: slate.slate2,
            margin: '$3 0'
        }
    });

    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    )
}

const QuickLinks = () => {

    const StyledLink = styled('a', {
        padding: '$3 $5',
        textDecoration: 'none',
        border: '1px solid $border',
        borderRadius: '$1',
        display: 'flex',
        flexDirection: 'column',
        '& span:first-of-type': {
            marginTop: '$2',
            textDecoration: 'none',
            color: '$secondary6',
            fontSize: '$6',
            letterSpacing: '-0.025em',
            marginBottom: '$2',

            '&:hover': {
                color: '$secondary7',
            }
        },
        '& span:last-of-type': {
            color: '$text'
        }
    });

    return (
        <Flex gap='3'>
            <Flex direction='column' gap='3'>
                <StyledLink href='/#'>
                    <span>Link One</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </StyledLink>
                <StyledLink href='/#'>
                    <span>Link Two</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </StyledLink>
            </Flex>

            <Flex direction='column' gap='3'>
                <StyledLink href='/#'>
                    <span>Link Three</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </StyledLink>
                <StyledLink href='/reference/quotas'>
                    <span>Link Four</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </StyledLink>
            </Flex>
        </Flex>
    )
}

const Component = ({ toc }: { toc: ISection[] }) => {

    return (
        <Layout toc={toc}>
            <Flex direction='column' css={{ paddingBottom: '$9' }}>
                <Heading>Airbotics Documentation</Heading>
                <SubHeading>Everything you need to know about Airbotics</SubHeading>

                <Flex>
                    <Img src='/imgs/og_image.png' width='100%' />
                </Flex>

                <Flex css={{ marginBottom: '$8' }} direction='column' gap='2'>
                    <p><AExternal href='https://discord.com/invite/W2TR4WXUqv' target='_blank'>Airbotics</AExternal> is the fastest way to ship code to your robots.</p>

                    <p>This documentation will contain guides, references and samples to help you get start shipping code faster.</p>
                </Flex>


                {/* <Flex direction='column' css={{ marginBottom: '$8' }}>
                    <Heading css={{ marginBottom: '$2' }}>Quick links</Heading>
                    <QuickLinks />
                </Flex> */}

                <Heading css={{ marginBottom: '$2' }}>More</Heading>


                <FeaturedCard gradient='linear-gradient(to right, #71B280, #134E5E)' css={{ marginBottom: '$5' }}>
                    <Heading css={{ color: slate.slate1 }}>Built for speed</Heading>
                    <p>Try hitting Cmd + K to open the command palette.</p>
                </FeaturedCard>

                <FeaturedCard gradient='linear-gradient(to right, #42275a, #734b6d)' css={{ marginBottom: '$5' }}>
                    <Heading css={{ color: slate.slate1 }}>We love community</Heading>
                    <p>Join our <AExternal href='https://discord.com/invite/W2TR4WXUqv' target='_blank'>Discord</AExternal> community.</p>
                </FeaturedCard>

                <FeaturedCard gradient='linear-gradient(to right, #cb356b, #bd3f32)'>
                    <Heading css={{ color: slate.slate1 }}>We love open source</Heading>
                    <p>Each page contains a link to edit it on GitHub, make a Pull Request and we&apos;ll merge it.</p>
                    <GitHubButton href='https://github.com/Airbotics/docs' data-color-scheme='no-preference: dark; light: light; dark: dark;' data-icon='octicon-star' data-size='large' data-show-count='true' aria-label='Star Airbotics/docs on GitHub' data-text='Star'></GitHubButton>
                </FeaturedCard>
            </Flex>
        </Layout>
    )
};


export const getStaticProps = () => ({
    props: {
        toc: getToc()
    }
});

export default Component;
