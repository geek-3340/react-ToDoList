import { useState } from 'react';
import './style.css';

export const Component = () => {
  // inputの値をstateで管理する
  const [todoText, setTodoText] = useState('');

  // 未完了のTODOをstateで管理する
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODOをstateで管理する
  const [completeTodos, setCompleteTodos] = useState([]);

  // input入力された値をstateに更新する関数
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // 追加ボタンがクリックされたら時に呼ばれる関数
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

  // 削除ボタンがクリックされた時に呼ばれる関数
  // indexはmapで回した時のindexを受け取る
  const onClickDelete = (index) => {
    // 未完了のTODOの配列をコピーして新しい配列を作成する
    // 直接stateを変更するとReactがstateの変更を検知できないので、必ず新しい配列を作成する
    const newTodos=[...incompleteTodos];
    // 削除ボタンがクリックされたindexのTODOを削除する
    newTodos.splice(index,1);
    // 未完了のTODOのstateを更新する
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンがクリックされた時に呼ばれる関数
  // indexはmapで回した時のindexを受け取る
  const onClickComplete = (index) => {
    // 未完了のTODOの配列をコピーして新しい配列を作成する
    const newTodos=[...incompleteTodos];
    // 完了ボタンがクリックされたindexのTODOを削除する
    newTodos.splice(index,1);
    // 完了のTODOの配列をコピーして、末尾にボタンがクリックされたTODOを追加する
    const newCompleteTodos=[...completeTodos,incompleteTodos[index]];
    // 未完了、完了のTODOのstateをそれぞれ更新する
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンがクリックされた時に呼ばれる関数
  // indexはmapで回した時のindexを受け取る
  const onClickBack = (index) => {
    // 完了のTODOの配列をコピーして新しい配列を作成する
    const newTodos=[...completeTodos];
    // 戻すボタンがクリックされたindexのTODOを削除する
    newTodos.splice(index,1);
    // 未完了のTODOの配列をコピーして、末尾にボタンがクリックされたTODOを追加する
    const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
    // 未完了、完了のTODOのstateをそれぞれ更新する
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
                {/* JSX内の関数で引数を受け取るときは、アロー関数で再宣言しないと実行とみなされる */}
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
