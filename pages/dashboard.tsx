import { useAuth } from '@/app/hooks/useAuth';
import React from 'react';


const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          
        </div>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
