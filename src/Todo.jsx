import { useState } from 'react';
import './style.css';

export const Component = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos=[...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos=[...incompleteTodos];
    newTodos.splice(index,1);
    const newCompleteTodos=[...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newTodos=[...completeTodos];
    newTodos.splice(index,1);
    const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
    setCompleteTodos(newTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={()=>{onClickBack(index)}}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
