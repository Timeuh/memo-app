import MemoForm from '@/components/MemoForm';
import MemoBar from '@/components/memobar/MemoBar';
import {Memo} from '@/appTypes';
import {useState} from 'react';
import useMemoList from '@/hooks/useMemoList';

export default function App() {
  const placeholderTypeMemo: Memo = {
    id: 0,
    title: '',
    content: ''
  };

  const [placeholderMemo, setPlaceholderMemo] = useState<Memo>(placeholderTypeMemo);
  const [memos, setMemos] = useState<Array<Memo>>([]);
  useMemoList(setMemos);

  const addMemo = (memo: Memo) => {
    const newMemos: Array<Memo> = [...memos, memo];
    setMemos(newMemos);
    setPlaceholderMemo(placeholderTypeMemo);
    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  const changePlaceholderMemo = (memo: Memo) => {
    setPlaceholderMemo(memo);
  };

  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo} addMemo={addMemo} changeMemo={changePlaceholderMemo}/>
      <MemoBar memos={memos}/>
    </div>
  );
}
