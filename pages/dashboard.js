import { useEffect } from 'react';
import Router from 'next/router';
import { Button } from 'antd';
import { useAuth } from '../utils/auth';

const Dashboard = () => {
  const { user, loading, signout } = useAuth();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !user)
      Router.push('/')
  }, [user, loading])

  return (
    <>
      {user ? (
        <div>
          <p>{user.email}</p>
          <Button onClick={signout}>
            Sign out
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default Dashboard;
