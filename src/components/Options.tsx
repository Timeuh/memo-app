import {useTheme} from '@/hooks/useTheme';
import light from '@/img/light.png';
import dark from '@/img/dark.png';
import french from '@/img/france.png';
import english from '@/img/england.png';
import {useLang} from '@/hooks/useLang';

export default function Options() {
  const {isCurrentLight, setTheme} = useTheme();
  const {setLang} = useLang();

  return (
    <div id={'options'} className={`absolute w-1/6 h-fit -top-16 left-10 rounded-md shadow-lg hidden xl:block py-2 space-y-2
      ${isCurrentLight ? 'shadow-main bg-violet' : 'shadow-purple bg-purple'}`}>
      <div className={'h-full flex flex-row items-center justify-center space-x-8'}>
        <button onClick={() => {
          setTheme('light');
        }}><img src={light} alt='light mode'/></button>
        <button onClick={() => {
          setTheme('dark');
        }}><img src={dark} alt='dark mode'/></button>
      </div>
      <div className={'h-full flex flex-row items-center justify-center space-x-8'}>
        <button onClick={() => {
          setLang('fr');
        }}><img src={french} alt='french langage' className={'h-16 w-16'}/></button>
        <button onClick={() => {
          setLang('en');
        }}><img src={english} alt='english langage' className={'h-16 w-16'}/></button>
      </div>
    </div>
  );
}