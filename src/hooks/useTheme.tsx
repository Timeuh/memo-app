import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from 'react';
import {Theme} from '@/appTypes';

type ContextType = {
  isCurrentLight: boolean;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ContextType>({isCurrentLight: true, setTheme: () => {}});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const isCurrentLight = theme === 'light';

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{isCurrentLight, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
