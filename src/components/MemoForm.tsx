export default function MemoForm() {
  return (
    <div id={'memoForm'}>
      <form action='.'>
        <input type='text' placeholder={'Titre du mémo'}/>
        <textarea placeholder={'Texte du mémo'}/>
        <button type={'submit'}>Créer</button>
      </form>
    </div>
  );
}