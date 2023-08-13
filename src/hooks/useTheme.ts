import {useState} from 'react';
import {Theme} from '@/appTypes';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return (prevTheme === 'light' ? 'dark' : 'light');
    });
  };

  const isLight = () => {
    return theme === 'light';
  };

  return {isLight, toggleTheme};
};

export default useTheme;
