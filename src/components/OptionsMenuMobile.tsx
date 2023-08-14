import {useTheme} from '@/hooks/useTheme';
import optionsLight from '@/img/options-light.png';
import optionsDark from '@/img/options-dark.png';
import lightMode from '@/img/light.png';
import darkMode from '@/img/dark.png';
import french from '@/img/france.png';
import english from '@/img/england.png';
import {useState} from 'react';
import {useLang} from '@/hooks/useLang';

export default function OptionsMenuMobile() {
  const {isCurrentLight, setTheme} = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  const {setLang} = useLang();

  return (
    <div id={'optionsMobile'} className={'w-full xl:hidden overflow-hidden'}>
      <button className={`h-12 w-12 absolute top-4 right-4 rounded-md flex flex-col items-center justify-center 
        ${isCurrentLight ? 'bg-violet' : 'bg-purple'}`} onClick={() => {
        setIsActive(!isActive);
      }}>
        <img src={isCurrentLight ? optionsLight : optionsDark} alt='options logo' className={'w-8 h-8'}/>
      </button>
      <div className={`w-1/3 h-1/5 rounded-md absolute top-20 right-4 flex flex-col items-center justify-center transition-transform duration-500
          ${isCurrentLight ? 'bg-violet' : 'bg-purple'} ${isActive ? 'translate-x-0' : 'translate-x-48'}`} onClick={() => {
        setIsActive(!isActive);
      }}>
        <div className={'w-full h-1/2 flex flex-row items-center justify-center'}>
          <button onClick={() => {
            setTheme('light');
          }}><img src={lightMode} alt='light mode'/></button>
          <button onClick={() => {
            setTheme('dark');
          }}><img src={darkMode} alt='dark mode'/></button>
        </div>
        <div className={'w-full h-1/2 flex flex-row items-center justify-center'}>
          <button onClick={() => {
            setLang('fr');
          }}><img src={french} alt='french lagage' className={'h-16 w-16'}/></button>
          <button onClick={() => {
            setLang('en');
          }}><img src={english} alt='enflish langage' className={'h-16 w-16'}/></button>
        </div>
      </div>
    </div>
  );
}