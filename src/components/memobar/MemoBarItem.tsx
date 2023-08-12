import {Memo} from '@/appTypes';

type Props = {
  memo: Memo,
  selectMemo: (memo: Memo) => void
}

export default function MemoBarItem({memo, selectMemo}: Props) {
  return (
    <div className={'memo-item-desktop'} onClick={() => {
      selectMemo(memo);
    }}>
      <h3 className={'text-xl'}>{memo.title}</h3>
    </div>
  );
}