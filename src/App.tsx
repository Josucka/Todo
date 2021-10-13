import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Tarefa 1', done: true},
    {id: 2, name: 'Tarefa 2', done: false},
  ]);
  const handlerAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>
        {/*area de adicionar novas tarefas*/}
        <AddArea onEnter={handlerAddTask} />
        {/* mostrando a lista de tarefas*/}
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>

  );
}

export default App;