import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button, Input, Typography, Divider, Card, Row, Col, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import { useAuth } from '../utils/auth';
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
const { Title } = Typography;

const Signup = () => {
  const { t } = useTranslation(['common'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signinWithGoogle, signupWithEmail, signinWithGitHub } = useAuth();

  const renderStyles = () => {
    return (
      <style jsx>{`
        .layout {
          min-height: 100vh;
          padding: 100px;
          background-color: #fafafa
        }
        .container {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          padding: 112px 220px;
          width: 66%;
          justify-content: center;
          align-content: center;
        }
      `}</style>
    )
  }

  const _signinWithGoogle = () => {
    signinWithGoogle('/dashboard')
      .catch((error) => {
        message.error(error.message)
      })
  }

  const _signinWithGitHub = () => {
    signinWithGitHub('/dashboard')
      .catch((error) => {
        message.error(error.message)
      })
  }

  const _signupWithEmail = () => {
    if (!email) {
      message.error('Email is empty. Please enter your email.')
      return 
    }
    if (!password) {
      message.error("Password is empty. Please enter your password.")
      return
    }

    signupWithEmail(email, password, '/dashboard')
      .catch((error) => {
        message.error(error.message)
      })
  }

  return (
    <>
      <AppHeader />
      <div className="layout">
        <Card className="container">
          <Row style={{ marginBottom: 32 }} >
            <Col span={11}>
              <Title level={5}>Create an account:</Title>
              <Input 
                placeholder="Email"
                style={{ marginBottom: 8 }} 
                size="large" onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Input.Password
                placeholder="Password"
                size="large"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                style={{ marginBottom: 32 }} 
              />
              <Button type="primary" size="large" style={{ marginBottom: 32, width: 164 }} onClick={_signupWithEmail}>{t("signup")}</Button>
            </Col>
            <Col span={2} style={{ textAlign: "center" }}>
              <Divider type="vertical" style={{ height: "100%" }}/>
            </Col>
            <Col span={11}>
              <Title level={5}>Sign up with other provider:</Title>
              <Button block icon={<GoogleOutlined />} size="large" type="secondary" style={{ marginBottom: 8 }} onClick={_signinWithGoogle}>Google</Button>
              <Button block icon={<GithubOutlined />} size="large" type="secondary" style={{ marginBottom: 8 }} onClick={_signinWithGitHub}>GitHub</Button>
            </Col>
          </Row>
          <Title level={5} type="secondary">Already have an account? Log in.</Title>
          <Title level={5} type="secondary">Privacy Policy.</Title>
        </Card>
      </div>
      <AppFooter />
      {renderStyles()}
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Signup