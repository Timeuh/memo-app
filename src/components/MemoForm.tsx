import {Memo} from '@/appTypes';

type Props = {
  memo: Memo,
  addMemo: (memo: Memo) => void
}

export default function MemoForm({memo, addMemo}: Props) {
  return (
    <div id={'memoForm'} className={'h-1/2 xl:w-1/3 flex flex-col items-center justify-center w-4/5'}>
      <form action='.' className={'memo-form'} id={`memo-${memo.id}`}>
        <input id={'memo-title'} type='text' placeholder={'Titre'} className={'memo-input h-10 rounded-full'} value={memo.title}/>
        <textarea id={'memo-content'} placeholder={'Mémo'} className={'memo-input h-1/2 rounded-lg py-2'} value={memo.content}/>
        <button id={'memo-submit'} type={'submit'} className={'w-5/6 h-10 bg-dark text-light rounded-full text-xl shadow-2xl'}>Créer</button>
      </form>
    </div>
  );
}