import MemoForm from '@/components/MemoForm';
import MemoBar from '@/components/memobar/MemoBar';
import {Memo} from '@/appTypes';
import {useState} from 'react';
import useMemoList from '@/hooks/useMemoList';
import getCurrentId from '@/functions/getCurrentId';

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
    memo.id = getCurrentId();

    const newMemos: Array<Memo> = [...memos, memo];
    setMemos(newMemos);
    resetMemo();
    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  const changePlaceholderMemo = (memo: Memo) => {
    setPlaceholderMemo(memo);
  };

  const selectMemo = (memo: Memo) => {
    setPlaceholderMemo(memo);
  };

  const deleteMemo = (id: number) => {
    const newMemos: Array<Memo> = memos.filter((memo: Memo) => {
      return memo.id !== id;
    });
    setMemos(newMemos);
    resetMemo();
    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  const resetMemo = () => {
    setPlaceholderMemo(placeholderTypeMemo);
  };

  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo} addMemo={addMemo} changeMemo={changePlaceholderMemo} deleteMemo={deleteMemo} resetMemo={resetMemo}/>
      <MemoBar memos={memos} selectMemo={selectMemo}/>
    </div>
  );
}
