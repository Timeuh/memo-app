import MemoBarItem from '@/components/MemoBarItem';

export default function MemoBar() {

  return (
    <div id={'memoBar'} className={'memo-bar-desktop'}>
      <h1 className={'text-xl font-bold border-b-2 border-dark h-12 text-center w-5/6 pt-4'}>Vos mémos</h1>
      <div id={'memoContainer'} className={'flex flex-col items-center space-y-4 w-full h-full pt-4 overflow-y-scroll'}>
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
        <MemoBarItem />
      </div>
    </div>
  );
}