import {useTheme} from '@/hooks/useTheme';

export default function Options() {
  const {isCurrentLight, setTheme} = useTheme();

  return (
    <div id={'options'} className={`absolute w-1/6 h-24 -top-10 left-10 rounded-md shadow-lg hidden xl:block
      ${isCurrentLight ? 'shadow-main bg-violet' : 'shadow-purple bg-purple'}`}>
      <div className={'h-full flex flex-row items-center justify-center space-x-8'}>
        <button onClick={() => {
          setTheme('light');
        }}><img src='src/img/light.png' alt='light mode'/></button>
        <button onClick={() => {
          setTheme('dark');
        }}><img src='src/img/dark.png' alt='dark mode'/></button>
      </div>
    </div>
  );
}