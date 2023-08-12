import MemoBarItem from '@/components/memobar/MemoBarItem';
import {Memo} from '@/appTypes';

type Props = {
  memos: Array<Memo>,
  selectMemo: (memo: Memo) => void
}

export default function MemoBar({memos, selectMemo}: Props) {

  return (
    <div id={'memoBar'} className={'memo-bar-desktop'}>
      <h1 className={'text-xl font-bold border-b-2 border-dark h-12 text-center w-5/6 pt-4'}>Vos mémos</h1>
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