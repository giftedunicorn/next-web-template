import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useAuth } from '../utils/auth';

const Dashboard = () => {
  const { user, loading, signout } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !user)
      router.push('/')
  }, [user, loading])

  return (
    <>
      {user ? (
        <div>
          <p>{user}</p>
          <Button onClick={signout}>
            Sign out
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default Dashboard;
