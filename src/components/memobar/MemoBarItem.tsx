import {Memo} from '@/appTypes';

type Props = {
  memo: Memo
}

export default function MemoBarItem({memo}: Props) {
  return (
    <div className={'memo-item-desktop'}>
      <h3 className={'text-xl'}>{memo.title}</h3>
    </div>
  );
}