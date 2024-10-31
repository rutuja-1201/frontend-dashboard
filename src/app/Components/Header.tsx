import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        {user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/upload">Upload Data</Link>
            {user.role === 'admin' && <Link href="/users">User Management</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
