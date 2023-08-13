import {useEffect, useState} from 'react';
import {Theme} from '@/appTypes';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isCurrentLight, setIsCurrentLight] = useState<boolean>(true);

  useEffect(() => {
    setIsCurrentLight(theme === 'light');
  }, [theme]);

  return {isCurrentLight, setTheme};
};

export default useTheme;
