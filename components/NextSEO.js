// import { withTranslation } from 'utils/i18n'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import SEO from "../utils/seo"; 

function NextSEO(props) {
  const router = useRouter()
  let language // let { language } = props.i18n
  let { asPath } = router
  language = language || 'en'
  // use asPath instead of route for /download/[device]
  asPath = asPath || '/'
  
  // remove trail slash
  let pathname = asPath
  // pathname = pathname.replace('/zh-TW', '')
  // pathname = pathname.replace('/zh', '')
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
          href: `https://example.com/zh${pathname}`,
        },
        {
          hrefLang: 'zh-TW',
          href: `https://example.com/zh-TW${pathname}`,
        }
      ]}
    />
  )
}

// export default withTranslation('common')(NextSEO);
export default NextSEO;