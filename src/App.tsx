import MemoForm from '@/components/MemoForm';
import MemoBar from '@/components/memobar/MemoBar';
import {Memo} from '@/appTypes';
import {useState} from 'react';
import useMemoList from '@/hooks/useMemoList';
import getCurrentId from '@/functions/getCurrentId';
import MemoMenuMobile from '@/components/memobar/MemoMenuMobile';
import useTheme from '@/hooks/useTheme';

export default function App() {
  const {isCurrentLight} = useTheme();

  const placeholderTypeMemo: Memo = {
    id: 0,
    title: '',
    content: ''
  };

  const [placeholderMemo, setPlaceholderMemo] = useState<Memo>(placeholderTypeMemo);
  const [memos, setMemos] = useState<Array<Memo>>([]);
  useMemoList(setMemos);

  const addMemo = (memo: Memo) => {
    let newMemos;

    if (memo.id === 0){
      newMemos = createMemo(memo);
    } else {
      newMemos = updateMemo(memo);
    }

    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  const updateMemo = (memo: Memo) => {
    const newMemos = memos.map((memoInList: Memo) => {
      if (memoInList.id === memo.id) {
        memoInList.title = memo.title;
        memoInList.content = memo.content;
      }

      return memoInList;
    });
    setMemos(newMemos);
    return newMemos;
  };

  const createMemo = (memo: Memo) => {
    memo.id = getCurrentId();
    const newMemos: Array<Memo> = [...memos, memo];
    setMemos(newMemos);
    resetMemo();
    return newMemos;
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
    <main id='App' className={`w-full h-screen flex flex-col items-center justify-center space-y-24 font-SourceCodePro 
      ${isCurrentLight ? 'bg-light' : 'bg-dark'}`}>
      <h1 className={`app-title ${isCurrentLight ? 'from-dark via-main to-dark' : 'from-light via-main to-light'}`}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo} addMemo={addMemo} changeMemo={changePlaceholderMemo} deleteMemo={deleteMemo} resetMemo={resetMemo}/>
      <MemoBar memos={memos} selectMemo={selectMemo}/>
      <MemoMenuMobile memos={memos} selectMemo={selectMemo}/>
    </main>
  );
}
