'use client'
import React from 'react';

export const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        document.cookie =
          'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        window.location.href = '/login';
      }}
      className="block text-red-600 hover:text-red-800 transition-colors"
    >
      🚪 Logout
    </button>
  );
};
