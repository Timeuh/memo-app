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
    const currentId = localStorage.getItem('currentId');
    if (currentId === null){
      return;
    }

    let nextId = parseInt(currentId);
    nextId ++;
    localStorage.setItem('currentId', JSON.stringify(nextId));
    memo.id = nextId;

    const newMemos: Array<Memo> = [...memos, memo];
    setMemos(newMemos);
    setPlaceholderMemo(placeholderTypeMemo);
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
    setPlaceholderMemo(placeholderTypeMemo);
    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo} addMemo={addMemo} changeMemo={changePlaceholderMemo} deleteMemo={deleteMemo}/>
      <MemoBar memos={memos} selectMemo={selectMemo}/>
    </div>
  );
}
