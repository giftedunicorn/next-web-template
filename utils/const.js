const APPNAME = process.env.APPNAME
const APIHOST_DEV = 'http://localhost:5000'
const APIHOST_PROD = process.env.APIHOST_PROD
const APIHOST = process.env.NODE_ENV === 'production' ? APIHOST_PROD : APIHOST_DEV;
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL

const ADMIN_EMAIL = 'admin@rumwebapp.com';
const TERMS_OF_USE = 'https://terms.com';
const GITHUB_REPO = 'https://github.com';

export {
  APPNAME,
  ADMIN_EMAIL,
  APIHOST,
  WORDPRESS_API_URL,
  TERMS_OF_USE,
  GITHUB_REPO,
}
