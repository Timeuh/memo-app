import {Memo} from '@/appTypes';
import React, {MouseEvent} from 'react';

type Props = {
  memo: Memo,
  addMemo: (memo: Memo) => void,
  changeMemo: (memo: Memo) => void
}

export default function MemoForm({memo, addMemo, changeMemo}: Props) {
  const createMemo = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    addMemo(memo);
  };

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeMemo({...memo, title: event.target.value});
  };

  const changeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeMemo({...memo, content: event.target.value});
  };

  return (
    <div id={'memoForm'} className={'h-1/2 xl:w-1/3 flex flex-col items-center justify-center w-4/5'}>
      <form action='.' className={'memo-form'} id={`memo-${memo.id}`}>
        <input id={'memo-title'} type='text' placeholder={'Titre'} className={'memo-input h-10 rounded-full'} value={memo.title}
          onChange={(event) => {
            changeTitle(event);
          }}/>
        <textarea id={'memo-content'} placeholder={'Mémo'} className={'memo-input h-1/2 rounded-lg py-2'} value={memo.content}
          onChange={(event) => {
            changeContent(event);
          }}/>
        <button id={'memo-submit'} className={'w-5/6 h-10 bg-dark text-light rounded-full text-xl shadow-2xl'}
          onClick={(event) => {
            createMemo(event);
          }}>Créer</button>
      </form>
    </div>
  );
}