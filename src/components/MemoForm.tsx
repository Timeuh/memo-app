import {Memo} from '@/appTypes';
import React from 'react';
import {useTheme} from '@/hooks/useTheme';

type Props = {
  memo: Memo,
  addMemo: (memo: Memo) => void,
  changeMemo: (memo: Memo) => void,
  deleteMemo: (id: number) => void,
  resetMemo: () => void
}

export default function MemoForm({memo, addMemo, changeMemo, deleteMemo, resetMemo}: Props) {
  const {isCurrentLight} = useTheme();

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
    <div id={'memoForm'} className={`memo-form-container ${isCurrentLight ? 'bg-violet shadow-main' : 'bg-purple shadow-dark'}`}>
      <div className={'flex flex-row items-center justify-around w-full'}>
        <button className={`form-button xl:w-1/3 w-2/5 ${isCurrentLight ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          onClick={resetMemo}>Vider</button>
        <button className={`form-button xl:w-1/3 w-2/5 ${isCurrentLight ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => {
          deleteMemo(memo.id);
        }}>Supprimer</button>
      </div>
      <form action='.' className={'memo-form'} id={`memo-${memo.id}`}>
        <input id={'memo-title'} type='text' placeholder={'Titre'} value={memo.title} className={`memo-input h-10 rounded-full 
          ${isCurrentLight ? 'border-dark bg-light text-dark placeholder-purple' : 'border-violet bg-dark text-light placeholder-violet'}`}
        onChange={(event) => {
          changeTitle(event);
        }}/>
        <textarea id={'memo-content'} placeholder={'Mémo'} value={memo.content} className={`memo-input h-1/2 rounded-lg py-2 
        ${isCurrentLight ? 'border-dark bg-light text-dark placeholder-purple' : 'border-violet bg-dark text-light placeholder-violet'}`}
        onChange={(event) => {
          changeContent(event);
        }}/>
        <button id={'memo-submit'} className={`form-button w-5/6 ${isCurrentLight ? 'bg-dark text-light' : 'bg-light text-dark'}`}
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