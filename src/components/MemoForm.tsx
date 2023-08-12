import {Memo} from '@/appTypes';
import React from 'react';

type Props = {
  memo: Memo,
  addMemo: (memo: Memo) => void,
  changeMemo: (memo: Memo) => void,
  deleteMemo: (id: number) => void,
  resetMemo: () => void
}

export default function MemoForm({memo, addMemo, changeMemo, deleteMemo, resetMemo}: Props) {
  const createMemo = () => {
    addMemo(memo);
  };

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeMemo({...memo, title: event.target.value});
  };

  const changeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeMemo({...memo, content: event.target.value});
  };

  return (
    <div id={'memoForm'} className={'memo-form-container'}>
      <div className={'flex flex-row items-center justify-around w-full'}>
        <button className={'form-button xl:w-1/3 w-2/5'} onClick={resetMemo}>Vider</button>
        <button className={'form-button xl:w-1/3 w-2/5'} onClick={() => {
          deleteMemo(memo.id);
        }}>Supprimer</button>
      </div>
      <form action='.' className={'memo-form'} id={`memo-${memo.id}`}>
        <input id={'memo-title'} type='text' placeholder={'Titre'} className={'memo-input h-10 rounded-full'} value={memo.title}
          onChange={(event) => {
            changeTitle(event);
          }}/>
        <textarea id={'memo-content'} placeholder={'Mémo'} className={'memo-input h-1/2 rounded-lg py-2'} value={memo.content}
          onChange={(event) => {
            changeContent(event);
          }}/>
        <button id={'memo-submit'} className={'form-button w-5/6'}
          onClick={(event) => {
            event.preventDefault();

            if (memo.title.length !== 0 && memo.content.length !== 0) {
              createMemo();
            }
          }}>{memo.id === 0 ? 'Créer' : 'Enregistrer'}</button>
      </form>
    </div>
  );
}