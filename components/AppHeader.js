import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { Layout, Button, Typography, Space, Select, Input, Row, Col, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../public/logo.svg'
import Link from './Link'
const { Title } = Typography;
const { Search } = Input;
const { Header } = Layout;
const { Option } = Select;

function AppHeader() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLanuage = router.locale
  const currentPath = router.asPath

  const renderStyles = () => {
    return (
      <style jsx>{`
        .header {
          background-color: #fff;
          box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
          position: sticky;
        }
        .searchInput {
          background: #f5f6f7;
          border-radius: 16px;
        }
      `}</style>
    )
  }

  const openHome = () => {
    Router.push('/')
  }

  const openLogin = () => {
    Router.push('/login')
  }

  const openSignup = () => {
    Router.push('/signup')
  }

  const languageOnChange = (value) => {
    router.push(currentPath, currentPath, { locale: value })
  }

  const renderHelper = () => {
    return (
      <Row align="middle" justify="space-between">
        <Col span={6}>
          <Link href="/">
            <Image src="/logo.svg" alt="" width={40} height={40}/>
            <Title level={3} style={{margin: 0, marginLeft: 16}}>{t('appname')}</Title>
          </Link>
        </Col>
        <Col span={12}>
          <Space align="center" style={{float: 'right'}}>
            <Input 
              bordered={false} 
              className="searchInput"
              placeholder={t("search")}
              suffix={
                <SearchOutlined style={{ fontSize: '16px' }}/>
              }
            />
            <Divider type="vertical" />
            <Link href="/products">
              <Typography>{t('products')}</Typography>
            </Link>
            <Divider type="vertical" />
            <Link href="/pricing">
              <Typography>{t('pricing')}</Typography>
            </Link>
            <Divider type="vertical" />
            <Link href="/blog">
              <Typography>{t('blog')}</Typography>
            </Link>
            <Divider type="vertical" />
            <Link href="/login">
              <Typography>{t('login')}</Typography>
            </Link>
            <Divider type="vertical" />
            <Link href="/signup">
              <Button type="primary" shape="round">{t('signup')}</Button>
            </Link>
            <Divider type="vertical" />
            <Select defaultValue="en" value={currentLanuage} onChange={languageOnChange} bordered={false}>
              <Option value="en">English</Option>
              <Option value="zh-CN">简体中文</Option>
            </Select>
          </Space>
        </Col>
      </Row>
    )
  }
  
  return (
    <>
      <Header id='app-header' className="header">
        {renderHelper()}
      </Header>
      {renderStyles()}
    </>
  )
}

export default AppHeader;
