const style = {
  backgroundColor: '#c6e5d9',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = ({ props }) => {
  const { disabled, todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  );
};
