import MemoBarItem from '@/components/memobar/MemoBarItem';
import {Memo} from '@/appTypes';

export default function MemoBar() {
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

  return (
    <div id={'memoBar'} className={'memo-bar-desktop'}>
      <h1 className={'text-xl font-bold border-b-2 border-dark h-12 text-center w-5/6 pt-4'}>Vos mémos</h1>
      <div id={'memoContainer'} className={'flex flex-col items-center space-y-4 w-full h-full pt-4 overflow-y-scroll'}>
        {
          memos.map((memo) => {
            return <MemoBarItem key={memo.id} memo={memo} />;
          })
        }
      </div>
    </div>
  );
}