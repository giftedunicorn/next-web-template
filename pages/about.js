import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button, Space, DatePicker, Card, Typography } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

const About = () => {
  const onChange = () => {};
  const { t } = useTranslation('common')

  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
        <Typography.Title>{t('home')}</Typography.Title>
      </Space>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default About
