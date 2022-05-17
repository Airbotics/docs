import Document, { Html, Head, Main, NextScript } from 'next/document';

const title = 'Airbotics | Ship robotics code fast'
const desc = 'Build a custom, scalable, cost-effective cloud robotics solution in a weekend with Airbotics - the cloud robotics platform for service robots with APIs, ROS packages, CLIs, SDKs and dashboard.'


class MyDocument extends Document {
    render() {

        return (
            <Html>
                <Head>

                    <meta charSet='utf-8' />
                    <meta name='robots' content='index, follow' />
                    <link rel='canonical' href='https://docs.airbotics.io' />
                    <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
                    <meta httpEquiv='content-language' content='en-us' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=yes' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
                    <meta httpEquiv='cleartype' content='on' />
                    <meta name='theme-color' content='#fdfeff' />
                    <meta name='HandheldFriendly' content='true' />

                    <title>{title}</title>
                    <meta property='og:title' content={title} />
                    <meta name='twitter:title' content={title}></meta>

                    <meta name='description' content={desc} />
                    <meta property='og:description' content={desc} />
                    <meta name='twitter:description' content={desc} />

                    <meta property='og:image' content='https://docs.airbotics.io/imgs/og_image.png' />
                    <meta property='og:url' content='https://docs.airbotics.io' />
                    <meta property='og:site_name' content='Airbotics' />
                    <meta property='og:type' content='website' />

                    <meta name='twitter:image' content='https://docs.airbotics.io/imgs/og_image.png' />
                    <meta name='twitter:image:alt' content='Airbotics open graph image' />
                    <meta name='twitter:card' content='summary_large_image' />
                    <meta name='twitter:site' content='@Airboticsio' />
                    <meta name='twitter:url' content='https://airbotics.io' />

                    <link rel='icon' href='/imgs/favicon.png' sizes='36x36'></link>

                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap' rel='stylesheet' />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;