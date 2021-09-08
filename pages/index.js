import Image from 'next/image'
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button, Typography, Space, Divider, Card, Row, Col, Avatar} from 'antd';
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Link from '../components/Link'
import exmaplePic from '../public/assets/example.png'
const { Meta } = Card;

const Home = () => {
  const { t } = useTranslation(['common', 'home'])

  const renderStyles = () => {
    return (
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }
        .layout {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 618px;
          padding: 60px;
        }
        .dark {
          background-color: #fafafa;
        }
        .light {
          background-color: #ffffff;
        }
      `}</style>
    )
  }

  const openSignup = () => {
    Router.push('/signup')
  }

  const renderMoreAppsHelper = () => {
    return (
      <div id="products" className="layout">
        <Space direction="vertical" style={{textAlign: "center"}}>
          <Space direction="vertical" style={{width: "76%"}}>
            <Typography.Title style={{marginBottom: 54}}>
              More Applications
            </Typography.Title>
          </Space>
          <Row align="center" gutter={16}>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300, height: 350}}
                cover={<Image alt="example" src={exmaplePic} />}
              >
                <Meta title="Your Own IP" description="Deploy platform-agnostic and highly available infrastructure on the high performance platform with your own IP." />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300, height: 350}}
                cover={<Image alt="example" src={exmaplePic} />}
              >
                <Meta title="Powerful Control Panel" description="Spend less time managing your infrastructure with our powerful control panel." />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300, height: 350}}
                cover={<Image alt="example" src={exmaplePic} />}
              >
                <Meta title="Flexible Applications" description="Spin up a new instance with your preferred operating system in just seconds." />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300, height: 350}}
                cover={<Image alt="example" src={exmaplePic} />}
              >
                <Meta title="Flexible Applications" description="Spin up a new instance with your preferred operating system in just seconds." />
              </Card>
            </Col>
          </Row>
        </Space>
      </div>
    )
  }

  const renderProductsHelper = () => {
    return (
      <div id="products" className="layout dark">
        <Space direction="vertical" style={{textAlign: "center"}}>
          <Space direction="vertical" style={{width: "76%"}}>
            <Typography.Title>
              Simple
            </Typography.Title>
            <Typography.Title level={3} style={{marginBottom: 54}} type="secondary">
              Easily deploy cloud compute, storage, and networking in seconds with a full-featured API, CLI, and Cloud Manager user-friendly interface.
            </Typography.Title>
          </Space>
          <Row align="start" justify="space-around">
            <Card
              hoverable
              style={{ width: 300, height: 350}}
              cover={<Image alt="example" src={exmaplePic} />}
            >
              <Meta title="Your Own IP" description="Deploy platform-agnostic and highly available infrastructure on the high performance platform with your own IP." />
            </Card>
            <Card
              hoverable
              style={{ width: 300, height: 350}}
              cover={<Image alt="example" src={exmaplePic} />}
            >
              <Meta title="Powerful Control Panel" description="Spend less time managing your infrastructure with our powerful control panel." />
            </Card>
            <Card
              hoverable
              style={{ width: 300, height: 350}}
              cover={<Image alt="example" src={exmaplePic} />}
            >
              <Meta title="Flexible Applications" description="Spin up a new instance with your preferred operating system in just seconds." />
            </Card>
          </Row>
        </Space>
      </div>
    )
  }

  const renderFeaturesHelper = () => {
    return (
      <div id="features" className="layout light">
        <Space direction="vertical" style={{width: "75%"}}>
          <Typography.Title>
            {t('home:home_feature_title')}
          </Typography.Title>
          <Typography.Title level={3} style={{marginBottom: 54}} type="secondary">
            {t('home:home_feature_des')}
          </Typography.Title>
          <Row align="center" justify="space-between" wrap>
            <Card style={{ width: 500, marginBottom: 32 }} bordered={false}>
              <Meta
                avatar={
                  <Avatar style={{width: 100, height: 75}} src="https://www.linode.com/wp-content/uploads/2019/06/linode-splash-one-click-apps-app-creation.svg" />
                }
                title="App Creation, Simplified"
                description="No more jumping through hoops to get your software up and running. Use One-Click to launch new Linodes with ready-to-run apps and services."
              />
            </Card>
            <Card style={{ width: 500, marginBottom: 32 }} bordered={false}>
              <Meta
                avatar={
                  <Avatar style={{width: 100, height: 75}} src="https://www.linode.com/wp-content/uploads/2019/06/linode-splash-one-click-apps-app-creation.svg" />
                }
                title="Customize Your Apps"
                description="Run your apps the way you want. If the default configuration doesn't meet your needs, you can customize the app’s resources, location, metadata, and more during creation."
              />
            </Card>
            <Card style={{ width: 500, marginBottom: 32 }} bordered={false}>
              <Meta
                avatar={
                  <Avatar style={{width: 100, height: 75}} src="https://www.linode.com/wp-content/uploads/2019/06/linode-splash-one-click-apps-app-creation.svg" />
                }
                title="One-Stop Shop"
                description="Choose from our ever-growing library of pre-configured apps and services, including Wordpress, Minecraft, GitLab, and many more."
              />
            </Card>
            <Card style={{ width: 500, marginBottom: 32 }} bordered={false}>
              <Meta
                avatar={
                  <Avatar style={{width: 100, height: 75}} src="https://www.linode.com/wp-content/uploads/2019/06/linode-splash-one-click-apps-app-creation.svg" />
                }
                title="Centralized Management Platform"
                description="Easy deployment deserves easy management. The Linode Cloud Manager lets you manage and track your compute instances on a single page."
              />
            </Card>
          </Row>
        </Space>
      </div>
    )
  }

  const renderBannerHelper = () => {
    return (
      <div id="banner" className="layout dark">
        <Space direction="vertical" style={{width: "75%"}}>
          <Typography.Title>
            {t('home:home_banner_title')}
          </Typography.Title>
          <Typography.Title level={3} type="secondary">
            {t('home:home_banner_des')}
          </Typography.Title>
          <Link href='/signup'>
            <Button 
              type="primary"
              size="large"
              onClick={openSignup}
            >
              {t('create_free_account')}
            </Button>
          </Link>
        </Space>
        <div className="banner_background_backdrop" />
        <div className="banner_background" />
      </div>
    )
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        {renderBannerHelper()}
        {renderFeaturesHelper()}
        {renderProductsHelper()}
        {renderMoreAppsHelper()}
      </div>
      <AppFooter />
      {renderStyles()}
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
})

export default Home
