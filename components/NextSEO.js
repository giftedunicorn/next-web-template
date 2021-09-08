import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import SEO from "../utils/seo"; 

const NextSEO = (props) => {
  const { i18n } = useTranslation()
  const router = useRouter()
  let { language } = i18n
  let { asPath } = router
  language = language || 'en'
  // use asPath instead of route for /download/[device]
  asPath = asPath || '/'
  
  // remove trail slash
  let pathname = asPath
  // pathname = pathname.replace('/zh-CN', '')
  // pathname = pathname.replace('/zh-TW', '')
  if (pathname === '/') pathname = ''

  const seo = SEO[language][asPath] || SEO.en['/']
  const { title, description, url, image, locale } = seo

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          { 
            url: '',
            alt: `Cover image in ${language}`,
          },
        ],
        locale: locale.replace('-', '_').toLowerCase(),
        type: 'website',
        site_name: '',
      }}
      twitter={{
        site: '',
        cardType: 'summary_large_image',
      }}
      facebook={{
        appId: '',
      }}
      languageAlternates={[
        {
          hrefLang: 'en',
          href: `https://example.com${pathname}`,
        },
        {
          hrefLang: 'zh-CN',
          href: `https://example.com/zh-CN${pathname}`,
        },
        {
          hrefLang: 'ja',
          href: `https://example.com/ja${pathname}`,
        }
      ]}
    />
  )
}

export default NextSEO;
