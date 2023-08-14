import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {Lang} from '@/appTypes';

type ContextType = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
};

const LangContext = createContext<ContextType>({lang: 'fr', setLang: () => {}});

export const useLang = () => {
  return useContext(LangContext);
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr');

  return (
    <LangContext.Provider value={{lang, setLang}}>
      {children}
    </LangContext.Provider>
  );
};
