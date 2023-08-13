import {Memo} from '@/appTypes';
import useTheme from '@/hooks/useTheme';

type Props = {
  memo: Memo,
  selectMemo: (memo: Memo) => void
}

export default function MemoBarItem({memo, selectMemo}: Props) {
  const {isCurrentLight} = useTheme();

  return (
    <div className={`memo-item-desktop ${isCurrentLight ? 'border-dark hover:bg-purple hover:text-light' : 'border-light hover:bg-dark text-light'}`}
      onClick={() => {
        selectMemo(memo);
      }}>
      <h3 className={'text-xl'}>{memo.title}</h3>
    </div>
  );
}