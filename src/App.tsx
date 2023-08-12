import MemoForm from '@/components/MemoForm';
import MemoBar from '@/components/memobar/MemoBar';
import {Memo} from '@/appTypes';

export default function App() {
  const placeholderMemo: Memo = {
    id: 0,
    title: '',
    content: ''
  };

  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm memo={placeholderMemo}/>
      <MemoBar />
    </div>
  );
}
