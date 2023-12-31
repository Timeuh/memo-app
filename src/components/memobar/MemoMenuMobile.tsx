import MemoBarItem from '@/components/memobar/MemoBarItem';
import {Memo} from '@/appTypes';
import {useState} from 'react';
import {useTheme} from '@/hooks/useTheme';
import {memoTitle} from '@/appTexts';
import {useLang} from '@/hooks/useLang';

type Props = {
  memos: Array<Memo>,
  selectMemo: (memo: Memo) => void
}

export default function MemoMenuMobile({memos, selectMemo}: Props) {
  const {lang} = useLang();
  const {isCurrentLight} = useTheme();
  const [isActive, setActive] = useState<boolean>(false);

  const triggerActive = () => {
    setActive(!isActive);
  };

  return (
    <div id={'memoMenu'} className={'w-full flex flex-col xl:hidden overflow-hidden'}>
      <button id={'memoMenuTrigger'} className={`memo-menu-button ${isCurrentLight ? 'bg-violet' : 'bg-purple'}`} onClick={triggerActive}>
        <div className={`h-1 w-4/6 ${isCurrentLight ? 'bg-dark' : 'bg-light'}`}></div>
        <div className={`h-1 w-4/6 ${isCurrentLight ? 'bg-dark' : 'bg-light'}`}></div>
        <div className={`h-1 w-4/6 ${isCurrentLight ? 'bg-dark' : 'bg-light'}`}></div>
      </button>
      <div id={'memoMenuDisplayed'} className={`memo-menu-mobile ${isActive ? 'translate-x-0' : '-translate-x-96'} 
        ${isCurrentLight ? 'bg-violet shadow-main' : 'bg-purple shadow-dark'}`}>
        <h1 className={`text-xl font-bold border-b-2 h-12 text-center w-5/6 pt-4 
          ${isCurrentLight ? 'border-dark' : 'border-light text-light'}`}>{memoTitle[lang]}</h1>
        <div id={'memoContainer'} className={'flex flex-col items-center space-y-4 w-full h-full pt-4 overflow-y-scroll'} onClick={triggerActive}>
          {
            memos.map((memo: Memo) => {
              if (!memo) return;
              return <MemoBarItem key={memo.id} memo={memo} selectMemo={selectMemo}/>;
            })
          }
        </div>
      </div>
    </div>
  );
}