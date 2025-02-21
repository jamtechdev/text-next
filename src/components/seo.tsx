// import { useSettings } from '@/framework/settings';
import { DefaultSeo as NextDefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const DefaultSeo = () => {
    // const { settings } = useSettings();
    const router = useRouter();
    return (
        <>
            {/*<link rel="icon" href="favicon.ico" />*/}
            <NextDefaultSeo
                additionalMetaTags={[
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1 maximum-scale=1',
                    },
                    {
                        name: 'apple-mobile-web-app-capable',
                        content: 'yes',
                    },
                    {
                        name: 'theme-color',
                        content: '#ffffff',
                    },
                    {
                        name: 'facebook-domain-verification',
                        content: '6g370jx84tn4ab0byqfpew0jlmqm7g',
                    }
                ]}
                additionalLinkTags={[
                    {
                        rel: 'apple-touch-icon',
                        href: 'icons/apple-icon-180.png',
                    },
                    {
                        rel: 'manifest',
                        href: '/manifest.json',
                    },
                ]}
                title={undefined}
                titleTemplate={`%s | ${'settings?.siteTitle' || 'Rigmeds'
                    }`}
                defaultTitle={'settings?.seo?.metaTitle || settings?.siteTitle'}
                description={'settings?.seo?.metaDescription || settings?.siteSubtitle'}
                canonical={router?.pathname === ('/drugs/[slug]' || '/otc/[slug]') ? '' : 'settings?.seo?.canonicalUrl'}
                openGraph={{
                    title: 'settings?.seo?.ogTitle',
                    description: 'settings?.seo?.ogDescription',
                    type: 'website',
                    locale: 'en_US',
                    site_name: 'settings?.siteTitle',
                    images: [
                        {
                            url: 'settings?.seo?.ogImage?.original',
                            width: 800,
                            height: 600,
                            alt: 'settings?.seo?.ogTitle',
                        },
                    ],
                }}
                twitter={{
                    handle: 'settings?.seo?.twitterHandle',
                    site: 'settings?.siteTitle',
                    cardType: 'settings?.seo?.twitterCardType',
                }}
            />
        </>

    );
};

export default DefaultSeo;