import {useTheme} from '@/hooks/useTheme';
import optionsLight from '@/img/options-light.png';
import optionsDark from '@/img/options-dark.png';
import lightMode from '@/img/light.png';
import darkMode from '@/img/dark.png';
import {useState} from 'react';

export default function OptionsMenuMobile() {
  const {isCurrentLight, setTheme} = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div id={'optionsMobile'} className={'w-full xl:hidden overflow-hidden'}>
      <button className={`h-12 w-12 absolute top-4 right-4 rounded-md flex flex-col items-center justify-center 
        ${isCurrentLight ? 'bg-violet' : 'bg-purple'}`} onClick={() => {
        setIsActive(!isActive);
      }}>
        <img src={isCurrentLight ? optionsLight : optionsDark} alt='options logo' className={'w-8 h-8'}/>
      </button>
      <div className={`w-1/3 h-1/5 rounded-md absolute top-20 right-4 flex flex-row items-center justify-center transition-transform duration-500
          ${isCurrentLight ? 'bg-violet' : 'bg-purple'} ${isActive ? 'translate-x-0' : 'translate-x-96'}`} onClick={() => {
        setIsActive(!isActive);
      }}>
        <button onClick={() => {
          setTheme('light');
        }}><img src={lightMode} alt='light mode'/></button>
        <button onClick={() => {
          setTheme('dark');
        }}><img src={darkMode} alt='dark mode'/></button>
      </div>
    </div>
  );
}