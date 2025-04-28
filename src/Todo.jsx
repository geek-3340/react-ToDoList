import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import './style.css';

export const Todo = () => {
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
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 4;

  return (
    <>
      <InputTodo
        disabled={isMaxLimitIncompleteTodos}
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: 'red' }}>
          登録出来るTODOは4個までだよ～、消化しろ～。
        </p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
