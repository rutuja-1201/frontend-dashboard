import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';

interface RoleBasedRouteProps {
  role: string;
  children: React.ReactNode;
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ role, children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  if (user.role !== role) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
