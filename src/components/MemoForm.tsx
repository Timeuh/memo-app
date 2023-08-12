export default function MemoForm() {
  return (
    <div id={'memoForm'} className={'h-1/2 w-1/3 flex flex-col items-center justify-center'}>
      <form action='.' className={'memo-form'}>
        <input id={'memo-title'} type='text' placeholder={'Titre du mémo'} className={'memo-input h-10 rounded-full'}/>
        <textarea id={'memo-content'} placeholder={'Texte du mémo'} className={'memo-input h-1/2 rounded-lg py-2'}/>
        <button id={'memo-submit'} type={'submit'} className={'w-5/6 h-10 bg-dark text-light rounded-full text-xl shadow-2xl'}>Créer</button>
      </form>
    </div>
  );
}