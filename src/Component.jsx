import { useState } from 'react';
import './style.css';

export const Component = () => {

  // inputの値をstateで管理する
  const [todoText, setTodoText] = useState('');

  // 未完了のTODOをstateで管理する
  const [incompleteTodos, setIncompleteTodos] = useState([
    'TODOです1',
    'TODOです2',
  ]);

  // 完了のTODOをstateで管理する
  const [completeTodos, setCompleteTodos] = useState([
    'TODOでした1',
    'TODOでした2',
  ]);

  // input入力された値をstateに更新する関数
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // ボタンがクリックされたら時に呼ばれる関数
  const onClickAdd = () => {
    // inputの値が空の時は何もしない
    if (todoText === '') return;
    // input値を未完了のTODOに追加する
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のTODOのstateを更新する
    setIncompleteTodos(newTodos);
    // inputの値を空にする
    setTodoText('');
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
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
