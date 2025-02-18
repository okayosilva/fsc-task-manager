import { Header } from './components/header';
import { Tasks } from './components/tasks';

function App() {
  const name = 'test';
  console.log(name);

  return (
    <>
      <Header>
        <h1>Minha lista de tarefas</h1>
      </Header>
      <Tasks />
    </>
  );
}

export default App;
