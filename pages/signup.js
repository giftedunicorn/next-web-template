import { Button, Space } from 'antd';
import { useAuth } from '../utils/auth';

const Signup = () => {
  
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary" onClick={() => {

        }}>Signup with Google</Button>
      </Space>
    </div>
  )
}

export default Signup