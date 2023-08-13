import MemoBarItem from '@/components/memobar/MemoBarItem';
import {Memo} from '@/appTypes';
import useTheme from '@/hooks/useTheme';

type Props = {
  memos: Array<Memo>,
  selectMemo: (memo: Memo) => void
}

export default function MemoBar({memos, selectMemo}: Props) {
  const {isCurrentLight} = useTheme();

  return (
    <div id={'memoBar'} className={`memo-bar-desktop ${isCurrentLight ? 'bg-violet shadow-main' : 'bg-purple shadow-dark'}`}>
      <h1 className={`text-xl font-bold border-b-2 h-12 text-center w-5/6 pt-4 
        ${isCurrentLight ? 'border-dark' : 'border-light text-light'}`}>Vos mémos</h1>
      <div id={'memoContainer'} className={'flex flex-col items-center space-y-4 w-full h-full pt-4 overflow-y-scroll'}>
        {
          memos.map((memo: Memo) => {
            if (!memo) return;
            return <MemoBarItem key={memo.id} memo={memo} selectMemo={selectMemo}/>;
          })
        }
      </div>
    </div>
  );
}