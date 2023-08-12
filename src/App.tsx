import MemoForm from '@/components/MemoForm';

export default function App() {
  return (
    <div id='App' className={'w-full h-screen bg-light flex flex-col items-center justify-center space-y-24 font-SourceCodePro'}>
      <h1 className={'app-title'}>Créez vos mémos</h1>
      <MemoForm />
    </div>
  );
}
