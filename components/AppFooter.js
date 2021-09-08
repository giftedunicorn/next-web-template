import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Footer from 'rc-footer';
import { useTranslation } from 'next-i18next';
import { 
  ADMIN_EMAIL, 
  TERMS_OF_USE, 
  GITHUB_REPO,
} from '../utils/const';

function AppFooter() {
  const { t } = useTranslation('common')

  const renderLink = (name, route) => {
    return (
      <Link href={route}>
        {t(name)}
      </Link>
    )
  }

  const renderHelper = () => {
    return (
      <Footer
        columns={[
          {
            title: t('appname'),
            items: [
              { 
                LinkComponent: 'div',
                title: renderLink('home', '/'),
              },
              {
                LinkComponent: 'div',
                title: renderLink('about', '/about'),
              },
            ],
          },
          {
            title: t('products'),
            items: [
              {
                LinkComponent: 'div',
                title: renderLink('products', '/products'),
              },
            ],
          },
          {
            title: t('community'),
            items: [
              {
                title:  t('github'),
                url: GITHUB_REPO,
                openExternal: true,
              },
              {
                title: t('terms_of_use'),
                url: TERMS_OF_USE,
                openExternal: true,
              },
            ],
          },
          {
            title: t('support'),
            items: [
              {
                title:  t('contact'),
                description: ADMIN_EMAIL,
              },
              {
                title: t('appname'),
                url: '',
              },
            ],
          },
        ]}
        bottom={`${1900 + new Date().getYear()} ${t('appname')}`}
      />
    )
  }
  
  return (
    <div id='app-footer' style={{ width: '100%' }}>
      {renderHelper()}
    </div>
  )
}

export default AppFooter;
