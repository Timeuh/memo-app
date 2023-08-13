import {useEffect, useState} from 'react';
import {Theme} from '@/appTypes';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isCurrentLight, setIsCurrentLight] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return (prevTheme === 'light' ? 'dark' : 'light');
    });
  };

  useEffect(() => {
    setIsCurrentLight(theme === 'light');
  }, [theme]);

  return {isCurrentLight, toggleTheme};
};

export default useTheme;
