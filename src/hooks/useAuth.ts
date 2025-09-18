import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Simulate API call to verify token
      setTimeout(() => {
        setUser({
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          addresses: [],
          newsletterOptIn: false,
          createdAt: new Date().toISOString()
        });
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email,
      addresses: [],
      newsletterOptIn: false,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('auth_token', 'mock_token');
    setUser(mockUser);
    setIsLoading(false);
    return mockUser;
  };

  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      email: userData.email || '',
      addresses: [],
      newsletterOptIn: userData.newsletterOptIn || false,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('auth_token', 'mock_token');
    setUser(newUser);
    setIsLoading(false);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
};