const APIHOST_DEV = 'http://localhost:5000'
const APIHOST_PROD = 'https://api.rumbackend.com'
const APIHOST = process.env.NODE_ENV === 'production' ? APIHOST_PROD : APIHOST_DEV;
const ADMIN_EMAIL = 'admin@rumwebapp.com';
const APPNAME = 'RUM'

export {
  APPNAME
  ADMIN_EMAIL,
  APIHOST,
}
