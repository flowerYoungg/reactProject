import React, { PureComponent } from "react";

const HabitAddForm = PureComponent((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    //page refresh 방지
    event.preventDefault();
    const name = inputRef.current.value;
    //if there is name
    name && props.onAdd(name);
    //텍스트 입력 후 초기화
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
