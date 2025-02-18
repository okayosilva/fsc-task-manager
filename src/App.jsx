import { Header } from './components/header';
import { Tasks } from './components/tasks';

function App() {
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
