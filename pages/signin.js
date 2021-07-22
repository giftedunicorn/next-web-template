import { Button, Space } from 'antd';
import { useAuth } from '../utils/auth';

const Signin = () => {
  const { user, signinWithGoogle } = useAuth();

  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary" onClick={() => {
          signinWithGoogle('/dashboard')
        }}>Signin with Google</Button>
      </Space>
    </div>
  )
}

export default Signin