import MemoForm from '@/components/MemoForm';
import MemoBar from '@/components/memobar/MemoBar';
import {Memo} from '@/appTypes';

export default function App() {
  const placeholderMemo: Memo = {
    id: 0,
    title: '',
    content: ''
  };

  const memos: Array<Memo> = [
    {
      id: 1,
      title: 'Premier Memo',
      content: 'Contenu du premier memo'
    },
    {
      id: 2,
      title: 'Second Memo',
      content: 'Contenu du second memo'
    },
    {
      id: 3,
      title: 'Troisième Memo',
      content: 'Contenu du troisième memo'
    },
    {
      id: 4,
      title: 'Quatrième Memo',
      content: 'Contenu du quatrième memo'
    },
    {
      id: 5,
      title: 'Cinquième Memo',
      content: 'Contenu du cinquième memo'
    }
  ];

  const addMemo = (memo: Memo) => {
    memos.push(memo);
  };

  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo} addMemo={addMemo}/>
      <MemoBar memos={memos}/>
    </div>
  );
}
