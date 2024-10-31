import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Users: React.FC = () => {
  const { user } = useAuth();

  if (user?.role !== 'admin') {
    return <p>You do not have access to this page.</p>;
  }

  return (
    <div>
      <h1>User Management</h1>
      {/* Implement user management functionalities */}
    </div>
  );
};

export default Users;
